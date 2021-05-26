import React from "react";
import Slider from "react-slick";
import styled from "styled-components";


const Header=styled.header`
  display: block;
    width: 90vw;
    margin-left: 80px;
    padding: 20px;
`;

const IMG =styled.img`
width: 280px;
height: 280px;
box-shadow: 10px 5px 5px rgba(0,0,0,0.8);
border-radius: 10%;
border-bottom: 3px solid black;
  &:hover{
    width: 350px;
    height: 350px;
  }
`;

const H1 =styled.h1`
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  opacity: 0.5;
  margin-bottom: 100px;
  cursor:pointer;
  &:hover{
    color:red;
    opacity:0.5 ;
    transition: color 0.5s ease-in-out;
  }
`;

const SPAN=styled.span`
  opacity: 0.8;
  font-weight: 500;
  &:hover{
    color:skyblue;
    transition: color 0.5s ease-in-out;
  }
`;


const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none; // 슬라이드 클릭시 파란선을 제거하기 위해서 작성
    }
    .slick-dots li{
      color: red;
    }
`;
export default function Home(){
  const settings={
    dots: false,
    centerMode: true,
    centerPadding: '10px',

    // 한 번에 스크롤 몇 개 보여줄 건가(대개 1을 사용함)
    slidesToShow: 5,
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

  return (
<>
<H1>Welcome My Movie <SPAN>|SHOP|</SPAN></H1>
  <Header>
    <StyledSlider {...settings}>
      <div><IMG src={require("./images/2.jpg").default}/></div>
      <div> <IMG src={require("./images/14.jpg").default}/></div>
      <div> <IMG src={require("./images/3.jpg").default}/></div>
      <div> <IMG src={require("./images/4.jpg").default}/></div>
      <div> <IMG src={require("./images/12.jpg").default}/></div>
      <div> <IMG src={require("./images/5.jpg").default}/></div>
      <div> <IMG src={require("./images/11.jpg").default}/></div>
      <div> <IMG src={require("./images/6.jpg").default}/></div>
      <div> <IMG src={require("./images/16.jpg").default}/></div>
      <div> <IMG src={require("./images/13.jpg").default}/></div>
      <div> <IMG src={require("./images/7.jpg").default}/></div>
      <div> <IMG src={require("./images/17.jpg").default}/></div>
      <div> <IMG src={require("./images/8.jpg").default}/></div>
      <div> <IMG src={require("./images/10.jpg").default}/></div>
      <div> <IMG src={require("./images/9.jpg").default}/></div>
      <div> <IMG src={require("./images/15.jpg").default}/></div>
    </StyledSlider>
    </Header>
  </>  
  );
}