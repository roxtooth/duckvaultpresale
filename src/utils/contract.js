import { ethers } from 'ethers';
import { reownAppKit } from './reown';

const contractAddress = "0xeE0CfF5B1a084A51ff6d0d23564640e0397e6Ee1";
const contractABI = [ /* Paste ABI here */ ];

const getProvider = async () => {
  try {
    const walletProvider = await reownAppKit.open();
    
    if (!walletProvider) {
      console.error("Wallet provider is undefined. Please connect your wallet.");
      return null;
    }

    return new ethers.providers.Web3Provider(walletProvider);
  } catch (err) {
    console.error("Error fetching provider:", err);
    return null;
  }
};

export const getPresaleStage = async () => {
  try {
    const provider = await getProvider();
    if (!provider) return null;

    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    return await contract.getCurrentStage();
  } catch (err) {
    console.error("Error fetching presale stage:", err);
    return null;
  }
};

export const getTokenSoldPercentage = async () => {
  try {
    const provider = await getProvider();
    if (!provider) return 0;

    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    const totalSold = await contract.totalTokensSold();
    const totalSupply = 90000000;
    
    return (totalSold / totalSupply) * 100;
  } catch (err) {
    console.error("Error fetching token sale progress:", err);
    return 0;
  }
};

export const buyTokens = async (amount) => {
  try {
    const provider = await getProvider();
    if (!provider) return;

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    const pricePerToken = 0.0001; // Adjust based on stage
    const totalCost = ethers.utils.parseEther((amount * pricePerToken).toString());

    const tx = await contract.buyTokens(amount, { value: totalCost });
    await tx.wait();
    alert("Purchase Successful!");
  } catch (err) {
    console.error("Error purchasing tokens:", err);
  }
};
