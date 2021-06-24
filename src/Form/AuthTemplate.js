import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
 
/**
회원가입 /로그인 페이지 의 레이아웃을 담당하는 컴포넌트 

 */

const AuthTemplateBlock=styled.div`
position: absolute;
left:0;
top:0;
bottom:0;
right:0;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
background-color: rgba(0,0,0,0.1);
`;





const AuthtTemple=({children})=>{
    return(
        <AuthTemplateBlock>
            <Link to="/">Home</Link>
                {children}
        </AuthTemplateBlock>
    )
}

export default AuthtTemple;