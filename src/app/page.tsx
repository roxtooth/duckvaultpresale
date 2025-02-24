"use client";

import Image from "next/image";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import PresaleSection from "@/components/PresaleSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center sm:p-20">
      {/* Top Logo */}
      <Image
        className="mb-4"
        src="/duckvault-logo.png"
        alt="DuckVault Logo"
        width={200}
        height={60}
        priority
      />

      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to DuckVault Presale
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
        Secure your $DUCKVAULT tokens before the official launch!
      </p>

      <ConnectWalletButton />

      {/* Presale Section */}
      <PresaleSection />

      {/* Bottom Logo */}
      <Image
        className="mt-8"
        src="/duckvault-logo.png"
        alt="DuckVault Logo"
        width={200}
        height={60}
        priority
      />
    </div>
  );
}
