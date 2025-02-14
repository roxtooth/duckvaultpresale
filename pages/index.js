import Head from "next/head";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>DuckVault Presale</title>
        <meta name="description" content="Buy DuckVault Tokens in the presale now!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="container">
        <h1>Welcome to DuckVault Presale</h1>
        <p>Connect your wallet to participate.</p>
      </main>
    </>
  );
}
