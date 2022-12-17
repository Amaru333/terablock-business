import Head from "next/head";
import Image from "next/image";
import HomepageLayout from "../src/layout/HomepageLayout/HomepageLayout";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TeraBlock</title>
        <meta name="description" content="Crypto Products Aggregator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomepageLayout />
    </div>
  );
}
