import { ethers } from 'ethers';

const contractAddress = "0xeE0CfF5B1a084A51ff6d0d23564640e0397e6Ee1";
const contractABI = [
  // ABI (Replace with actual contract ABI)
];

export const buyTokens = async (amount, currency) => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    
    const price = await contract.getCurrentPresalePrice();
    const totalCost = ethers.utils.parseEther((amount * price).toString());

    let tx;
    if (currency === 'ETH') {
      tx = await contract.buyTokens(amount, { value: totalCost });
    } else if (currency === 'USDT') {
      tx = await contract.buyTokensWithUSDT(amount);
    }

    await tx.wait();
    alert("Purchase Successful!");
  } catch (err) {
    console.error("Purchase Error", err);
  }
};
