import React from "react";
import '../../components/loginForm/LoginForm.css'

function LoginForm() {
    return (
        <div className="login-form">
            <h2>Iniciar Sesión</h2>
            <form className="formlogin">
                <div className="form-group">
                    <label htmlFor="username">Nombre de Usuario:</label>
                    <input type="text" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}
export default LoginForm;