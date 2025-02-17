import { useEffect, useState } from 'react';
import { getPresaleStage, getTokenSoldPercentage } from '../utils/contract';
import ProgressBar from './ProgressBar';
import { connectWallet } from '../utils/wallet';

export default function Presale() {
  const [amount, setAmount] = useState('');
  const [stage, setStage] = useState(1);
  const [progress, setProgress] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    async function fetchPresaleData() {
      const wallet = await connectWallet();
      if (!wallet.address) {
        console.error("Wallet not connected. Cannot fetch presale data.");
        return;
      }

      setWalletConnected(true);
      setStage(await getPresaleStage());
      setProgress(await getTokenSoldPercentage());
    }

    fetchPresaleData();
  }, []);

  return (
    <div className="presale-container">
      <h2>Scrooge $DuckVault Token Presale</h2>
      <p>Current Stage: {walletConnected ? stage : "Connect Wallet First"}</p>
      <ProgressBar progress={progress} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => buyTokens(amount)} disabled={!walletConnected}>
        {walletConnected ? "Buy Now" : "Connect Wallet First"}
      </button>
    </div>
  );
}
