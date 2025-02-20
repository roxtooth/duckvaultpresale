import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-400 p-8 text-gray-900">
      {/* Logo */}
      <Image 
        src="/duckvault-logo.png" // Replace with actual logo file in /public folder
        alt="DuckVault Logo"
        width={200}
        height={200}
        className="mb-6"
      />

      {/* Hero Section */}
      <h1 className="text-5xl font-bold mb-4 text-center">
        Welcome to <span className="text-yellow-900">DuckVault</span> Presale 🦆💰
      </h1>
      <p className="text-lg text-center max-w-2xl">
        The ultimate Scrooge McDuck-inspired meme token. Get in early and dive into the vault of riches!
      </p>

      {/* Call to Action Button */}
      <button
        className="mt-6 px-6 py-3 text-xl font-semibold bg-yellow-600 text-white rounded-xl shadow-lg hover:bg-yellow-700 transition-all"
      >
        Presale Coming Soon 🚀
      </button>

      {/* Footer */}
      <footer className="mt-10 text-sm text-gray-800">
        Built for the Web3 future. Stay tuned!
      </footer>
    </div>
  );
}
