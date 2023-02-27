export const SignIn = () => {
    return(
        <>
        <div>
            <h1>Por favor llene el siguiente formulario</h1>
            <div>
                <input type="text" placeholder="Nombre de usuario" />
            </div>
            <div>
                <input type="password" placeholder="Correo electronico" />
            </div>
            <div>
                <input type="password" placeholder="Contraseña" />
            </div>
            <div>
                <input type="password" placeholder="Confirmar Contraseña" />
            </div>
            <div>
                <button>Sign In</button>
            </div>
        </div>
        </>
    )
}