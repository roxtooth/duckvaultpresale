import { WagmiConfig } from "wagmi";
import { Web3Provider, wagmiClient } from "@/context/Web3Context";
import { AuthProvider } from "@reown/appkit"; // ✅ Updated Import

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <AuthProvider>
        <Web3Provider>
          <Component {...pageProps} />
        </Web3Provider>
      </AuthProvider>
    </WagmiConfig>
  );
}
