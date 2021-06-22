import React from "react";
import { HashRouter as Router,Redirect,Route, Switch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import styled from "styled-components"
import Home from "../Home";
import Movie from "../Routes/Movie"
import Tv from "../Routes/Tv"
import Search from "../Routes/Search"
import Header from "./Header";
import Detail from "../Routes/Detail";
import Login from "../Routes/Login";
import SignUp from "../Routes/SignUp";


export default ()=>{
    return(
    <>
    <Router>
        <Header/>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/movie" exact component={Movie}/>
        <Route path="/movie/:id" component={Detail}/>
        <Route path="/tv" exact component={Tv}/>
        <Route path="/tv/:id" component={Detail}/>
        <Route path="/search" component={Search}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={SignUp}/>
        <Redirect from="*" to="/"/>
        </Switch>
    </Router>
        </>
    )
}

