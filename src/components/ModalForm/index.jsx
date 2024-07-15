import { useContext } from "react";
import { ModalFormContext } from "../../context/ModalForm";
import { IoMdCloseCircleOutline } from "react-icons/io";
import styles from "./ModalForm.module.css";
import styled from "styled-components";
import Button from "../Button";
import Form from "../Form";
import { VideosContext } from "../../context/Videos";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const ModalForm = () => {
  const { modalState, setModalState } = useContext(ModalFormContext);
  const { editVideo } = useContext(VideosContext);

  return (
    <Overlay style={modalState ? { display: "flex" } : { display: "none" }}>
      <dialog className={styles.modal} open={modalState}>
        <h1>EDITAR CARD</h1>
        <Button type="button" onClickFunction={() => setModalState(false)}>
          <IoMdCloseCircleOutline className={styles.closeIcon} />
        </Button>
        <Form className={styles.form} onSubmitFunction={editVideo} />
      </dialog>
    </Overlay>
  );
};

export default ModalForm;
