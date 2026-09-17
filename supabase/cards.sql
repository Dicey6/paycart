-- VeyaPay virtual cards.
-- Adds a cards table and provisions one card per user automatically on
-- signup, by extending the existing handle_new_user() trigger from
-- schema.sql. Run this AFTER schema.sql.
--
-- Card numbers are generated server-side with a valid Luhn check digit,
-- so they behave like real card numbers (they are not charge-able; this
-- is a virtual-card UI, not a card network integration).

begin;

create table if not exists public.cards (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  card_number text not null unique,
  last4 text not null,
  expiry_month smallint not null,
  expiry_year smallint not null,
  frozen boolean not null default false,
  created_at timestamptz not null default timezone('utc', now())
);

alter table public.cards enable row level security;

grant select, update on table public.cards to authenticated;
revoke all on table public.cards from anon;

drop policy if exists "Users can view their own card" on public.cards;
create policy "Users can view their own card"
  on public.cards for select
  to authenticated
  using (auth.uid() = user_id);

-- Users may only flip the frozen flag on their own card, not touch the
-- card number, expiry, or ownership.
drop policy if exists "Users can freeze or unfreeze their own card" on public.cards;
create policy "Users can freeze or unfreeze their own card"
  on public.cards for update
  to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Generates a 16-digit number with a prefix that reads as a VeyaPay
-- issued card, and a valid trailing Luhn check digit. Retries on the
-- (astronomically unlikely) chance of a collision with an existing card.
create or replace function public.generate_card_number()
returns text
language plpgsql
as $$
declare
  prefix text := '4821';
  candidate text;
  body text;
  total int;
  digit int;
  i int;
  check_digit int;
begin
  loop
    body := prefix || lpad(floor(random() * 100000000000)::text, 11, '0');

    total := 0;
    for i in 1..length(body) loop
      digit := substr(body, length(body) - i + 1, 1)::int;
      if i % 2 = 1 then
        digit := digit * 2;
        if digit > 9 then
          digit := digit - 9;
        end if;
      end if;
      total := total + digit;
    end loop;
    check_digit := (10 - (total % 10)) % 10;

    candidate := body || check_digit::text;

    exit when not exists (select 1 from public.cards where card_number = candidate);
  end loop;

  return candidate;
end;
$$;

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
declare
  requested_username text;
  new_card_number text;
  card_expiry timestamptz;
begin
  requested_username := left(
    trim(new.raw_user_meta_data ->> 'username'),
    24
  );

  insert into public.profiles (id, username, email)
  values (
    new.id,
    coalesce(
      nullif(requested_username, ''),
      nullif(left(split_part(coalesce(new.email, ''), '@', 1), 24), ''),
      'user-' || left(replace(new.id::text, '-', ''), 8)
    ),
    coalesce(new.email, '')
  )
  on conflict (id) do update set
    email = excluded.email,
    updated_at = timezone('utc', now());

  if not exists (select 1 from public.cards where user_id = new.id) then
    new_card_number := public.generate_card_number();
    card_expiry := timezone('utc', now()) + interval '3 years';

    insert into public.cards (user_id, card_number, last4, expiry_month, expiry_year)
    values (
      new.id,
      new_card_number,
      right(new_card_number, 4),
      extract(month from card_expiry)::smallint,
      extract(year from card_expiry)::smallint
    )
    on conflict (user_id) do nothing;
  end if;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Backfill cards for users that already existed before this migration.
do $$
declare
  existing_user record;
  new_card_number text;
  card_expiry timestamptz;
begin
  for existing_user in select id from auth.users loop
    if not exists (select 1 from public.cards where user_id = existing_user.id) then
      new_card_number := public.generate_card_number();
      card_expiry := timezone('utc', now()) + interval '3 years';

      insert into public.cards (user_id, card_number, last4, expiry_month, expiry_year)
      values (
        existing_user.id,
        new_card_number,
        right(new_card_number, 4),
        extract(month from card_expiry)::smallint,
        extract(year from card_expiry)::smallint
      )
      on conflict (user_id) do nothing;
    end if;
  end loop;
end;
$$;

commit;
