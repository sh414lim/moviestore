import React from "react";
import { HashRouter as Router,Redirect,Route, Switch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import styled from "styled-components"
import Home from "../Home";
import Movie from "../Routes/Movie"
import Tv from "../Routes/Tv"
import register from "../pages/RegisterPage";
import Login from "../pages/LoginPages";
import Search from "../Routes/Search"
import Header from "./Header";
import Detail from "../Routes/Detail";



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
        <Route path="/register" component={register}/>
        <Route path="/login" component={Login}/>
        <Route path="/search" component={Search}/>
        <Redirect from="*" to="/"/>
        </Switch>
    </Router>
        </>
    )
}

