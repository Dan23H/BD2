import React from "react";
import { ComponenteInput } from "../componentes";
import { Link } from "react-router-dom";

export const Login = () => {

    return (
        <>
            <div>
                <ComponenteInput tipo="text" valor="Usuario" />
                <ComponenteInput tipo="password" valor="Contraseña" />
                <div>
                    <Link to="/register"><button>Registrarse</button></Link>
                    <Link to="/home"><button>Iniciar Sesión</button></Link>
                </div>
            </div>

        </>
    )

}
