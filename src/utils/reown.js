import { createAppKit } from "@reown/appkit";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet } from "@reown/appkit/networks";

// ✅ Correct Reown Project ID (Check this on Reown Cloud)
const projectId = "6ee1f35a236bb1fdb857ed0bfb2d8d2f"; 

// ✅ Use the Production URL from Vercel
const metadata = {
  name: "DuckVault",
  description: "Scrooge $DuckVault Presale",
  url: "https://duckvaultpresale.vercel.app", // ✅ Correct Production URL
  icons: ["https://duckvaultpresale.vercel.app/icon.png"], // ✅ Ensure this icon exists
};

// ✅ Ensure WalletConnect is properly configured
export const reownAppKit = createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [mainnet],
  metadata,
  projectId,
  features: {
    analytics: true,
    walletConnect: true,
  },
});
