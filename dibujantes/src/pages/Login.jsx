import React from "react";

export const Login = () => {

    return (

        <div>
            <h1>Login</h1>
            <div>
                <label>Usuario:</label>
                <input type="text" placeholder="Enter username" />
            </div>
            <div>
                <label>Contraseña:</label>
                <input type="password" placeholder="Enter password" />
            </div>
            <div>
                <button>Sign In</button>
                <button>Log In</button>
            </div>
        </div>

    );

}
