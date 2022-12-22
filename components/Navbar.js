/* eslint-disable @next/next/no-img-element */
import { Odor_Mean_Chey, Open_Sans } from "@next/font/google";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";

const OpenSans = Open_Sans({ subsets: ["latin"], weight: ["400"] });

export default function Navbar() {
  const Router = useRouter();

  return (
    <nav className={`${styles.Nav} ${OpenSans.className}`}>
      <div className={styles.items}>
        <img
          src="https://img.icons8.com/color/48/null/spyro.png"
          alt="logo"
        />
        <a href="#intro">About</a>
        <a
          onClick={() => {
            Router.push("/scan");
          }}
        >
          Scan
        </a>
        <a href="https://www.themoviedb.org/" target={"_blank"} rel="noreferrer">API</a>
      </div>
      <p className={styles.credits}>
        Made with ❤️ by{" "}
        <a href="https://meertarbani.dev" target={"_blank"} rel="noreferrer">
          Meer Tarbani
        </a>
      </p>
    </nav>
  );
}
