// src/components/PresaleSection.tsx
"use client";

import { useState, useEffect } from "react";
import { BrowserProvider, parseEther, Contract } from "ethers";

/**
 * Minimal EIP‑1193 provider interface
 * Only includes the `request` method, which ethers v6 checks for.
 */
interface Eip1193Provider {
  request(args: { method: string; params?: unknown[] }): Promise<unknown>;
}

// Your contract's address
const CONTRACT_ADDRESS = "0xeE0CfF5B1a084A51ff6d0d23564640e0397e6Ee1";

/** 
 * Full ABI (ensure this is the entire ABI from your contract).
 * If your contract has additional entries, please include them.
 */
const CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "address", "name": "_founderWallet", "type": "address" },
      { "internalType": "address", "name": "_liquidityWallet", "type": "address" }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "allowance", "type": "uint256" },
      { "internalType": "uint256", "name": "needed", "type": "uint256" }
    ],
    "name": "ERC20InsufficientAllowance",
    "type": "error"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "sender", "type": "address" },
      { "internalType": "uint256", "name": "balance", "type": "uint256" },
      { "internalType": "uint256", "name": "needed", "type": "uint256" }
    ],
    "name": "ERC20InsufficientBalance",
    "type": "error"
  },
  { "inputs": [{ "internalType": "address", "name": "approver", "type": "address" }], "name": "ERC20InvalidApprover", "type": "error" },
  { "inputs": [{ "internalType": "address", "name": "receiver", "type": "address" }], "name": "ERC20InvalidReceiver", "type": "error" },
  { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }], "name": "ERC20InvalidSender", "type": "error" },
  { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }], "name": "ERC20InvalidSpender", "type": "error" },
  { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" },
  { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "owner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "spender", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "recipient", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
    ],
    "name": "FundsTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "buyer", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "ethSpent", "type": "uint256" },
      { "indexed": false, "internalType": "uint256", "name": "tokensReceived", "type": "uint256" }
    ],
    "name": "TokensPurchased",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": true, "internalType": "address", "name": "from", "type": "address" },
      { "indexed": true, "internalType": "address", "name": "to", "type": "address" },
      { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "Transfer",
    "type": "event"
  },
  { "stateMutability": "nonpayable", "type": "fallback" },
  {
    "inputs": [],
    "name": "FOUNDER_ALLOCATION",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_PURCHASE_ETH",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MAX_TOKENS_PER_USER",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "MIN_PURCHASE_ETH",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PRESALE_ALLOCATION",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "PRESALE_SUPPLY_CAP",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" },
      { "internalType": "address", "name": "spender", "type": "address" }
    ],
    "name": "allowance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "spender", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "account", "type": "address" }
    ],
    "name": "balanceOf",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "buyTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "founderWallet",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "name": "hasParticipated",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "liquidityWallet",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalTokensSold",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "transfer",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "from", "type": "address" },
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" }
    ],
    "name": "userTokenBalance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
];

const PRESALE_START_TIME = new Date("2025-03-08T10:00:00Z").getTime();
const STAGE_DURATION = 25 * 24 * 60 * 60 * 1000;
const STAGE_THRESHOLDS = [15_000_000, 30_000_000, 45_000_000, 60_000_000];
const STAGE_PRICES = [0.000025, 0.00003125, 0.0000375, 0.00004375];
const STAGE_MIN_PURCHASES = [0.01, 0.0125, 0.015, 0.0175];

