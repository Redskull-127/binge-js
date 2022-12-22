/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import styles from "../styles/Intro.module.css";
import { Open_Sans } from "@next/font/google";
import Button from "./Button";

const openSans = Open_Sans({ subsets: ["latin"] });
export default function Intro() {
  return (
    <div className={styles.container} id="intro">
      <h1 className={`${styles.title} ${openSans.className}`}>BINGE</h1>
      <p className={`${styles.desc} ${openSans.className}`}>
        An AI Based Genure & Movies Selector! 
      </p>
      <div className={styles.row}>
        <div className={styles.card}>
            <h2 className={`${styles.title} ${openSans.className}`}>Just scan your face and done!</h2><br/>
            <Button />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="350px"
          height="350px"
        >
          <path
            fill="#fbc02d"
            d="M41,22c0,0,2-1,7-1c-3-8-10.53-8.323-10.53-8.323l-0.979-0.117L39,5C29,5,26,9,26,9 c0.235-1.959,1.268-5.516,3-6c-10,0-11,7-11,7s-3-2-3-7c-3,2-5,4-5,9c0,3,1,5,1,5l22,29h7c0-3-2-5-2-5c3,0,6,2,6,2c0-7-3-11-3-11 c4,0,7,2,7,2C48,26,41,22,41,22z"
          />
          <path
            fill="#673ab7"
            d="M40,28c0,6.25-5,12-5,12v5.88L19,46c0,0,0-2,0-4c0,0-9.97,0-14.34-2c-0.01,0-0.01-0.01-0.02-0.01 L4,38H3c-0.29,0-2-3-2-6v-1c0-1,0.72-1,1-1h6v-8c0,0-1.87-0.9-2-2c0,0,0.93-1.82,2.25-3C12.88,12.88,18,12,24,12C34,12,40,20,40,28 z"
          />
          <path
            fill="#673ab7"
            d="M1,32c0,0,1-1.448,1-2s-0.448-1-1-1s-1,0.5-1,1.125C0,31.375,1,32,1,32z"
          />
          <path
            fill="#512da8"
            d="M14,29V19l-4,1l-2,3c0,0,2,0.173,2,2c0,1,0,4,0,4H14z"
          />
          <path
            fill="#fff"
            d="M17.543,32H12c0,0,0-1.835,0-2.217c0-0.883,0-2.565,0-4.783c0-6,7-6,7,2C19,31,17.543,32,17.543,32z"
          />
          <path
            fill="#ab47bc"
            d="M13.88,29c1.17,0,2.12-1.344,2.12-3s-0.95-3-2.12-3c-1.63,0-1.82,1.62-1.83,1.776 C12.02,25.148,12,25.556,12,26s0.02,0.84,0.04,1.2C12.04,27.2,12.125,29,13.88,29z"
          />
          <path d="M14,26c0,1.107-0.5,2-1.12,2C12.54,28,12,27.667,12,26s0.55-2,0.88-2C13.5,24,14,24.893,14,26z" />
          <path fill="#fff" d="M15 23A1 1 0 1 0 15 25A1 1 0 1 0 15 23Z" />
          <path
            fill="#512da8"
            d="M33.5 24A1.5 2 0 1 0 33.5 28 1.5 2 0 1 0 33.5 24zM37 27c-1 0-1 .875-1 1.25 0 .5.75 1.75 1 1.75s1-1.125 1-1.75C38 27.875 38 27 37 27zM34 30c-1 0-1 .875-1 1.25 0 .5.75 1.75 1 1.75s1-1.125 1-1.75C35 30.875 35 30 34 30z"
          />
          <path
            fill="#764ebe"
            d="M23,28c-4,0-5,3-8,3c-2.5,0-3-1.625-3-2c-0.844,0-2,0-2,0s0,0-2-1c0,0-3,2-6,2c0,0,4,4,12,4 c4,0,6-2,6-2c0.732,0.581,1.725,1,3,1c2.209,0,4-1.119,4-2.5S25.209,28,23,28z"
          />
          <path
            fill="#4a148c"
            d="M22 36v2c-1.23 0-2.35-.24-3.25-.67C14.46 39.67 9.41 40 5 40H4.66c-.01 0-.01-.01-.02-.01L4 38h1c4.53 0 9.27-.32 13.24-2.68L18.78 35l.52.35C19.93 35.76 20.91 36 22 36zM31 38c0 0-1 4-8 4v2C24 44 31 44 31 38z"
          />
          <g>
            <path fill="#fbc02d" d="M19 42H23V46H19z" />
            <path fill="#ff8f00" d="M19 42H23V44H19z" />
          </g>
          <g>
            <path
              fill="#311b92"
              d="M15.127,21C12,21,12.056,23,8,23c0,0,2.817-5,6.873-5C19.944,18,24,17,24,17s-1,4-4,4 C18.746,21,16.975,21,15.127,21z"
            />
            <path
              fill="#7e57c2"
              d="M24,17c0,0-2,2-8,2c-2,0-2.864,0.577-3.855,1.22C10.944,21,9.521,23,8,23c-0.887,0-2-1.75-2-2.98 c1,0,2.057-0.805,2.75-1.395C10.217,17.375,12,16,15,16C20,16,24,17,24,17z"
            />
          </g>
          <g>
            <path
              fill="#ff8f00"
              d="M48,0.04c-0.39,0.04-1.69,0.64-3.01,1.83c-0.08,0.07-0.16,0.14-0.23,0.22 c-0.42,0.4-0.84,0.87-1.23,1.41c-0.03,0.04-0.06,0.08-0.08,0.12c-0.37,0.51-0.69,1.09-0.96,1.73c-0.14,0.33-0.26,0.68-0.36,1.04 c-0.08,0.29-0.15,0.6-0.19,0.91c-0.04,0.14-0.06,0.28-0.07,0.44c-0.03,0.28-0.05,0.48-0.08,0.64c-0.08,0.73-0.05,0.5-0.25,2.17 l-0.06,0.53c-0.02,0.21-0.06,0.45-0.12,0.74c-0.04,0.21-0.09,0.45-0.16,0.7c-0.11,0.38-0.24,0.79-0.43,1.24 c-0.27,0.66-0.64,1.38-1.16,2.13c-0.22,0.33-0.46,0.66-0.75,1c-0.27,0.33-0.58,0.66-0.92,0.99c-0.26,0.26-0.54,0.52-0.84,0.77 c-0.88,0.75-1.94,1.49-3.21,2.18c-0.3,0.17-1.56,0.41-3.48-0.39c-2.88-1.21-4.34-3.44-4.4-5.12c-0.03-0.39,0.02-0.7,0.14-0.97 c0.25-0.71,1.12-1.41,1.35-1.59c0.31-0.24,0.58-0.43,0.87-0.62c0.07-0.06,0.14-0.11,0.22-0.16c0.02-0.02,0.05-0.04,0.08-0.06 c0.16-0.11,0.72-0.46,1.45-0.9h0.01c0.91-0.56,2.08-1.24,2.95-1.78c0.01-0.01,0.03-0.02,0.04-0.02c0.63-0.37,1.1-0.67,1.22-0.76 c0.08-0.07,0.15-0.12,0.23-0.18c0.07-0.06,0.14-0.12,0.2-0.18c0.49-0.45,0.86-0.89,1.16-1.31V6.76c0.31-0.45,0.54-0.88,0.74-1.31 c0.07-0.15,0.14-0.3,0.21-0.45c0.23-0.46,0.45-0.91,0.77-1.36c0.11-0.16,0.24-0.33,0.39-0.49c0.22-0.27,0.48-0.53,0.8-0.79 c0.13-0.1,0.27-0.2,0.42-0.31c0.44-0.32,0.89-0.58,1.37-0.81c0.03-0.01,0.06-0.02,0.08-0.04c0.17-0.08,0.34-0.15,0.52-0.21 c0.35-0.15,0.71-0.27,1.07-0.38c0.29-0.09,0.58-0.16,0.88-0.23c0.83-0.18,1.68-0.29,2.52-0.34C46.49-0.02,47.25-0.01,48,0.04z"
            />
            <path
              fill="#ff6f00"
              d="M38.86 16.89c-.27.33-.58.66-.92.99-.26.26-.54.52-.84.77-5.16-.96-7.82-3.83-8.73-6.51.07-.06.14-.11.22-.16.02-.02.05-.04.08-.06.16-.11.72-.46 1.45-.9C30.68 13.43 33.23 16.31 38.86 16.89zM41.36 11.82c-.04.21-.09.45-.16.7-.11.38-.24.79-.43 1.24-3.97-.61-6.39-2.38-7.65-4.54.63-.37 1.1-.67 1.22-.76.08-.07.15-.12.23-.18.07-.06.14-.12.2-.18C35.88 10.08 38.16 11.38 41.36 11.82zM42.13 6.39c-.08.29-.15.6-.19.91-.04.14-.06.28-.07.44-.03.28-.05.48-.08.64C39.55 7.67 37.96 6.4 36.88 5c.23-.46.45-.91.77-1.36.11-.16.24-.33.39-.49C38.81 4.39 40.08 5.66 42.13 6.39zM44.76 2.09c-.42.4-.84.87-1.23 1.41-.03.04-.06.08-.08.12-.97-.71-1.69-1.63-2.22-2.63.35-.15.71-.27 1.07-.38.29-.09.58-.16.88-.23C43.56 1.02 44.08 1.62 44.76 2.09z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
