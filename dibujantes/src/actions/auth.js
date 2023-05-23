import { types } from "../types"
import { firebase, googleAuthProvider } from "../firebase/firebaseConfig"



export const login = (uid, displayName) => ({
    type: types.login,
    payload: { uid, displayName },
})

export const logout = () => ({
    type: types.logout,
})

export const startGoogleAuth = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithRedirect(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))
                console.log(user.displayName)
            })
            .catch((e) => { console.error(e) })


    }
}

export const startGoogleLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()
        dispatch(logout())
    }
}