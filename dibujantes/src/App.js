import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, SignIn, Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      
      <Route path="/home/search" element={<Search />} />
      <Route path="/home/imagen" element={<Imagen />} />
      <Route path="/profile" element={<Perfil />} />
      <Route path="/profile/edit" element={<EditarPerfil />} />
      <Route path="/subir" element={<Subir />} />
      <Route path="/notificaciones" element={<Notificaciones />} />
      <Route path="/mensajes" element={<Mensajes />} />
    </Routes>
  );
};

export default App;

