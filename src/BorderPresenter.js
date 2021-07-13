import React from "react"
import Writer from "./BorderContailer";
import Responsive from "./Components/conmon/Responsive";
import WriterActionButtons from "./WriterActionButtion";
import TagBox from "./Tagbox"

const WriterPage =()=>{
    return(
        <Responsive>
            <Writer/>
            <WriterActionButtons/>
            <TagBox/>
        </Responsive>
    )
}

export default WriterPage;