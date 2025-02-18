import { createAppKit } from "@reown/appkit";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet } from "@reown/appkit/networks";

// ✅ Ensure correct Reown Project ID
const projectId = "6ee1f35a236bb1fdb857ed0bfb2d8d2f"; 

// ✅ Use the newly updated direct public icon URL
const metadata = {
  name: "DuckVault",
  description: "Scrooge $DuckVault Presale",
  url: "https://duckvaultpresale.vercel.app", // ✅ Ensure this matches your live site
  icons: ["https://raw.githubusercontent.com/roxtooth/duckvaultpresale/refs/heads/main/public/logo.png"], // ✅ Correct public icon URL
};

// ✅ Ensure correct WalletConnect settings
export const reownAppKit = createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [mainnet],
  metadata,
  projectId,
  features: {
    analytics: true,
    walletConnect: true,
  }
});
