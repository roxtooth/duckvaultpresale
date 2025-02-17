import { useEffect, useState } from 'react';
import { connectWallet } from '../utils/wallet';

export default function Navbar() {
  const [walletAddress, setWalletAddress] = useState('');

  useEffect(() => {
    async function fetchWallet() {
      const { address } = await connectWallet();
      setWalletAddress(address);
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
