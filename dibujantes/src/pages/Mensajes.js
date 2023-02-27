import {FormatoMensaje} from '../componentes'

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