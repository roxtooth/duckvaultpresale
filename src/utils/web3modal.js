import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";

// ✅ Configure Web3Modal
const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: "your_infura_id", // ✅ Replace with your actual Infura ID
    },
  },
};

export const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions,
});

// ✅ Connect Wallet Function
export const connectWeb3ModalWallet = async () => {
  try {
    const instance = await web3Modal.connect();
    const web3Provider = new ethers.providers.Web3Provider(instance);

    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();

    return { provider: web3Provider, address };
  } catch (error) {
    console.error("Web3Modal Connection Failed:", error);
    return { provider: null, address: null };
  }
};
