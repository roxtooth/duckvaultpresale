import { WagmiProvider } from 'wagmi';
import { config } from '../lib/wagmi'; // Import the wagmi config

function MyApp({ Component, pageProps }) {
  return (
    <WagmiProvider config={config}>
      <Component {...pageProps} />
    </WagmiProvider>
  );
}

export default MyApp;