import React from "react";
import Form from "../../Form/AuthForm"
import Template from "../../Form/AuthTemplate"
import Login from "../../Components/Login";


const LoginPresenter =()=>{
    return(
        <Template>
            <Form type="login"/>
            <Login/>
        </Template>
            )
}

export default LoginPresenter;