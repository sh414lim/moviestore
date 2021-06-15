import React from "react"
import Router from "./Router"
import GlobalStyle from "./GlobalStyle";

  class App extends React.Component{
    render(){
      return(
        <>
        <Router/>
        <GlobalStyle/>
        </>
      )
    }
  }

  export default App;