import { useContext } from "react";
import styles from "./Banner.module.css";
import { VideosContext } from "../../context/Videos";

const Banner = () => {
  const { videoSelected } = useContext(VideosContext);
  return (
    <>
      {videoSelected === undefined ? (
        <section className={styles.bannerNoVideo}>
          <h1>No hay ningun video seleccionado</h1>
        </section>
      ) : (
        <section className={styles.banner}>
          <div className={styles.textContainer}>
            <h1>{videoSelected.categoria.toUpperCase()}</h1>
            <h2>{videoSelected.titulo}</h2>
            <p>{videoSelected.descripcion}</p>
          </div>
          <div className={styles.imgContainer}>
            <img src={videoSelected.imagen} alt="Video destacado" />
          </div>
        </section>
      )}
    </>
  );
};

export default Banner;
