import React from "react";
import AuthTemplate from "../../Components/auth/AuthTemplate"
import LoginForm from "../../Components/auth/AuthForm";
import GoogleButton from "../../Components/Login";


const LoginPage =()=>{
    return(
        <AuthTemplate>
            <LoginForm/>
            <GoogleButton/>
        </AuthTemplate>
        )
}

export default LoginPage;