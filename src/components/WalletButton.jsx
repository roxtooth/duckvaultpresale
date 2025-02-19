import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { metaMask, walletConnect, coinbaseWallet } from 'wagmi/connectors';

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  const connectWallet = (walletType) => {
    switch (walletType) {
      case 'metaMask':
        connect({ connector: metaMask() }); // MetaMask
        break;
      case 'walletConnect':
        connect({ connector: walletConnect() }); // WalletConnect
        break;
      case 'coinbaseWallet':
        connect({ connector: coinbaseWallet() }); // Coinbase Wallet
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {isConnected ? (
        <button
          onClick={() => disconnect()}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
        >
          Disconnect Wallet
        </button>
      ) : (
        <div className="flex space-x-2">
          <button
            onClick={() => connectWallet('metaMask')}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            MetaMask
          </button>
          <button
            onClick={() => connectWallet('walletConnect')}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
          >
            WalletConnect
          </button>
          <button
            onClick={() => connectWallet('coinbaseWallet')}
            className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
          >
            Coinbase Wallet
          </button>
        </div>
      )}
    </div>
  );
}