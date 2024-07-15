import styles from "./Card.module.css";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { RiEdit2Fill } from "react-icons/ri";
import Button from "../Button";
import { useContext } from "react";
import { ModalFormContext } from "../../context/ModalForm";
import { VideosContext } from "../../context/Videos";
import { Link } from "react-router-dom";

const Card = ({ imagen, id }) => {
  const { setModalState, setIdToEdit } = useContext(ModalFormContext);
  const { deleteVideo, videos, videoSelected, setVideoSelected } =
    useContext(VideosContext);

  const video = videos.find((video) => video.id === id);
  const selectedIcon =
    videoSelected === undefined || videoSelected.titulo !== video.titulo ? (
      <FaRegStar />
    ) : (
      <FaStar />
    );

  return (
    <div className={styles.card}>
      <Button
        onClickFunction={() => {
          setVideoSelected(video);
        }}
      >
        <>{selectedIcon}</>
      </Button>
      <Link to={`/${id}`}>
        <img src={imagen} alt="" />
      </Link>
      <footer>
        <Button type="button" onClickFunction={() => deleteVideo(id)}>
          <div className={styles.iconoContainer}>
            <FaTrash className={styles.deleteIcon} />
            <p>BORRAR</p>
          </div>
        </Button>
        <Button
          type="button"
          onClickFunction={() => {
            setModalState(true);
            setIdToEdit(id);
          }}
        >
          <div className={styles.iconoContainer}>
            <RiEdit2Fill className={styles.editIcon} />
            <p>EDITAR</p>
          </div>
        </Button>
      </footer>
    </div>
  );
};

export default Card;
