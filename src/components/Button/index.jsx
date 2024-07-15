import styles from "./Button.module.css";

const Button = ({ children, onClickFunction, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={type === "button" ? onClickFunction : undefined}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default Button;
