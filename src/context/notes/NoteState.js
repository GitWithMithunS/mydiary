import React from "react";
import notecontext from "./NoteContext";

const NoteState = (props) => {
    const state = {
        "name":"mithun",
        "class":"3bsec"
    }
    return(
        <notecontext.Provider value={state}>      
            {props.children}
        </notecontext.Provider>
    )
}

export default NoteState;