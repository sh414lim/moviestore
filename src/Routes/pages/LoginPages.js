import React from "react";
import AuthTemplate from "../../Components/components/auth/AuthTemplate"
import LoginForm from "../../containers/auth/LoginForm";
import GoogleLogin from "../../Components/Login";


const LoginPage =()=>{
    return(
        <AuthTemplate>
            <LoginForm/>
            <GoogleLogin/>
        </AuthTemplate>
        )
}

export default LoginPage;