import { useContext } from "react"
import { authContext } from "../context/authContext"

export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error('No hay un Proveedor de Autenticación.')
    return context
}