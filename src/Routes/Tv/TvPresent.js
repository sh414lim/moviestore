import React from "react"
import styled from "styled-components";
import Form from "../../Form/Form"
import Poster from "../../Form/Poster";
import Slider from "react-slick";

const Container =styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);
`;


const Header=styled.header`
    display: block;
    width: 100vw;
    height: 400px;

`
const IMG=styled.img`
  width: 300px;
height: 300px;
box-shadow: 5px 5px rgba(0,0,0,0.6), -1em 0 .4em rgba(0,0,0,0.5);
border-radius: 10%;
margin-top: 50px;
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
    centerPadding: '40px',

    // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    slidesToShow: 7,
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
  }
  const dramaPresenter=({loading,error,airingToday})=> loading ? null : (
<>

        <Header>
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
      {airingToday && airingToday.length > 0 && (
        <Form title="AiringToday">
          {airingToday.map(drama =>
           <Poster
           key={drama.id}
           id={drama.id}
           imageUrl={drama.poster_path}
           title={drama.original_name}
           rating={drama.vote_average}
           year={drama.first_air_date.substring(0, 4)}
           isdrama={true}
         />
         
       )}
        </Form>
)}
</Container>
</>
)




export default dramaPresenter;