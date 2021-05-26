import React from "react";
import styled from "styled-components";
import {Link, withRouter} from "react-router-dom";

const Head = styled.header`
    height: 28vh;
    width: 100vw;
    display:grid;
    gap:10px;
`;

const Title =styled.h1`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    opacity: 0.4;
        color:red;

`;

const Ul=styled.ul`
    display: flex;
    justify-content: space-around;
    font-size: 20px;
`;

const Li=styled.li`
    opacity:0.5;
    &:hover{
        color:red;
        transition: color 0.6s ease-in-out;
    }
`;

const LINK=styled(Link)`
text-decoration: none;
color:inherit;
`;


function Header({location:{pathname}}){
    console.log(pathname)
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


