import styles from "../styles/Button.module.css";
import { Open_Sans } from "@next/font/google";
import {useRouter} from "next/router";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function Button() {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <a className={`${styles.button} ${openSans.className}`} onClick={() => {
                router.push("/scan");
            }}>Scan My Face!</a>
        </div>
    )
}