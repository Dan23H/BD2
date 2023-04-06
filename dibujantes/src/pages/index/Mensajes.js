import { FormatoMensaje } from "../../components/shared/FormatoMensaje"

export const Mensajes = () => {
    return (
        <>
            <table>
                <thead>
                    <h1>Mensajes</h1>
                </thead>
                <tbody>
                    <FormatoMensaje />
                    <FormatoMensaje />
                    <FormatoMensaje />
                    <FormatoMensaje />
                    <FormatoMensaje />
                </tbody>
            </table>
        </>
    )
}