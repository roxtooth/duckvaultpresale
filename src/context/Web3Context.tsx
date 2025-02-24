// src/context/Web3Context.tsx
"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createAppKit } from "@reown/appkit/react";
import { mainnet, arbitrum } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Retrieve your WalletConnect project ID from environment variables (assert it's defined).
const projectId: string = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;
if (!projectId) {
  throw new Error("NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID is not defined in your .env.local file");
}

// Optional metadata for your dApp.
const metadata = {
  name: "DuckVaultPresale",
  description: "DuckVault Presale dApp",
  url: "https://duckvaultpresale.example.com",
  icons: ["https://duckvaultpresale.example.com/logo.png"],
};

// Define the networks.
// We cast the networks array as 'any' since the expected type (e.g. AppKitNetwork) isn't exported.
const networks = [mainnet, arbitrum] as any;

// Create a QueryClient for React Query.
const queryClient = new QueryClient();

// Create the Wagmi adapter.
const wagmiAdapter = new WagmiAdapter({ networks, projectId });

const Web3Context = createContext(null);

export function useWeb3() {
  return useContext(Web3Context);
}

export function Web3Provider({ children }: { children: React.ReactNode }) {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    (async () => {
      await createAppKit({
        adapters: [wagmiAdapter],
        networks,
        metadata,
        projectId,
        features: {
          analytics: false, // Disable analytics for now
        },
      });
      setInitialized(true);
    })();
  }, []);

  if (!initialized) {
    return <p>Initializing AppKit...</p>;
  }

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default Web3Context;
