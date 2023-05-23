import { authContext } from "./authContext"

const AuthProvider = ({children}) => {
    const registro = ({email, password}) => {
        console.log(email, password)
    }
    return (
        <authContext.Provider value={{registro}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider