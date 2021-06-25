//첫번째 리덕스 모듈
//Ducks 패턴(액션타입,액션생성함수,리듀가를 하나의 파일에서관리)

import{createAction,handleActions} from "redux-actions";
import produce  from "immer";


const  CHANGE_FIELD='auth/CHANGE_FIELD';
const INITIALIZE_FORM='auth/INITIALIZE_FORM';


export const changeField =createAction(
    CHANGE_FIELD,
    ({form,key,value})=>({
        form,//register
        key,//username,password
        value//바꾸려는 값
    }),
);

export const initializeForm=createAction(INITIALIZE_FORM,form=>form); //register /login


const  initialState ={
    register:{
        username:'',
        password:'',
        passwordonfirm:'',
    },
    login:{
        username:'',
        password:'',
    },
};

const auth =handleActions(
    {
        [CHANGE_FIELD]:(state,{payload:{form,key,value}})=>
        produce(state,draft=>{
            draft[form][key]=value //예: state.register.username 을 바꾼다..
        }),
        [INITIALIZE_FORM]:(state,{payload:form})=>({
            ...state,
            [form]:initializeForm[form],
        }),
    },
    initialState
)


export default auth;