import { ethers } from 'ethers';
import { reownAppKit } from './reown';

const contractAddress = "0xeE0CfF5B1a084A51ff6d0d23564640e0397e6Ee1";
const contractABI = [ /* Paste ABI here */ ];

const getProvider = async () => {
  try {
    const walletProvider = await reownAppKit.open();
    if (!walletProvider) {
      console.error("Wallet provider is undefined. Please retry.");
      return null;
    }
    return new ethers.providers.Web3Provider(walletProvider);
  } catch (err) {
    console.error("Error fetching provider:", err);
    return null;
  }
};

export const buyTokens = async (amount) => {
  try {
    const provider = await getProvider();
    if (!provider) {
      alert("Wallet not connected. Please connect your wallet.");
      return;
    }

    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);

    // ✅ Ensure the correct presale stage price is used
    const presaleStage = await contract.getCurrentStage();
    let pricePerToken;

    if (presaleStage == 1) pricePerToken = ethers.utils.parseEther("0.0001");
    else if (presaleStage == 2) pricePerToken = ethers.utils.parseEther("0.0002");
    else if (presaleStage == 3) pricePerToken = ethers.utils.parseEther("0.0003");
    else {
      alert("Presale is not active.");
      return;
    }

    const totalCost = pricePerToken.mul(amount);
    
    // ✅ Ensure the transaction is properly formatted
    const tx = await contract.buyTokens(amount, { value: totalCost });
    await tx.wait();

    alert("Purchase Successful!");
  } catch (err) {
    console.error("Error purchasing tokens:", err);
    alert("Transaction failed. Check console for details.");
  }
};
