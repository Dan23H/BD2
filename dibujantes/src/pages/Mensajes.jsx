import { FormatoMensaje } from "../components/messageMail/FormatoMensaje"

export const Mensajes = () => {
    return (
        <>
            <table>
                <thead>
                    <h1>Mensajes</h1>
                </thead>
                <tbody>
                    <FormatoMensaje />
                </tbody>
            </table>
        </>
    )
}