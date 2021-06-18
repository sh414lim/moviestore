import React, { useReducer } from "react";

const Reducer =(state,action)=>{
    switch(action.type){
        case "PLUS":
        return({value:state.value + 1})
        case "MINUS":
        return({value:state.value -1})
        default:
            return state;
    }
    
}

const Counter =()=>{

    const[state,dispatch]=useReducer(Reducer,{value:0})

    return(
            <>
            <p>{state.value}</p>
        
            <button onClick={()=>dispatch({type:"PLUS"})}>+1</button>
            <button onClick={()=>dispatch({type:"MINUS"})}>-1</button>
            
            </>
        )
}

export default Counter;