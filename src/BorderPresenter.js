import React from "react"
import Responsive from "./Components/conmon/Responsive";
import WriterActionButtons from "./WriterActionButtion";
import TagBox from "./Tagbox"
import EditorContainer from "./container/EditorContainer";

const WriterPage =()=>{
    return(
        <Responsive>
          <EditorContainer/>
            <WriterActionButtons/>
            <TagBox/>
        </Responsive>
    )
}

export default WriterPage;