// src/components/ConnectWalletButton.tsx
import { useAppKit } from "@reown/appkit/react";
import { isMobile } from "react-device-detect";

export default function ConnectWalletButton() {
  const { open } = useAppKit();

  const handleConnect = () => {
    if (isMobile) {
      console.log("Mobile device detected.");
      // Optionally, show a mobile-specific message or adjust behavior
    }
    open();
  };

  return (
    <button 
      onClick={handleConnect} 
      className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
    >
      Connect Wallet
    </button>
  );
}
