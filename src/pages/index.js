import Head from 'next/head';
import Navbar from '../components/Navbar';
import Presale from '../components/Presale';
import '../styles/globals.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scrooge $DuckVault Presale</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navbar />
      <Presale />
    </div>
  );
}
