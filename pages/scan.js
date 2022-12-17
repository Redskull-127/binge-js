import Head from "next/head";
import styles from "../styles/Scan.module.css";
import Spinner from "../components/Spinner";
import { Open_Sans } from "@next/font/google";
import Facetest from "../components/FaceTest";
import { useEffect, useState, useRef } from "react";
import { loadModels } from "../components/faceApi";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function Scan() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadModels();
    navigator.permissions.query({ name: "camera" }).then((res) => {
      if (res.state == "granted") {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
      }
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>BINGE</title>
        <meta name="description" content="BINGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {loading ? (
          <>
            <Spinner />
            <p className={`${styles.title} ${openSans.className}`}>
              Make sure you allow camera access!
            </p>
            <p className={`${styles.desc} ${openSans.className}`}>
              After allowing camera access, Please wait for 5-10 seconds!
            </p>
          </>
        ) : (
          "good to gooo"
        )}
        <Facetest />
      </main>
    </div>
  );
}
