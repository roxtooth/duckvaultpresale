import "../styles/globals.css";
import { Web3Provider } from "../context/Web3Context";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <Web3Provider>
      <Navbar />
      <Component {...pageProps} />
    </Web3Provider>
  );
}

export default MyApp;
