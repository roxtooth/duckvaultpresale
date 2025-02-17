import { createAppKit } from "@reown/appkit";
import { Ethers5Adapter } from "@reown/appkit-adapter-ethers5";
import { mainnet } from "@reown/appkit/networks";

// ✅ Correct project ID (double-check this on Reown)
const projectId = "6ee1f35a236bb1fdb857ed0bfb2d8d2f";

// ✅ Ensure correct metadata URL
const metadata = {
  name: "DuckVault",
  description: "Scrooge $DuckVault Presale",
  url: "https://duckvaultpresale.vercel.app", // ✅ Make sure this is correct
  icons: ["https://duckvaultpresale.vercel.app/logo.png"], // ✅ Ensure this logo exists
};

// ✅ Ensure proper WalletConnect & network setup
export const reownAppKit = createAppKit({
  adapters: [new Ethers5Adapter()],
  networks: [mainnet],
  metadata,
  projectId,
  features: {
    analytics: true, // ✅ Optional - defaults to your Cloud configuration
    walletConnect: true, // ✅ Fixes "Invalid App Configuration" error
  },
});
