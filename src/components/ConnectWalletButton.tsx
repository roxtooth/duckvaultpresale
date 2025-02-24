import { useAppKit } from "@reown/appkit/react";

export default function ConnectWalletButton() {
  const { open } = useAppKit();
  return <button onClick={() => open()}>Connect Wallet</button>;
}
