import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import "./api";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./modules";

//리덕스 스토어 생성
const store=createStore(rootReducer,composeWithDevTools());


//Provider 을 통해 리액트와 리덕스 연결
ReactDOM.render(
<Provider store={store}>
<App />,
</Provider>,  
  document.getElementById('root')
);

