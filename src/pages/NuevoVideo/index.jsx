import { useContext } from "react";
import Form from "../../components/Form";
import styles from "./NuevoVideo.module.css";
import { VideosContext } from "../../context/Videos";

const NuevoVideo = () => {
  const { addVideo } = useContext(VideosContext);

  return (
    <main className={styles.main}>
      <div className={styles.tituloContainer}>
        <h1>NUEVO VIDEO</h1>
        <p>Complete el formulario para crear una nueva tarjeta de video</p>
      </div>

      <div className={styles.subtituloContainer}>
        <h3>Crear Tarjeta</h3>
      </div>

      <Form onSubmitFunction={addVideo} />
    </main>
  );
};

export default NuevoVideo;
