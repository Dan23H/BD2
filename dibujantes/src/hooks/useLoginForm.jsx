import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginData } from "../components/fake-data/loginData";

function useLoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const Nav = useNavigate();
  const [credencialesInvalidas, setCredencialesInvalidas] = useState(false);

  const tomarUsuario = (evt) => {
    setUsuario(evt.target.value)
  }

  const tomarContraseña = (evt) => {
    setContraseña(evt.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: usuario,
          correo: usuario, 
          contraseña: contraseña,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Inicio de sesión exitoso
        Nav("/home");
      } else {
        // Credenciales inválidas
        setCredencialesInvalidas(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    usuario,
    contraseña,
    tomarUsuario,
    tomarContraseña,
    handleLogin,
    credencialesInvalidas,
  };
}

export default useLoginForm;

