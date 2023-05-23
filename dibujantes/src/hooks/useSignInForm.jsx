import { useState } from "react";

function useSignInForm() {
  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [cContraseña, setCContraseña] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");

  const tomarUsuario = (evt) => {
    setUsuario(evt.target.value);
  };

  const tomarCorreo = (evt) => {
    setCorreo(evt.target.value);
  };

  const tomarContraseña = (evt) => {
    setContraseña(evt.target.value);
  };

  const tomarCContraseña = (evt) => {
    setCContraseña(evt.target.value);
  };

  const handleRegistro = (e) => {
    e.preventDefault();
    if (contraseña === cContraseña) {
      const data = {
        nombre: usuario,
        correo: correo,
        contraseña: contraseña,
        confirmarContraseña: cContraseña,
      };

      fetch("http://localhost:4000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.ok) {
            console.log("Usuario registrado exitosamente");
          } else {
            console.error("Error al registrar usuario:", result.msg);
          }
        })
        .catch((error) => {
          console.error("Error de red:", error);
        });
    } else {
      setErrorContraseña("Las contraseñas no coinciden");
    }
  };

  return {
    usuario,
    correo,
    contraseña,
    cContraseña,
    tomarUsuario,
    tomarCorreo,
    tomarContraseña,
    tomarCContraseña,
    handleRegistro,
    usuarios,
    error,
  };
}

export default useSignInForm;
