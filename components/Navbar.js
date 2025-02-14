import React from "react";
import { useWeb3 } from "../context/Web3Context";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Navbar = () => {
  const { address } = useWeb3();

  return (
    <nav className="navbar">
      <h1>DuckVault Presale</h1>
      <div>
        {address ? <p>Connected: {address.slice(0, 6)}...{address.slice(-4)}</p> : <ConnectButton />}
      </div>
    </nav>
  );
};

export default Navbar;
