import { useAccount, useContractRead, usePrepareContractWrite, useContractWrite } from 'wagmi';
import PresaleABI from '../contracts/Presale.json';

export default function PresaleInfo() {
  const { address } = useAccount();
  const presaleAddress = '0xeE0CfF5B1a084A51ff6d0d23564640e0397e6Ee1'; // Your contract address

  // Read presale details
  const { data: totalTokensSold } = useContractRead({
    address: presaleAddress,
    abi: PresaleABI,
    functionName: 'totalTokensSold',
  });

  const { data: currentStage } = useContractRead({
    address: presaleAddress,
    abi: PresaleABI,
    functionName: 'getCurrentStage', // Assuming this function exists in your contract
  });

  // Calculate remaining tokens
  const totalPresaleTokens = 90000000 * 10 ** 18; // 90M tokens
  const remainingTokens = totalPresaleTokens - (totalTokensSold || 0);

  // Token price based on stage
  const tokenPrices = [0.0001, 0.0002, 0.0003, 0.0004]; // ETH per token
  const currentTokenPrice = tokenPrices[currentStage] || 0.0001;

  // Write function to buy tokens
  const { config } = usePrepareContractWrite({
    address: presaleAddress,
    abi: PresaleABI,
    functionName: 'buyTokens',
    overrides: {
      value: currentTokenPrice, // Replace with user input
    },
  });
  const { write: buyTokens } = useContractWrite(config);

  return (
    <div className="bg-gray-700 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Presale Information</h2>
      <p>Current Stage: {currentStage + 1}</p>
      <p>Token Price: {currentTokenPrice} ETH</p>
      <p>Remaining Tokens: {remainingTokens.toString()}</p>
      <button
        onClick={() => buyTokens?.()}
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
      >
        Buy Tokens
      </button>
    </div>
  );
}