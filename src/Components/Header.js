import React from "react";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

const Head = styled.header`
   
`;

const Title =styled.h1`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 40px;
    font-weight: 100;
        color:${props=>(props.current ? "pink" : "black")};
    transition: color 0.5s ease-in-out;
    &:hover{
        color:pink;
    }
`;

const Ul=styled.ul`
   display: flex;
   margin-top: 13px;
justify-content: space-around;
width: 60%;
padding-bottom: 25px;
border-bottom: 1px solid rgba(0,0,0,0.1);
`;

const Li=styled.li`
display: flex;
    font-size: 20px;
    padding-top: 12px;
    color:${props=>(props.current ? "pink" : "black")};
    transition: color 0.5s ease-in-out;
    &:hover{
        color:pink;
    }
`;

const LINK=styled(Link)`

`;


function Header({location:{pathname}}){
return(
    <>

    <Head>
        <Ul>
        <Title current={pathname === "/"}><LINK to="/">|SHOP|</LINK></Title>
            <Li current={pathname === "/movie"}>
                <LINK to="/movie" currnet={pathname === "/movie"}>Movie</LINK>
            </Li>

            <Li current={pathname === "/tv"}>
                <LINK to="/tv" currnet={pathname === "/tv"}>Drama</LINK>
            </Li>
            <Li current={pathname === "/search"}>
                <LINK to="/search" currnet={pathname === "/search"}>Search</LINK>
            </Li>

            <Li current={pathname === "/login"}>
                <LINK to="/login" currnet={pathname === "/login"}>Login</LINK>
            </Li>
            <Li current={pathname === "/register"}>
                <LINK to="/register" currnet={pathname === "/register"}>register</LINK>
            </Li>
        </Ul>
    </Head>

    </>
)
}

export default withRouter(Header);


