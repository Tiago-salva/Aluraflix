import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className={styles.header}>
      <img src="/img/aluraflix-logo.png" alt="Aluraflix" />

      <div
        className={`${styles.hamburger} ${open ? styles.open : ""}`}
        onClick={handleClick}
      >
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      <nav className={`${styles.nav}  ${open ? styles.displayed : ""}`}>
        <Link to="/" className={styles.link}>
          Home
        </Link>
        <Link to="/nuevo-video" className={styles.link}>
          Nuevo video
        </Link>
      </nav>
    </header>
  );
};

export default Header;
