import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Contariner = styled.div``;

const ImageContainer=styled.div`

`;

const Image=styled.div`
background-image: url(${props=>props.bgurl});
`;
const Title=styled.span``;

const Year =styled.span``;

const Rating = styled.span``;


const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => (
      <Contariner>
        <ImageContainer>
          <Image bgUrl={imageUrl} />
          <Rating>
            <span role="img" aria-label="rating">
              ⭐️
            </span>{" "}
            {rating}/10
          </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Contariner>
  );

export default Poster;