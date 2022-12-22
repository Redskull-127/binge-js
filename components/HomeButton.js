/* eslint-disable @next/next/no-img-element */
import styles from "../styles/HomeButton.module.css";
import { useRouter } from "next/router";

export default function HomeButton() {
    const Router = useRouter();

    return (
        <div onClick={(() => {
            Router.push("/");
        })} className={`${styles.container} contexplore`}>
            <img className="imgexplore" src="https://img.icons8.com/color/48/null/spyro.png" alt="Go Back"/>
        </div>
    )
}