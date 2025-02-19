import { createConfig } from 'wagmi';
import { http } from 'viem';
import { mainnet, sepolia } from 'wagmi/chains';
import { metaMask, walletConnect, coinbaseWallet } from 'wagmi/connectors';

export const config = createConfig({
  chains: [mainnet, sepolia], // Add your desired chains
  transports: {
    [mainnet.id]: http(`https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`), // Use Infura for mainnet
    [sepolia.id]: http(`https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`), // Use Infura for testnet
  },
  connectors: [
    metaMask(), // MetaMask
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID, // WalletConnect Project ID
    }),
    coinbaseWallet(), // Coinbase Wallet
  ],
});