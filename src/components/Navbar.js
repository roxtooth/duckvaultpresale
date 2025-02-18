import { useState } from "react";
import { connectWeb3ModalWallet } from "../utils/web3modal";

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState("");

  const handleConnectWallet = async () => {
    const walletData = await connectWeb3ModalWallet();
    if (walletData && walletData.address) {
      setWalletAddress(walletData.address);
    } else {
      console.error("No wallet address found.");
    }
  };

  return (
    <nav className="nav">
      <h1>Scrooge $DuckVault Presale</h1>
      <button onClick={handleConnectWallet}>
        {walletAddress
          ? walletAddress.substring(0, 6) + "..." + walletAddress.slice(-4)
          : "Connect Wallet"}
      </button>
    </nav>
  );
}
