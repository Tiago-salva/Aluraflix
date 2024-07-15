import { useContext } from "react";
import styles from "./Notification.module.css";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { NotificationContext } from "../../context/Notification";
import Button from "../Button";

const Notification = () => {
  const {
    notificationState,
    setNotificationState,
    notificationType,
    notificationText,
  } = useContext(NotificationContext);

  return (
    <div
      className={styles.overlay}
      style={{ display: notificationState ? "flex" : "none" }}
    >
      <div className={styles.notificationContainer}>
        <>
          {notificationType === "error" ? (
            <IoClose className={styles.notificationType} />
          ) : (
            <FaCheck className={styles.notificationType} />
          )}
        </>
        <p className={styles.notificationText}>{notificationText}</p>
        <Button onClickFunction={() => setNotificationState(false)}>OK</Button>
      </div>
    </div>
  );
};

export default Notification;
