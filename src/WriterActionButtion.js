import React from "react";
import styled from "styled-components";
import Button from "./Components/conmon/Button";

const WriterActionButtionBlock=styled.div`
margin-top: 1rem;
margin-bottom: 3rem;
button+button{
    margin-left: 0px.5rem;
}
`;

const Styledbutton=styled(Button)`
height: 2.125rem;
&+&{
    margin-left: 0.5rem;
}
`;

const WriterActionButtons=({onCancel,onPublish})=>{
    return(
        <WriterActionButtionBlock>
            <Styledbutton cyan onClick={onPublish}>
                포스트 등록
            </Styledbutton>
            <Styledbutton onClick={onCancel}>취소</Styledbutton>
        </WriterActionButtionBlock>
    )
}

export default WriterActionButtons