// 로그인 회원가입 폼

import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Button from "./Button";
import palette from "../Components/palette";


/*
회원가입 또는 로그인 폼
*/



const AuthFormBlock=styled.div`
h3{
    margin: 0;
    color:${palette.gray[8]};
    margin-bottom: 1rem;
    
}
`;

// 스타일링 된 input
const StyleInput=styled.input`
font-size:1rem;
border:none;
border-bottom: 1px solid ${palette.gray[5]};
padding-bottom: 0.5rem;
outline: none;
width: 100%;
&:focus{
color:$oc-teal-7;
border-bottom: 1px solid ${palette.gray[7]};
}
& + &{
    margin-top: 1rem;
}
`;


//폼 하단에 로그인 혹은 회원가입 링크를 보여준다
const Footer=styled.div`
    margin-top: 2rem;
    text-align: right;
    a{
        color:${palette.gray[6]};
        text-decoration: underline;
        &:hover{
            color:${palette.gray[9]}
        }
        
    }
`;



const textMap={
    login:"로그인",
    register:"회원가입"
    
}


//type props에 따라 다른 내용을 보여준다
//type 값에 따라 사용되는 문구가 달리지고 type 이 register 일때는 비밀번호 확인 인풋도 보여진다

//컨테이너 넣어주었던 onChange,onSubmit form 사용

const AuthForm=({type,form,onChange,onSubmit})=>{
    const text=textMap[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
            <StyleInput
                 autoComplete="username" 
                 name="username" 
                 placeholder="아이디" 
                 onChange={onChange} 
                 value={form.username}
                 />

                        <StyleInput
                autoComplete="new-password"
                name="new-password"
                placeholder="비밀번호"
                onChange={onChange}
                value={form.passowrd}
                />
                {type === "register" &&(
                             <StyleInput
                             autoComplete="new-password"
                             name="passowrdConfirm"
                             placeholder="비밀번호 확인"
                             onChange={onChange}
                             value={form.passowrdConfirm}
                             />
    )}
    <button>{text}</button>
            </form>
            <Footer>
                {type === 'login' ? (
                    <Link to ='/registre'>회원가입</Link>
                ):(
                    <Link to ='/login'>로그인</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};


export default AuthForm;