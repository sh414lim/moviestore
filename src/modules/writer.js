import { createAction,handleActions } from "redux-actions";


const INITIALIZE='write/INITIALIZE' // 모든 내용 초기화
const CHAGE_FIELD='write/CHAGE_FIELD' ; //특정 KEY 값 바꾸기

export const initialize=createAction(INITIALIZE);
export const chageField=createAction(CHAGE_FIELD,({key,value})=>({
    key,
    value,
}));

const initialState={
    title:'',
    body:'',
    tags:[],
};


const write=handleActions(
    {
        [INITIALIZE]:state=>initialState, //initialState 를 넣으면 초기 상태로 바뀐다
        [CHAGE_FIELD]:(state,{payload:{key,value}})=>({
            ...state,
            [key]:value, // 특정 key 값을 업데이트
        }),
    },
    initialState,
);

export default write;

