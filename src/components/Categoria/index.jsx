import styles from "./Categoria.module.css";
import Card from "../Card";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { VideosContext } from "../../context/Videos";

const Categoria = ({ titulo, color }) => {
  const { videos, getVideos } = useContext(VideosContext);

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videos]);

  const videosFiltrados = videos.filter(
    (video) => video.categoria === titulo.toLowerCase()
  );

  return (
    <section className={styles.categoria}>
      <h1 style={{ backgroundColor: color }} className={styles.titulo}>
        {titulo}
      </h1>
      <div className={styles.cardContainer}>
        {videosFiltrados.map((videoFiltrado) => {
          return (
            <Card
              key={videoFiltrado.id}
              id={videoFiltrado.id}
              imagen={videoFiltrado.imagen}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Categoria;
