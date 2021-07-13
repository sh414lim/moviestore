import React from "react"
import Writer from "./BorderContailer";
import Responsive from "./Components/conmon/Responsive";
import WriterActionButtons from "./WriterActionButtion";
import TagBox from "./Tagbox"
import EditorContainer from "./container/EditorContainer";

const WriterPage =()=>{
    return(
        <Responsive>
            <Writer/>
            <WriterActionButtons/>
            <EditorContainer/>
            <TagBox/>
        </Responsive>
    )
}

export default WriterPage;