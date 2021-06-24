//컨테이너 컴포넌트

import React,{useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import {changeField,initializeForm} from "../../modules/auth"
import AuthForm from "../../Form/AuthForm";

const LoginForm=()=>{
    const dispatch =useDispatch();
    const {form} =useSelector(({auth})=>({
        form:auth.login
    }));

    //인풋 변경 컨트롤러
    const onChange=e=>{
        const {value,name}=e.target;
        dispatch(
            changeField({
                form:'login',
                key:name,
                value
            })
        );
    };

    //폼 등록 핸들 이벤트핸들러
    //onSubmit 를 구현하여 필요한 액션을 디스패치
    const onSubmit=e=>{
        e.preventDefaule();
    }

    //컴폰넌트가 처음 렌더링 될때 form을 초기화 함
    //맨 청므 렌더링후 initializeForm 액션 생성 함수를 호풀
    //이 작업을 하지 않으면 로그인 페이지에서 값을 입력한뒤 다른페이지로  돌아왔을때 값이 유지된 살태로 보인다
    useEffect(()=>{
        dispatch(initializeForm('login'));
    },[dispatch]);



    //onChange 를 구현하여 필요한 액션을 디스패치
    return(
        <AuthForm
        type="login"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        />
    );

};


export default LoginForm;