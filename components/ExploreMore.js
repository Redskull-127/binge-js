/* eslint-disable @next/next/no-img-element */
import styles from "../styles/ExploreMore.module.css";
import { Open_Sans } from "@next/font/google";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const openSans = Open_Sans({ subsets: ["latin"] });
const imgurl = "http://image.tmdb.org/t/p/w500/";
export default function ExploreMore({ data }) {
  const [props, setProps] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=252f3d55c174bd15d7b5533fac8374af&with_genres=${data}`
    )
      .then((res) => res.json())
      .then((res) => {
        setProps(res.results);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [data]);

  if (error) return "Unknown error occured!";

  return (
    <>
      {props.length > 0
        ? props.map((item, key) => {
            <div className={styles.card} style={{height: 500+'px'}} key={key}>
              <img src={imgurl + item.poster_path} alt="img" />
              <div className={styles.info}>
                <h1 className={`${styles.title} ${openSans.className}`}>
                  {item.title}
                </h1>
                <p className={`${styles.desc} ${openSans.className}`}>
                  {item.vote_average}⭐
                </p>
              </div>
            </div>;
          })
        : <Spinner />}
    </>
  );
}
