import styles from "./Inicio.module.css";
import { useContext } from "react";
import Banner from "../../components/Banner";
import Categoria from "../../components/Categoria";
import { VideosContext } from "../../context/Videos";
import ModalForm from "../../components/ModalForm";
const Inicio = () => {
  const { categorias, videos } = useContext(VideosContext);

  const categoriasConVideos = categorias.filter((categoria) =>
    videos.some((video) => video.categoria === categoria.titulo.toLowerCase())
  );

  return (
    <>
      {categoriasConVideos.length === 0 ? (
        <main className={styles.noVideosContainer}>
          <h1>No hay ningun video creado</h1>
        </main>
      ) : (
        <>
          <Banner />
          <main className={styles.videosContainer}>
            {categoriasConVideos.map((categoria) => (
              <Categoria
                titulo={categoria.titulo}
                color={categoria.color}
                key={categoria.index}
              />
            ))}
          </main>
          <ModalForm />
        </>
      )}
    </>
  );
};

export default Inicio;
