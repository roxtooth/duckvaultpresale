import "@/styles/globals.css";
import { Web3Provider, wagmiClient } from "@/context/Web3Context";
import { WagmiConfig } from "wagmi";
import { AppKitProvider } from "@reown/appkit"; // ✅ Correct Import

export default function App({ Component, pageProps }) {
  return (
    <Web3Provider>
      <WagmiConfig config={wagmiClient}>
        <AppKitProvider> 
          <Component {...pageProps} />
        </AppKitProvider>
      </WagmiConfig>
    </Web3Provider>
  );
}
