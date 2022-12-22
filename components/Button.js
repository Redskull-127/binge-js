import styles from "../styles/Button.module.css";
import { Open_Sans } from "@next/font/google";
import { useRouter } from "next/router";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function Button() {
  const router = useRouter();
  return (
    <div className={styles.container} onClick={() => {
        router.push("/scan");
      }}>
      <div className={styles.empty}></div>
      <div className={styles.button}>
        <a
          className={`${styles.text} ${openSans.className}`}
        >
          Scan My Face!
        </a>
      </div>
    </div>
  );
}
