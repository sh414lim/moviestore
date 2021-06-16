import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import "./api";

//리덕스 스토어 생성
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./modules"

const store=createStore(rootReducer, composeWithDevTools());



ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);

