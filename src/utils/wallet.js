import { ethers } from 'ethers';

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const signer = provider.getSigner();
      return { address: await signer.getAddress() };
    } catch (err) {
      console.error("Wallet Connection Error", err);
    }
  } else {
    alert('Please install MetaMask or use WalletConnect!');
  }
};
