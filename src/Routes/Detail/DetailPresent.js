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
  position: relative;
  height: 150vh;
  font-weight: 600;
`;

const Title=styled.span`

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 60px;
    padding-top: 30px;
`;

const ImageContainer=styled.div`
position: absolute;   //*** */중요
width: 30%;
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

const ListDiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50%;
margin-top: 150px;
margin-left: 600px;
border-bottom: 1px solid white;
font-size: 20px;
line-height: 30px;
`;

const CASH=styled.div`
    display: flex;
    align-items: center;
    margin-left: 600px;;
margin-top: 100px;
    font-size: 30px;
`;

const Popular=styled.div`
display: flex;
align-items: center;
margin-left: 600px;
margin-top: 5px;
`;

const RunTime=styled.div`
margin-left: 600px;
margin-top: 10px;
font-weight: 600;
`;

const Background=styled.div`
height: calc(100%- 200px);
position: absolute;
background-image: url(${props=>props.bgImage});
background-size: cover;
background-position: center center;
width: 100%;
height: 100%;
filter: blur(2px);
z-index: -1;
top: 0;
left:0;
opacity: 0.8;
`;












const DetailPresenter=({result,loading,error})=>loading ? null :(
    <>
<Container>
    <Background bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assests/noPosterSmall.PNG")}/>
    <Title>{result.original_title ? result.original_title : result.original_name }</Title>
        <ImageContainer bgImage={result.poster_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : require("../../assests/noPosterSmall.PNG")}/>
    <CASH>
        $:{result.id}
    </CASH>
    <RunTime>
    {result.runtime ? result.runtime : result.episode_run_time[0]} min
    </RunTime>
    <Popular>
        Popular:{result.popularity}
    </Popular>
    <Popular>
    {result.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? genre.name
                    : `${genre.name} / `
                )}
    </Popular>
    <Popular>
    </Popular>

    <ListDiv>
        {result.overview}
    </ListDiv>
</Container>
</>
)

export default DetailPresenter;