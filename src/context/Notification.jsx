import { createContext, useState } from "react";

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [notificationState, setNotificationState] = useState(false);
  const [notificationType, setNotificationType] = useState("");
  const [notificationText, setNotificationText] = useState("");

  const setNotification = (state, type, text) => {
    setNotificationState(state);
    setNotificationType(type);
    setNotificationText(text);
  };

  return (
    <NotificationContext.Provider
      value={{
        notificationState,
        setNotificationState,
        notificationType,
        setNotificationType,
        notificationText,
        setNotificationText,
        setNotification,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
