import styles from "./Player.module.css";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { VideosContext } from "../../context/Videos";

const Player = () => {
  const { videos } = useContext(VideosContext);
  const parametros = useParams();
  const video = videos.find((video) => video.id === parametros.id);
  return (
    <section className={styles.playerContainer}>
      <h1 className={styles.videoTitulo}>{video.titulo}</h1>
      <iframe
        className={styles.video}
        width="853"
        height="480"
        src={video.video}
        title={video.titulo}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <p className={styles.videoDescripcion}>{video.descripcion}</p>
    </section>
  );
};

export default Player;
