//리덕스 모듈
//Ducks 패턴 
//액션 생성함수 액션함수 리듀서 를 모두 하나의 파일에서 관리    
import {createAction,handleActions} from "redux-actions";
import product from "immer";


const CHANGE_FIELD="";

const SAMPLE_ACTION="null";



export const sampleAction=createAction(SAMPLE_ACTION);

const initialState={};

const auth=handleActions(
    {
        [SAMPLE_ACTION]:(state,action) =>state,
    },
    initialState,
    );

export default auth;
