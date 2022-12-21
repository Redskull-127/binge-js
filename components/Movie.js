/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import styles from "../styles/Movie.module.css";
import { Open_Sans } from "@next/font/google";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useSWR from "swr";

const openSans = Open_Sans({ subsets: ["latin"] });
const imgurl = "http://image.tmdb.org/t/p/w500";

export default function Movie({ name, id }) {
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=252f3d55c174bd15d7b5533fac8374af&with_genres=${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        const random = Math.floor(Math.random() * res.results.length);
        setData(res.results[random]);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [id]);
  if (error)
    return (
      <p className={`${styles.error} ${openSans.className}`}>
        Something went wrong!
      </p>
    );
  return (
    <>
      {data && data != null ? (
        <div className={styles.container}>
          <img className={styles.poster} src={imgurl + data.poster_path} />
          <div className={styles.info}>
            <h1 className={`${styles.title} ${openSans.className}`}>
              {data.title}
            </h1>
            <p className={`${styles.desc} ${openSans.className}`}>
              {data.overview}
            </p>
            <p className={`${styles.desc} ${openSans.className}`}>
              {data.vote_average}/10
            </p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}
