import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Header from "./components/Header";
import Pie from "./components/Pie";
import NuevoVideo from "./pages/NuevoVideo";
import { VideosProvider } from "./context/Videos";
import { InputsProvider } from "./context/Inputs";
import { ModalFormProvider } from "./context/ModalForm";
import { NotificationProvider } from "./context/Notification";
import Notification from "./components/Notification";
import Player from "./pages/Player";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NotificationProvider>
        <VideosProvider>
          <InputsProvider>
            <ModalFormProvider>
              <Header />
              <Notification />
              <Routes>
                <Route path="/" element={<Inicio />}></Route>
                <Route path="/nuevo-video" element={<NuevoVideo />}></Route>
                <Route path="/:id" element={<Player />}></Route>
              </Routes>
              <Pie />
            </ModalFormProvider>
          </InputsProvider>
        </VideosProvider>
      </NotificationProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
