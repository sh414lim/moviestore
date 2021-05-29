import React from "react"
import styled from "styled-components";


const Container =styled.div`

    height: 500vh;  
    width: 100vw;
`;

const Title =styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    margin-bottom: 20px;
`;

const Grid =styled.div`
    display: grid;
    grid-template-columns: repeat(4,2fr);
    grid-template-rows: repeat(2,2fr);
    gap: 30px;
    padding: 30px;
    margin-top: 30px;
`;



const Section = ({ title, children }) => (
    <Container>
      <Title>{title}</Title>
      <Grid>
            {children}
          </Grid>
    </Container>
  );

export default Section