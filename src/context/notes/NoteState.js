import React, { useState } from "react";
import notecontext from "./NoteContext";

const NoteState = (props) => {
    const s1 = {
        "name":"mithun",
        "class":"3bsec"
    }
    const [state,setstate] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setstate({
                "name":"chakravarthi",
                "class":"2csec"
            })
        },5000)
    }
    return(
        <notecontext.Provider value={{state:state,update:update}}>      {/*value={{state,update}} it can be writtten in both this ways  */} 
            {props.children}
        </notecontext.Provider>
    )
}

export default NoteState;
