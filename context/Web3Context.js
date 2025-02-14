import { createContext, useContext, useEffect, useState } from "react";
import { createAppKit } from "@reown/appkit";
import { createPublicClient, http } from "viem";
import { mainnet, goerli } from "wagmi/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";

// ✅ Reown AppKit Project ID
const projectId = "6ee1f35a236bb1fdb857ed0bfb2d8d2f";

// ✅ Create Web3 Context
const Web3Context = createContext(null);

// ✅ Create the Reown AppKit instance
const appKit = createAppKit({
  projectId,
  chains: [mainnet, goerli],
  transports: {
    [mainnet.id]: http(),
    [goerli.id]: http(),
  },
});

// ✅ Initialize Wagmi Client
export const wagmiClient = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({ chain: mainnet, transport: http() }),
});

// ✅ Web3 Provider Component
export const Web3Provider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState(null);

  useEffect(() => {
    appKit.subscribeState((state) => {
      setIsConnected(state.isConnected);
      setAccount(state.address);
    });
  }, []);

  return (
    <Web3Context.Provider value={{ isConnected, account, appKit }}>
      {children}
    </Web3Context.Provider>
  );
};

// ✅ useWeb3 Hook
export const useWeb3 = () => {
  return useContext(Web3Context);
};
