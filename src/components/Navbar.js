import { useEffect, useState } from 'react';
import { connectWallet } from '../utils/wallet';

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    async function fetchWallet() {
      const walletData = await connectWallet();
      if (walletData && walletData.address) {
        setWalletAddress(walletData.address);
      } else {
        console.error("No wallet address found.");
      }
    }
    fetchWallet();
  }, []);

  return (
    <nav className="nav">
      <h1>Scrooge $DuckVault Presale</h1>
      <button onClick={connectWallet}>
        {walletAddress ? walletAddress.substring(0, 6) + '...' + walletAddress.slice(-4) : 'Connect Wallet'}
      </button>
    </nav>
  );
}
