import Head from "next/head";
import Image from "next/image";
import { Inter, Open_Sans } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Spline from '@splinetool/react-spline';
import Intro from "../components/Intro";
const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {


  return (
    <div className={styles.container}>
      <Head>
        <title>BINGE</title>
        <meta name="description" content="BINGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Spline scene="https://prod.spline.design/kn0zvs7BJK7kzbqM/scene.splinecode" />
      <main className={styles.main}>
        <Intro />
      </main>
    </div>
  );
}
