import React from "react"
import styled from "styled-components";


const Container =styled.div`
    
    height: 300vh;  
    width: 100vw;
`;

const Title =styled.div`    
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    border-bottom: 1px solid rgba(0,0,0,0.3);
`;

const Grid =styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 0px 50px;
    margin-top: 30px;
`;



const Section = ({ title, children }) => (
    <Container>
      <Title>{title}</Title>
      <Grid>{children}</Grid>
    </Container>
  );

export default Section