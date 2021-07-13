import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Editor from "../BorderContailer";
import{chageField,initialize } from "../modules/writer"

const EditorContainer=()=>{
    const dispatch=useDispatch();
    const{title,body}=useSelector(({writer})=>({
        dispatch,
    }));
    const onChangeField =useCallback(payload => dispatch(chageField(payload)),[
        dispatch,
    ])
    //언마운트 될때 초기화
    useEffect(()=>{
        return()=>{
            dispatch(initialize());
        };
    },[dispatch]);
    return <Editor onChangeField={onChangeField} title={title} body={body}/>
};

export default EditorContainer;

//title 값과 body 값을 리덕스 스토어에서 불러와 Editor 컴포넌트에 전달
//QUILL 에디터는 input 이나 textarea 가 아니기 때문에 onChange 와 value 값을 사용항 ㅕ상태관리 x
