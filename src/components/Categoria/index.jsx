import styles from "./Categoria.module.css";
import Card from "../Card";
import styled from "styled-components";
import { useContext, useEffect } from "react";
import { VideosContext } from "../../context/Videos";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

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
      <Div>
        {videosFiltrados.map((videoFiltrado) => {
          return (
            <Card
              key={videoFiltrado.id}
              id={videoFiltrado.id}
              imagen={videoFiltrado.imagen}
            />
          );
        })}
      </Div>
    </section>
  );
};

export default Categoria;
