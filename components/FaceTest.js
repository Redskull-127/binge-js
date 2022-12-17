import { useEffect, useState, useRef } from "react";
import { loadModels, detectFaces, drawResults } from "./faceApi";
import classnames from "classnames";
import Webcam from "react-webcam";
import styles from "../styles/FaceTest.module.css";

export default function Facetest() {
  const [Loaded, setLoaded] = useState(false);
  const camera = useRef();
  const cameraCanvas = useRef();
  const [results, setResults] = useState([]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const getFaces = async () => {
    if (camera.current !== null) {
      const faces = await detectFaces(camera.current?.video);
      await drawResults(
        camera.current?.video,
        cameraCanvas.current,
        faces,
        "boxLandmarks"
      );
      setResults(faces);
    }
  };

  const clearOverlay = (canvas) => {
    canvas.current
      ?.getContext("2d")
      .clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (camera !== null && Loaded == true) {
      const ticking = setInterval(async () => {
        await getFaces();
      }, 80);
      return () => {
        clearOverlay(cameraCanvas);
        clearInterval(ticking);
      };
    } else {
      return clearOverlay(cameraCanvas);
    }
  }, [Loaded]);

  return (
    <>
      <div className={styles.camera}>
        <p className={styles.scroll_down}>Scroll down for results ↓</p>
        <div className={styles.camera__wrapper}>
          <Webcam audio={false} ref={camera} width="100%" height="auto" />
          <canvas
            className={`${styles.webcamoverlay}`}
            ref={cameraCanvas}
            style={{ zIndex: 99 }}
          />
        </div>
        {results?.length > 0
          ? results.map((result, index) => {
              function getMaxValueKey(obj) {
                return Object.keys(obj).reduce(function (a, b) { return obj[a] > obj[b] ? a : b; });
            }
            console.log(getMaxValueKey(result.expressions));     
            })
          : "please wait"}
      </div>
    </>
  );
}

// angry
// :
// 0.0008302238420583308
// disgusted
// :
// 2.588909353562485e-7
// fearful
// :
// 0.00000571935788684641
// happy
// :
// 0.000006200500138220377
// neutral
// :
// 0.9300934672355652
// sad
// :
// 0.0686195120215416
// surprised
// :
// 0.00044462113874033093
