import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Container =styled.div`
    font-size:12px;
    padding:10px;
    margin-left: 100px;

    
`;

const ImageContainer=styled.div`
    background-color: black;
    padding: 50px;
    margin-bottom:5px;
    position: relative;
    box-shadow: 5px 5px rgba(0,0,0,0.6), -1em 0 .4em rgba(0,0,0,0.5);
    &:hover{
            opacity:0.9;

    }
`;

const Image=styled.div`
    width: 200px;
    height:300px;
 background-image: url(${props=>props.bgUrl});
    background-size: cover;
    background-position:center center;
transition: opacity 0.6s linear;
&:hover{
    width: 300px;
    height: 380px;
    transition: width  0.5s ease-in-out;
}
    
`;

const Rating=styled.span`
color:white;
font-size: 15px;
font-weight: 600;
`;

const Title=styled.span`
    display:block;
    margin-bottom:10px;
    font-size: 20px;
    font-weight: 600;
`;

const Year = styled.span`
font-size:10px;
    opacity:0.5;
    font-weight: 600;
`;



const Poster=({id,imageUrl,title,rating,year,isMovie=false})=>(
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
    <ImageContainer >
        <Image bgUrl={imageUrl ?
             `https://image.tmdb.org/t/p/w300${imageUrl}` 
             : require("../assests/noPosterSmall.PNG") }/>
        <Rating>
            <span role="img" aria-label="rating">
                $
            </span>{" "}
            {rating}000원
            </Rating>
    </ImageContainer>
    <Title>{title.length > 15 ? `${title.substring(0,15)}...`:title  }</Title>
    <Year>{year}</Year>
</Container>
    </Link>

);






Poster.protoTypes={
    id:PropTypes.number.isRequired,
    imageUrl:PropTypes.string,
    title:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired,
    year:PropTypes.string
}

export default Poster;