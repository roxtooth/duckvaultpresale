import Head from 'next/head';
import Navbar from '../components/Navbar';
import PresaleInfo from '../components/PresaleInfo';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-600 to-yellow-800 text-white">
      <Head>
        <title>Scrooge $DuckVault Presale</title>
        <meta name="description" content="Participate in the Scrooge $DuckVault token presale!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Scrooge $DuckVault Presale</h1>
        <div className="max-w-2xl mx-auto">
          <PresaleInfo />
        </div>
      </main>
    </div>
  );
}
