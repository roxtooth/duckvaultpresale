import { createAppKit } from '@reown/appkit';
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5';
import { mainnet } from '@reown/appkit/networks';

// ✅ Ensure the correct project ID
const projectId = '6ee1f35a236bb1fdb857ed0bfb2d8d2f';

// ✅ Update metadata with the live Fleek deployment URL
const metadata = {
  name: 'DuckVault',
  description: 'Scrooge $DuckVault Presale',
  url: 'https://narrow-ocean-deep.on-fleek.app/', // Updated to match live deployment
  icons: ['https://assets.reown.com/reown-profile-pic.png']
};

// ✅ Ensure only Ethereum Mainnet is enabled
export const reownAppKit = createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [mainnet], // ✅ Keeping only mainnet to avoid conflicts
  metadata,
  projectId,
  features: {
    analytics: true // Optional
  }
});
