type EvmProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};

declare global {
  interface Window {
    ethereum?: EvmProvider;
  }
}

export async function connectArcWallet() {
  if (!window.ethereum) {
    throw new Error("No compatible Arc wallet was detected in this browser.");
  }

  const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  const address = Array.isArray(accounts) ? accounts[0] : undefined;
  if (typeof address !== "string" || !address) {
    throw new Error("The Arc wallet did not return a public address.");
  }

  return address;
}