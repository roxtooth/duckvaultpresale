import { reownAppKit } from './reown';
import { ethers } from 'ethers';

export const connectWallet = async () => {
  try {
    // Open Reown AppKit modal to connect wallet
    const walletProvider = await reownAppKit.open();
    const provider = new ethers.providers.Web3Provider(walletProvider);
    const signer = provider.getSigner();
    const address = await signer.getAddress();

    return { address };
  } catch (err) {
    console.error("Wallet Connection Error:", err);
  }
};
