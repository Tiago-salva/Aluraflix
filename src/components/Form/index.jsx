import React, { useState, useContext, useEffect } from "react";
import { InputsContext } from "../../context/Inputs";
import Input from "../Input";
import styles from "./Form.module.css";
import ListaOpciones from "../ListaOpciones";
import Button from "../Button";
import { ModalFormContext } from "../../context/ModalForm";
import { VideosContext } from "../../context/Videos";

const Form = ({ onSubmitFunction }) => {
  const initialFormState = {
    // Despues cambiar la logica del id
    id: "9",
    titulo: "",
    categoria: "",
    imagen: "",
    video: "",
    descripcion: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const { videos } = useContext(VideosContext);
  const { inputs } = useContext(InputsContext);
  const { idToEdit, setIdToEdit, setModalState } = useContext(ModalFormContext);

  useEffect(() => {
    if (idToEdit !== null) {
      const selectedCard = videos[idToEdit];
      setFormData(selectedCard);
    } else {
      setFormData(initialFormState);
    }
  }, [idToEdit]);

  const handleChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idToEdit === null) {
      onSubmitFunction(formData);
      const nuevoId = parseInt(formData["id"]) + 1;
      handleChange("id", nuevoId.toString());
    } else {
      onSubmitFunction(idToEdit, formData);
      setIdToEdit(null);
      setModalState(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputsContainer}>
        {inputs.map((input) => (
          <Input
            key={input.name}
            label={input.label}
            placeHolder={input.placeHolder}
            value={formData[input.name]}
            onChange={(value) => handleChange(input.name, value)}
          />
        ))}
        <ListaOpciones
          value={formData["categoria"]}
          onChange={(value) => handleChange("categoria", value)}
        />
      </div>

      <div className={styles.buttonContainer}>
        <Button type="submit">Guardar</Button>
        <Button type="reset">Limpiar</Button>
      </div>
    </form>
  );
};

export default Form;
