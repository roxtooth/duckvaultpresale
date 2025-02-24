// src/context/Web3Context.tsx
"use client";

import { createContext, useContext } from "react";
import { createAppKit, useAppKit } from "@reown/appkit/react";
import { mainnet, arbitrum } from "@reown/appkit/networks";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Retrieve your WalletConnect project ID from environment variables.
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;
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
const networks = [mainnet, arbitrum];

// Create a QueryClient for React Query.
const queryClient = new QueryClient();

// Create the Wagmi adapter.
const wagmiAdapter = new WagmiAdapter({ networks, projectId });

// Call createAppKit using top-level await.
// Note: If you encounter hydration issues with top-level await in a client component,
// consider moving this call to a separate module that initializes the app kit before rendering.
await createAppKit({
  adapters: [wagmiAdapter],
  networks,
  metadata,
  projectId,
  features: {
    analytics: false, // Disable analytics for now
  },
});

export function Web3Provider({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

const Web3Context = createContext(null);
export function useWeb3() {
  return useContext(Web3Context);
}
export default Web3Context;
