import { createAppKit } from '@reown/appkit'
import { Ethers5Adapter } from '@reown/appkit-adapter-ethers5'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// 1. Get projectId from https://cloud.reown.com
const projectId = '6ee1f35a236bb1fdb857ed0bfb2d8d2f'

// 2. Create your application's metadata object
const metadata = {
  name: 'DuckVault',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // Replace with your final domain if needed
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Create a AppKit instance
export const reownAppKit = createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [mainnet, arbitrum],
  metadata,
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})
