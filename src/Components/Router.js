import React from "react";
import { HashRouter as Router,Route } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import styled from "styled-components"
import Home from "../Home";
import Movie from "../Routes/Movie"
import Tv from "../Routes/Tv"
import SignUp from "../Routes/SignUp"
import Login from "../Routes/Login"
import Search from "../Routes/Search"
import Header from "./Header";



export default ({location})=>{
    return(
    <>
    <Router>
        <Header/>
        <Route path="/" exact component={Home}/>
        <Route path="/movie" component={Movie}/>
        <Route path="/tv" component={Tv}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={Search}/>
    </Router>
        </>
    )
}

