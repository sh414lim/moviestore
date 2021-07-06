import React from "react";
import AuthTemplate from "../../Components/auth/AuthTemplate"
import RegisterForm from "../../Components/auth/AuthForm";
import GoogleButton from "../../Components/Login";


const LoginPage =()=>{
    return(
        <AuthTemplate>
            <RegisterForm/>
            <GoogleButton/>
        </AuthTemplate>
        )
}

export default LoginPage;