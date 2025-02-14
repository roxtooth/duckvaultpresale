import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useWeb3 } from "@/context/Web3Context";

const Navbar = () => {
  const { account } = useWeb3();

  return (
    <nav className="navbar">
      <h1>DuckVault Presale</h1>
      <div>
        {account ? <p>Connected: {account.slice(0, 6)}...{account.slice(-4)}</p> : <ConnectButton />}
      </div>
    </nav>
  );
};

export default Navbar;
