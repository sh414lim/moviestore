import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import "./api";
import {Provider} from "react-redux";
import {createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from "./modules";
import createSaGaMiddleware from "redux-saga";
import  {rootSaga} from "./modules";




sagaMiddleware.run(rootSaga);
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('root')); 

