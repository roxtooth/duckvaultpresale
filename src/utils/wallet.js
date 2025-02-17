import { reownAppKit } from './reown';
import { ethers } from 'ethers';

export const connectWallet = async () => {
  try {
    if (!reownAppKit) {
      console.error("Reown AppKit is not initialized.");
      return { address: null };
    }

    const walletProvider = await reownAppKit.open();

    if (!walletProvider) {
      console.error("Wallet provider is undefined.");
      return { address: null };
    }

    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    return { address };
  } catch (err) {
    console.error("Wallet Connection Error:", err);
    return { address: null };
  }
};
