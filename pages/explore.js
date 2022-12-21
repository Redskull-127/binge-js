import Head from "next/head";
import styles from "../styles/Explore.module.css";
import { Open_Sans } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import useSWR from "swr";

const openSans = Open_Sans({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Explore() {
  const [emotion, setEmotion] = useState("");
  const { data, error } = useSWR("", fetcher);

  useEffect(() => {
    setEmotion(sessionStorage?.getItem("emotion"));
  }, []);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title>BINGE</title>
        <meta name="description" content="BINGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p className={`${styles.title} ${openSans.className}`}>
          {emotion != "" ? emotion : null}
        </p>
      </main>
    </div>
  );
}
