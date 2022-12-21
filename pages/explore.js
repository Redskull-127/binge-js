import Head from "next/head";
import styles from "../styles/Explore.module.css";
import Movie from "../components/Movie";
import { Open_Sans } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import Spinner from "../components/Spinner";
const openSans = Open_Sans({ subsets: ["latin"] });
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Explore() {
  const [emotion, setEmotion] = useState("");
  const [emotionData, setEmotionData] = useState();
  const { data, error } = useSWR(
    "https://raw.githubusercontent.com/Redskull-127/binge-js/main/json/emotions.json",
    fetcher
  );
  useEffect(() => {
    setEmotion(sessionStorage?.getItem("emotion"));
  }, []);
  useEffect(() => {
    if (data && emotion) {
      const random = Math.floor(Math.random() * data[emotion].length);
      setEmotionData(data[emotion][random]);
      console.log(emotionData);
    }
  }, [data, emotion, emotionData]);

  if (error) return <p className={`${styles.title} ${openSans.className}`}>Something went wrong!</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>BINGE</title>
        <meta name="description" content="BINGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <>
          {emotion != "" && emotionData ? (
            <>
              <p className={`${styles.title} ${openSans.className}`}>
                You seems to be {emotion}!
              </p>
              <p className={`${styles.desc} ${openSans.className}`}>
                We choose &quot;{emotionData.name}&quot; for you.<br/>Here&apos;s a movie suggestion based on your mood! 😁
              </p>
              <Movie name={emotionData.name} id={emotionData.id} />
            </>
          ) : (
            <Spinner />
          )}
        </>
      </main>
    </div>
  );
}
