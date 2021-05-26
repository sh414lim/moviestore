import React from "react"
import styled from "styled-components";


const Container =styled.div``;

const Title =styled.div``;

const Children =styled.div``;

const Section =({title,children})=>{
    <Container>
        <Title>{title}</Title>
<Children>{children}</Children>
    </Container>
}

export default Section