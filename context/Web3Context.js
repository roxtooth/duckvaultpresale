import { createContext, useContext, useEffect, useState } from "react";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { mainnet, goerli } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";

const Web3Context = createContext();

export const Web3Provider = ({ children }) => {
  const [address, setAddress] = useState(null);
  const [balance, setBalance] = useState(null);

  // Configure blockchain networks
  const { chains, provider } = configureChains([mainnet, goerli], [publicProvider()]);
  const { connectors } = getDefaultWallets({ appName: "DuckVault Presale", chains });

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      window.ethereum.request({ method: "eth_accounts" }).then((accounts) => {
        if (accounts.length) {
          setAddress(accounts[0]);
        }
      });
    }
  }, []);

  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Web3Context.Provider value={{ address, setAddress, balance, setBalance }}>
          {children}
        </Web3Context.Provider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export const useWeb3 = () => useContext(Web3Context);
