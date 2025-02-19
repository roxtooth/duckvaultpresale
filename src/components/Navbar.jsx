import WalletButton from './WalletButton';

export default function Navbar() {
  return (
    <nav className="bg-yellow-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Scrooge $DuckVault</h1>
        <WalletButton />
      </div>
    </nav>
  );
}
