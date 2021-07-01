import React from "react"
import styled from "styled-components";
import Form from "../../Form/Form"
import Poster from "../../Form/Poster";
import Slider from "react-slick";

const Container =styled.div`
`;


const Header=styled.header`
    width: 100vw;
    height: 600px;
margin-bottom: 80px;

    

`
const IMG=styled.img`
width: 500px;
height: 500px;
box-shadow: 10px 5px 5px rgba(0,0,0,0.8);
border-radius: 10%;

`;

const H1=styled.h1`
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        margin-bottom: 30px;
        font-weight: 600;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    }
    .slick-dots li{
      color: red;
    }
`;
const settings={
    dots: false,
    centerMode: true,
    centerPadding: '10px',

    // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    slidesToShow: 3,
     // 자동 넘김을 할 것인가. 한다면 스피드는?
    autoplay: true,
    autoplaySpeed: 3000,
    // 화면에 올리면 슬라이더가 자동으로 넘어가지 않음
    pauseOnHover: true,
    // fade: true, 줌아웃
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
};
  const MoviePresenter=({loading,error,nowplaying,toprated,upcoming,popular})=> loading ? null : (
<>
<Header>
    <H1>Best Movie</H1>
        <StyledSlider {...settings}>
        <div><IMG src={require("../../images/2.jpg").default}/></div>
        <div><IMG src={require("../../images/2.jpg").default}/></div>
      <div> <IMG src={require("../../images/5.jpg").default}/></div>
      <div> <IMG src={require("../../images/3.jpg").default}/></div>
      <div> <IMG src={require("../../images/4.jpg").default}/></div>
      <div> <IMG src={require("../../images/9.jpg").default}/></div>
      <div> <IMG src={require("../../images/7.jpg").default}/></div>
      <div> <IMG src={require("../../images/6.jpg").default}/></div>
      <div> <IMG src={require("../../images/5.jpg").default}/></div>
            </StyledSlider>
        </Header>
    
    <Container> 
      {nowplaying && nowplaying.length > 0 && (
        <Form title="Now Playing">
          {nowplaying.map(movie =>
           <Poster
           key={movie.id}
           id={movie.id}
           imageUrl={movie.poster_path}
           title={movie.original_title}
           rating={movie.vote_average}
           year={movie.release_date.substring(0, 4)}
           isMovie={true}
         />
         
       )}
        </Form>
        
        
)}
</Container>
<Container> 
      {toprated && toprated.length > 0 && (
        <Form title="Top Rated">
          {toprated.map(movie =>
           <Poster
           key={movie.id}
           id={movie.id}
           imageUrl={movie.poster_path}
           title={movie.original_title}
           rating={movie.vote_average}
           year={movie.release_date.substring(0, 4)}
           isMovie={true}
         />
         
       )}
        </Form>
        
        
)}
</Container>
<Container> 
      {upcoming && upcoming.length > 0 && (
        <Form title="UPCOMING">
          {upcoming.map(movie =>
           <Poster
           key={movie.id}
           id={movie.id}
           imageUrl={movie.poster_path}
           title={movie.original_title}
           rating={movie.vote_average}
           year={movie.release_date.substring(0, 4)}
           isMovie={true}
         />
         
       )}
        </Form>
        
        
)}
</Container>
<Container> 
      {popular && popular.length > 0 && (
        <Form title="Top Popular">
          {popular.map(movie =>
           <Poster
           key={movie.id}
           id={movie.id}
           imageUrl={movie.poster_path}
           title={movie.original_title}
           rating={movie.vote_average}
           year={movie.release_date}
           isMovie={true}
         />
         
       )}
        </Form>
        
        
)}
</Container>

</>
)




export default MoviePresenter;