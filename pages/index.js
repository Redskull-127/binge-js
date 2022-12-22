import Head from "next/head";
import { useEffect, useState } from "react";
import { Open_Sans } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Spline from "@splinetool/react-spline";
import Intro from "../components/Intro";
import { loadModels } from "../components/faceApi";
import Button from "../components/Button";
import Spinner from "../components/Spinner";

const inter = Open_Sans({ subsets: ["latin"] });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
      });
    loadModels();
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>BINGE</title>
        <meta name="description" content="BINGE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://img.icons8.com/color/48/null/spyro.png" />
      </Head>
      <>
        {isLoading ? (
          <div className={styles.spinner}>
            <Spinner />
          </div>
        ) : (
          <>
            <Navbar />
            <Spline scene="https://prod.spline.design/kn0zvs7BJK7kzbqM/scene.splinecode" />
            <main className={styles.main}>
              <Intro />
              {/* <Button /> */}
            </main>
          </>
        )}
      </>
    </div>
  );
}
