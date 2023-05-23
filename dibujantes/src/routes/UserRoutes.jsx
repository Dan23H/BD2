import { Route, Routes } from "react-router-dom"
import { Login, SignIn, Home, Mensajes, SubirImagen, Notification, Perfil, EditarPerfil, Image } from "../pages";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "../actions/auth";
import { firebase } from "../firebase/firebaseConfig"

export const Routing = () => {
    
  const dispatch = useDispatch()
  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [authCompleted, setAuthCompleted] = useState(false)


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false)
      setAuthCompleted(true)
    });
  }, [dispatch]);

  if (checking) {
    return <h2>Cargando...</h2>;
  }
  console.log(isLoggedIn)
  if (!authCompleted) {
    return null;
  }


    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<SignIn />} />
            <Route path="/home" element={<Home />} />
            <Route path="/mensajeria" element={<Mensajes />} />
            <Route path="/subir-imagen" element={<SubirImagen />} />
            <Route path="/notificaciones" element={<Notification />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/editar-perfil" element={<EditarPerfil />} />
            <Route path="/image" element={<Image />} />
        </Routes>
    )
}