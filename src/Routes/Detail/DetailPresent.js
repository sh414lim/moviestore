import React from "react";
import styled from "styled-components";


const Container =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  height:110vh ;
  display: block;
  margin-left: 200px;
`;

const ImageContainer=styled.div`
position: absolute;   //*** */중요
width: 20%;
height: 70%;
margin-top: 100px;
margin-left: 100px;
background-image: url(${props=>props.bgImage});
background-position: center center;
background-size: cover;
z-index: 1;
border-radius: 20px;
&:hover{
    opacity: 0.8;
}
`;

const ListDiv=styled.div``;

const List=styled.span`
display: flex;
justify-content: center;
align-items: center;
`;

const Title=styled.span`

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    padding-top: 30px;
`;

const DetailPresenter=({result,loading,error})=>loading ? null :(
<Container>
    <Title>{result.original_title ? result.original_title : result.original_name }</Title>
<ImageContainer bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assests/noPosterSmall.PNG")}/> 
<ListDiv>
<List>
</List>

</ListDiv>

</Container>

)

export default DetailPresenter;