import Head from "next/head";
import styles from "../styles/Explore.module.css";
import { Open_Sans } from "@next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function Explore() {
    return(
        <div className={styles.container}>
            <main className={styles.main}>
                <p className={`${styles.title} ${openSans.className}`}>{sessionStorage?.getItem('emotion')}</p>
            </main>
        </div>
    );
}