export default function PresaleSection() {
  const [totalSold, setTotalSold] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [tokenInput, setTokenInput] = useState<string>("");
  const [ethInput, setEthInput] = useState<string>("");

  useEffect(() => {
    const fetchPresaleData = async () => {
      try {
        // Cast window.ethereum to unknown then to Eip1193Provider
        const ethereumProvider = window.ethereum as unknown as Eip1193Provider | undefined;
        if (ethereumProvider) {
          const provider = new BrowserProvider(ethereumProvider);
          const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
          const sold = await contract.totalTokensSold();
          setTotalSold(Number(sold.toString()));
        } else {
          console.error("No Ethereum provider found.");
        }
      } catch (error) {
        console.error("Error fetching presale data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPresaleData();
    const interval = setInterval(fetchPresaleData, 15000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();
      let timeStage = Math.floor((now - PRESALE_START_TIME) / STAGE_DURATION);
      if (now < PRESALE_START_TIME) timeStage = 0;
      const stageStartTime = PRESALE_START_TIME + timeStage * STAGE_DURATION;
      const stageEndTime = stageStartTime + STAGE_DURATION;
      const remaining = stageEndTime - now;
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine the current stage by time and total tokens sold
  let timeStage = Math.floor((Date.now() - PRESALE_START_TIME) / STAGE_DURATION);
  if (Date.now() < PRESALE_START_TIME) timeStage = 0;

  let soldStage = 0;
  if (totalSold >= STAGE_THRESHOLDS[3]) {
    soldStage = 3;
  } else if (totalSold >= STAGE_THRESHOLDS[2]) {
    soldStage = 2;
  } else if (totalSold >= STAGE_THRESHOLDS[1]) {
    soldStage = 1;
  } else {
    soldStage = 0;
  }

  const stageIndex = Math.max(timeStage, soldStage);
  const presaleEnded = stageIndex >= 3 && totalSold >= STAGE_THRESHOLDS[3];
  const currentPrice = STAGE_PRICES[stageIndex];
  const currentMinPurchase = STAGE_MIN_PURCHASES[stageIndex];
  const tokensLeftInStage = Math.max(STAGE_THRESHOLDS[stageIndex] - totalSold, 0);

  const handleTokenInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tokens = e.target.value;
    setTokenInput(tokens);
    const tokenNum = parseFloat(tokens);
    if (!isNaN(tokenNum)) {
      const ethCost = tokenNum * currentPrice;
      setEthInput(ethCost.toString());
    } else {
      setEthInput("");
    }
  };

  const handleEthInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const eth = e.target.value;
    setEthInput(eth);
    const ethNum = parseFloat(eth);
    if (!isNaN(ethNum) && currentPrice > 0) {
      const tokens = ethNum / currentPrice;
      setTokenInput(tokens.toString());
    } else {
      setTokenInput("");
    }
  };

  const handleBuyNow = async () => {
    try {
      const ethAmount = parseFloat(ethInput);
      if (isNaN(ethAmount) || ethAmount < currentMinPurchase) {
        alert(`Minimum purchase for Stage ${stageIndex + 1} is ${currentMinPurchase} ETH.`);
        return;
      }
      const ethereumProvider = window.ethereum as unknown as Eip1193Provider | undefined;
      if (ethereumProvider) {
        const provider = new BrowserProvider(ethereumProvider);
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
        const ethValue = parseEther(ethInput || "0");
        const tx = await contract.buyTokens({ value: ethValue });
        await tx.wait();
        alert("Purchase successful!");
      } else {
        alert("No Ethereum provider found. Please install MetaMask.");
      }
    } catch (error) {
      console.error("Error during token purchase:", error);
      alert("Purchase failed. Check console for details.");
    }
  };

  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (24 * 3600));
    const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  if (loading) return <p>Loading presale data...</p>;
  if (presaleEnded) return <p>Presale has ended.</p>;

  return (
    <section className="bg-black p-8 rounded-lg shadow-md max-w-2xl mx-auto my-8 text-yellow-500">
      <h2 className="text-2xl font-bold mb-4">Presale Information</h2>
      <p className="mb-2">
        <span className="font-semibold">Current Stage:</span> Stage {stageIndex + 1}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Stage Price:</span> {currentPrice} ETH per token
      </p>
      <p className="mb-2">
        <span className="font-semibold">Minimum Purchase:</span> {currentMinPurchase} ETH
      </p>
      <p className="mb-2">
        <span className="font-semibold">Tokens Left in Stage:</span> {tokensLeftInStage.toLocaleString()}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Time Left in Stage:</span> {formatTime(timeLeft)}
      </p>
      <div className="mb-4 flex flex-col space-y-2">
        <label className="flex flex-col items-start">
          Tokens to Buy:
          <input
            type="number"
            value={tokenInput}
            onChange={handleTokenInputChange}
            className="mt-1 p-1 border rounded bg-white text-black"
            min="0"
          />
        </label>
        <label className="flex flex-col items-start">
          ETH to Spend:
          <input
            type="number"
            value={ethInput}
            onChange={handleEthInputChange}
            className="mt-1 p-1 border rounded bg-white text-black"
            min="0"
          />
        </label>
      </div>
      <button
        onClick={handleBuyNow}
        className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-400 transition"
      >
        Buy Now
      </button>
    </section>
  );
}
