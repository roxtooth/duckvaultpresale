import { useEffect, useState } from 'react';
import { buyTokens, getPresaleStage, getTokenSoldPercentage } from '../utils/contract';
import ProgressBar from './ProgressBar';

export default function Presale() {
  const [amount, setAmount] = useState('');
  const [stage, setStage] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    async function fetchPresaleData() {
      setStage(await getPresaleStage());
      setProgress(await getTokenSoldPercentage());
    }
    fetchPresaleData();
  }, []);

  return (
    <div className="presale-container">
      <h2>Scrooge $DuckVault Token Presale</h2>
      <p>Current Stage: {stage}</p>
      <ProgressBar progress={progress} />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => buyTokens(amount)}>Buy Now</button>
    </div>
  );
}
