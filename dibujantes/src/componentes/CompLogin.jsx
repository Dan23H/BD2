import { useState } from "react"

export const CompLogin = () => {

    const [usuario, setUsuario] = useState(0)
    const [contraseña, setContraseña] = useState(0)

    const tomarUsuario = (evt) => {
        setUsuario(evt.target.value)
    }

    const tomarContraseña = (evt) => {
        setContraseña(evt.target.value)
    }

    const pruebaDeTomaDeDatos = () => {
        console.log('Tu usuario es: ' + usuario + ' y tu contraseña es: ' + contraseña)
    }

    return (
        <>
            <div>
                <label>Usuario: </label>
                <input type="text" placeholder="Enter username" onChange={(evt) => tomarUsuario(evt)}/>
            </div>
            <div>
                <label>Contraseña: </label>
                <input type="password" placeholder="Enter password" onChange={(evt) => tomarContraseña(evt)} />
            </div>
            <div>
                <button>Sign In</button>
                <button onClick={() => pruebaDeTomaDeDatos()}>Log In</button>
            </div>
        </>
    )
}