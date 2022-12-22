import Head from "next/head";
import styles from "../styles/Scan.module.css";
import Spinner from "../components/Spinner";
import { Open_Sans } from "@next/font/google";
import Facetest from "../components/FaceTest";
import { useEffect, useState, useRef } from "react";
import { loadModels } from "../components/faceApi";
import { useRouter } from "next/router";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function Scan() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isSucess, setIsSucess] = useState("");

  const handleSuccess = (res) => {
    if (res != "" && res != undefined && res != null) {
      setIsSucess(res);
      console.log(isSucess);
    }
  };

  const handleCamPermission = () => {
    navigator.permissions.query({ name: "camera" }).then((permissionObj) => {
      console.log(permissionObj.state);
    });
  }

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

  useEffect(() => {
    const handlePush = (res) => {
      if (res != "" && res != undefined && res != null) {
        router.push("/explore");
      }
    };
    if (isSucess != "") {
      sessionStorage.setItem("emotion", isSucess);
      handlePush(isSucess);
    }
  }, [isSucess, router]);

  return (
    <div className={styles.container}>
      <Head>
        <title>BINGE</title>
        <meta name="description" content="BINGE | SCAN" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="https://img.icons8.com/color/48/null/spyro.png" />
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
          <div className={styles.widget}>
            <p className={`${styles.title} ${openSans.className}`}>
              😁 Say cheese!
            </p>
            <p className={`${styles.desc} ${openSans.className}`}>
              Identifying your facial gestures, Hold it there!
            </p>
            <Facetest isSucess={handleSuccess} />
          </div>
        )}
      </main>
    </div>
  );
}
