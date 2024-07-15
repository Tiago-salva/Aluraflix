import { createContext } from "react";

export const InputsContext = createContext();

export const InputsProvider = ({ children }) => {
  const inputs = [
    {
      name: "titulo",
      label: "Título",
      placeHolder: "Ingrese el título",
      mensajeDeError: "",
      value: "titulo",
      onChange: "setTitulo",
    },
    {
      name: "imagen",
      label: "Imagen",
      placeHolder: "Ingrese el link de la imagen",
      mensajeDeError: "",
      value: "imagen",
      onChange: "setImagen",
    },
    {
      name: "descripcion",
      label: "Descripción",
      placeHolder: "¿De qué trata este vídeo?",
      mensajeDeError: "",
      value: "video",
      onChange: "setVideo",
    },
    {
      name: "video",
      label: "Video",
      placeHolder: "Ingrese el link del video",
      mensajeDeError: "",
      value: "descripcion",
      onChange: "setDescripcion",
    },
  ];

  return (
    <InputsContext.Provider
      value={{
        inputs,
      }}
    >
      {children}
    </InputsContext.Provider>
  );
};
