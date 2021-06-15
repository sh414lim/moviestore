import React from "react";
import { HashRouter as Router,Redirect,Route, Switch } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// import styled from "styled-components"
import Home from "../Home";
import Movie from "../Routes/Movie"
import Tv from "../Routes/Tv"
import SignUp from "../Routes/SignUp"
import Login from "../Routes/Login"
import Search from "../Routes/Search"
import Header from "./Header";
import Detail from "../Routes/Detail";
import LoginPages from "../Routes/pages/LoginPages";
import RegisterPage from "../Routes/pages/RegisterPage";
import WriterPages from "../Routes/pages/WriterPages";
import PostPage from "../Routes/pages/PostPage";
import PostListPage from "../Routes/pages/PostListPage";
import board from "../containers/Container"



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
        <Route path="/signup" component={SignUp}/>
        <Route path="/search" component={Search}/>
        <Route path="/login" component={LoginPages}/>
      <Route path="/register" component={RegisterPage}/>
      <Route path="/write" component={WriterPages}/>
      <Route path="/board" component={board}/>
      <Route path={["/@:username","/"]}exact component={PostListPage}/>
      <Route path={["/@:username","/postId"]} component={PostPage}/>
        <Redirect from="*" to="/"/>
        </Switch>
    </Router>
        </>
    )
}

