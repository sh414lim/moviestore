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
        color:black;

`;

const Ul=styled.ul`
   display: flex;
   margin-top: 13px;
justify-content: space-around;
width: 60%;

`;

const Li=styled.li`
display: flex;
    font-size: 20px;
    padding-top: 12px;
`;

const LINK=styled(Link)`

`;


function Header({location:{pathname}}){
return(
    <>

    <Head>
        <Ul>
        <Title><LINK to="/">|SHOP|</LINK></Title>
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


