import React, { useState } from "react";
import EvenPractice from "./EvenPractice"
import Test from "./test"

const Counter =()=>{
    const[name,setName]=useState("")
    return(
        <>
        <div>
            <button
            onClick={()=>{
                setName(!name)
            }}>{name ? '숨기기':'보이기'}</button>
            {name && <Test/>}
        </div>
        <EvenPractice/>
        </>
    )
}

export default Counter;