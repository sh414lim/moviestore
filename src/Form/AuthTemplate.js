import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom"


const AuthContainer=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: pink;
    left:0;
    top:250px;
    bottom:0;
    right:0;
`;

const Box=styled.div`
    .logo{
        display: block;
        padding-bottom: 2rem;
        padding-top: 2rem;
        text-align: center;
        letter-spacing: 2px;// 사이 간격
    }
    box-shadow: 3px 3px rgba(0,0,0,0.3), -1em 0 .4em rgba(0,0,0,0.5);
    pad: 2rem;
    width:410px;
    height:90%;
    border-radius: 60px;
    background-color: white;
`;


const AuthTemplate =({children})=>{
    return(
        <AuthContainer>
            <Box>
                <div className="logo">
                <Link to ="/">|SHOP|</Link>
                </div>
                {children}
            </Box>
        </AuthContainer>
            )
}

export default AuthTemplate;