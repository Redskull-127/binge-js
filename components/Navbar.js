import { Odor_Mean_Chey, Open_Sans } from "@next/font/google";
import styles from "../styles/Navbar.module.css";

const OpenSans = Open_Sans({ subsets: ["latin"], weight: ['400'] })

export default function Navbar() {
    return (
        <nav className={`${styles.Nav} ${OpenSans.className}`}>
            <a>About</a>
            <a>Scan</a>
            <a>API</a>
            <a>Contact</a>
        </nav>
    )
}