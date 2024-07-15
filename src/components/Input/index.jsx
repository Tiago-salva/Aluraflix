import React, { useContext } from "react";
import styles from "./Input.module.css";
import { InputsContext } from "../../context/Inputs";

const Input = ({
  label,
  type = "text",
  placeHolder,
  value,
  onChange,
  name,
}) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={styles.inputContainer}>
      <label className={styles.label}>{label}</label>
      <input
        type={type}
        placeholder={placeHolder}
        className={styles.input}
        value={value}
        onChange={handleChange}
        required
      />
    </div>
  );
};

export default Input;

// import styles from "./Input.module.css";

// const Input = ({ titulo, type = "text", placeHolder, mensajeError, value, onChange }) => {
//   return (
//     <div className={styles.inputContainer}>
//       <label className={styles.label}>{titulo}</label>
//       <input
//         type={type}
//         placeholder={placeHolder}
//         className={styles.input}
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//     </div>
//   );
// };

// export default Input;
