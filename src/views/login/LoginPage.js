import React from "react";
import LoginForm from "../../components/loginForm/LoginForm";
import '../../views/login/LoginPage.css';
function LoginPage(){
    return (
        <div className="login-container"> 
        <LoginForm/>
       </div>
     
    );
}
export default LoginPage;