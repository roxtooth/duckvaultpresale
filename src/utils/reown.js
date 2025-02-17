import { createAppKit } from '@reown/appkit';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';
import { mainnet } from '@reown/appkit/networks';

// ✅ Ensure the correct project ID
const projectId = '6ee1f35a236bb1fdb857ed0bfb2d8d2f';

// ✅ Use the correct metadata URL (update to match Fleek deployment)
const metadata = {
  name: 'DuckVault',
  description: 'Scrooge $DuckVault Presale',
  url: 'https://narrow-ocean-deep.on-fleek.app/', // Updated to match Fleek deployment
  icons: ['https://narrow-ocean-deep.on-fleek.app/logo.png'] // Update this if you have a real logo
};

// ✅ Ensure only Ethereum Mainnet is enabled
export const reownAppKit = createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [mainnet], // ✅ Keeping only mainnet to avoid conflicts
  metadata,
  projectId,
  features: {
    analytics: true, // Optional
    walletConnect: true // Ensures WalletConnect functionality
  }
});
