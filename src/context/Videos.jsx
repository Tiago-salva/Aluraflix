import { createContext, useContext, useEffect, useState } from "react";
import { NotificationContext } from "./Notification";

export const VideosContext = createContext();

export const VideosProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([
    {
      titulo: "FRONT END",
      color: "#6bd1ff",
      index: 1,
    },
    {
      titulo: "BACK END",
      color: "#00c86f",
      index: 0,
    },
    {
      titulo: "INNOVACIÓN Y GESTIÓN",
      color: "#ffba05",
      index: 2,
    },
  ]);
  const [videoSelected, setVideoSelected] = useState(undefined);
  const { setNotification } = useContext(NotificationContext);

  const getVideos = async () => {
    try {
      const response = await fetch("http://localhost:3001/videos");
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
      setNotification(
        true,
        "error",
        "Hubo un problema al conseguir los videos"
      );
    }
  };

  const addVideo = async (videoData) => {
    try {
      await fetch("http://localhost:3001/videos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      });
      setNotification(true, "valid", "El video se ha registrado correctamente");
    } catch (error) {
      console.error("Error adding video:", error);
      setNotification(false, "error", "Hubo un problema al registrar el video");
    }
  };

  const deleteVideo = async (videoId) => {
    try {
      await fetch(`http://localhost:3001/videos/${videoId}`, {
        method: "DELETE",
      });
      setNotification(true, "valid", "El video se ha eliminado correctamente");
    } catch (error) {
      console.error("Error deleting video:", error);
      setNotification(true, "error", "Hubo un problema al eliminar el video");
    }
  };

  const editVideo = async (videoId, videoData) => {
    try {
      await fetch(`http://localhost:3001/videos/${videoId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(videoData),
      });
      setNotification(true, "valid", "El video se ha editado correctamente");
    } catch (error) {
      console.error("Error editing video:", error);
      setNotification(true, "error", "Hubo un problema al editar el video");
    }
  };

  // It get the videos
  useEffect(() => {
    getVideos();
  }, []);

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        categorias,
        setCategorias,
        setVideoSelected,
        videoSelected,
        getVideos,
        addVideo,
        deleteVideo,
        editVideo,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
};
