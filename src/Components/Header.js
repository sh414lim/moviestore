import React from "react";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

const Head = styled.header`
    height: 28vh;
    width: 100vw;
    height: 200px;
    display:grid;
    gap:10px;
    color: white;
    &:hover{
        opacity:0.3;
        background-color: red;
        transition: background-color 0.6s  ease-in-out  ;
    }
    margin-top: 50px;
    margin-bottom: 50px;
`;

const Title =styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    font-weight: 100;
        color:black;

`;

const Ul=styled.ul`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
`;

const Li=styled.li`
    &:hover{
        color:black;
        transition: color 0.6s ease-in-out;
    }
`;

const LINK=styled(Link)`
text-decoration: none;
color:inherit;
`;


function Header({location:{pathname}}){
return(
    <>
    <Head>
               <Title><LINK to="/">|SHOP|</LINK></Title>
        <Ul>
            <Li>
                <LINK to="/movie" currnet={pathname === "/movie"}>Movie</LINK>
            </Li>

            <Li>
                <LINK to="/tv" currnet={pathname === "/tv"}>Drama</LINK>
            </Li>
            <Li>
                <LINK to="/search" currnet={pathname === "/search"}>Search</LINK>
            </Li>

            <Li>
                <LINK to="/login" currnet={pathname === "/login"}>Login</LINK>
            </Li>
        </Ul>
    </Head>
    </>
)
}

export default withRouter(Header);


