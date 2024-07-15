import styles from "./ListaOpciones.module.css";

const ListaOpciones = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>Categoria</label>
      <select
        className={styles.select}
        value={value}
        onChange={handleChange}
        required
      >
        <option value="" disabled defaultValue="" hidden>
          Selecciona una categoria
        </option>
        <option value="front end">Front end</option>
        <option value="back end">Back end</option>
        <option value="innovación y gestión">Innovación y gestión</option>
      </select>
    </div>
  );
};

export default ListaOpciones;
