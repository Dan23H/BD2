import { useState } from "react"

export const CompSignIn = () => {
    const[usuario, setUsuario]= useState('')
    const[correo, setCorreo]= useState('')
    const[contraseña, setContraseña]= useState('')
    const[cContraseña, setCContraseña]= useState('')


    const tomarUsuario = (evt) => {
        setUsuario(evt.target.value)
    }

    const tomarCorreo = (evt) => {
        setCorreo(evt.target.value)
    }

    const tomarContraseña = (evt) => {
        setContraseña(evt.target.value)
    }

    const tomarCContraseña = (evt) => {
        setCContraseña(evt.target.value)
    }

    const confirmacion = () => {
        let confirmacion;
        confirmacion = contraseña === cContraseña ? cContraseña : "(Las contraseñas no son la misma)"
        return confirmacion;
    }

    const mostrarResultados = () => {
        console.log("Tu usuario sera " + usuario + " con correo " 
        + correo + " y contraseña " + confirmacion())
    }

    return (
        <>
            <div>
                <input type="text" placeholder="Nombre de usuario" onChange={
                    (evt) => tomarUsuario(evt)}/>
            </div>
            <div>
                <input type="text" placeholder="Correo electronico" onChange={
                    (evt) => tomarCorreo(evt)}/>
            </div>
            <div>
                <input type="password" placeholder="Contraseña" onChange={
                    (evt) => tomarContraseña(evt)}/>
            </div>
            <div>
                <input type="password" placeholder="Confirmar Contraseña" onChange={
                    (evt) => tomarCContraseña(evt)}/>
            </div>
            <div>
                <button onClick={() => mostrarResultados()}>Sign In</button>
            </div>
        </>
    )
}