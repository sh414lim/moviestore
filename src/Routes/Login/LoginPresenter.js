import React from "react";
import AuthTemplate from "../../Components/auth/AuthTemplate"
import LoginForm from "../../Components/auth/AuthForm";


const LoginPage =()=>{
    return(
        <AuthTemplate>
            <LoginForm/>
        </AuthTemplate>
        )
}

export default LoginPage;