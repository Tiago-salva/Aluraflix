import { createContext, useState } from "react";

export const ModalFormContext = createContext();

export const ModalFormProvider = ({ children }) => {
  const [modalState, setModalState] = useState(false);
  const [idToEdit, setIdToEdit] = useState(null);
  const [notificationState, setNotificationState] = useState(false);

  return (
    <ModalFormContext.Provider
      value={{
        modalState,
        setModalState,
        idToEdit,
        setIdToEdit,
        notificationState,
        setNotificationState,
      }}
    >
      {children}
    </ModalFormContext.Provider>
  );
};
