import React, { useState } from "react";
import notecontext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "3qr657b0ddsvd5c93t14dd915f4e88eb",
          "user": "657b0d0b9314dd915f4e88e6",
          "title": "this is title",
          "description": "hello welcome to mydiary",
          "tag": "MYDIAry",
          "date": "2023-12-14T14:12:44.378Z",
          "__v": 0
        },
        {
          "_id": "657b0da69czdrj314dd915f4e88f1",
          "user": "657b0d0b9314dd915f4e88e6",
          "title": "this is title----2",
          "description": "hello welcome to mydiary----2",
          "tag": "MYDIAry----2",
          "date": "2023-12-14T14:13:58.121Z",
          "__v": 0
        },
        {
          "_id": "657bSD0dby8931DS4dd915f4e88f4nd",
          "user": "657b0d0b9314dd915f4e88e6",
          "title": "this is title----3",
          "description": "hello welcome to mydiary----3",
          "tag": "MYDIAry----3",
          "date": "2023-12-14T14:14:16.926Z",
          "__v": 0
        },
        {
            "_id": "657bvvfvfvda0d5cuyr9314dd915f4e88ebdzb",
            "user": "657b0d0b9314dd915f4e88e6",
            "title": "this is title",
            "description": "hello welcome to mydiary",
            "tag": "MYDIAry",
            "date": "2023-12-14T14:12:44.378Z",
            "__v": 0
          },
          {
            "_id": "65vdffv7b0da69utr31udd915f4e88f1Btw",
            "user": "657b0d0b9314dd915f4e88e6",
            "title": "this is title----2",
            "description": "hello welcome to mydiary----2",
            "tag": "MYDIAry----2",
            "date": "2023-12-14T14:13:58.121Z",
            "__v": 0
          },
          {
            "_id": "vvf657b0db89314dyut15f43e88f4",
            "user": "657b0d0b9314dd915f4e88e6",
            "title": "this is title----3",
            "description": "hello welcome to mydiary----3",
            "tag": "MYDIAry----3",
            "date": "2023-12-14T14:14:16.926Z",
            "__v": 0
          }
      ]
      const [notes,setnotes] = useState(notesInitial)

      //add note
      const addnote = (title,decription,tag) => {

        console.log(`adding a new note `)
        
        // todo : api call
        const note = {"_id": "vvf657cssb0db89314dyut15f43e88f4",
        "user": "657b0d0b9314fcdd915f4e88e6",
        "title": "this is title----3",
        "description": "hello welcome to mydiary----3",
        "tag": "MYDIAry----3",
        "date": "2023-12-14T14:14:16.926Z",
        "__v": 0}
        setnotes(notes.concat(note))       // setNotes([...notes, newNote]);  here i am using (...)spread operator to make a new array containing old and newnote thus not mutating(or changing,interfering) the old note which may be used to re-render(or access) when required
                                      //notes.push(note) can not be used becoz :- concat returns an arraywhereas push updates an array
      }
      //delete note


      //edit note



    return(
        <notecontext.Provider value={{notes , addnote}}>      
            {props.children}
        </notecontext.Provider>
    )
}

export default NoteState;








// example:-useage of context api
// const NoteState = (props) => {
//     const s1 = {
//         "name":"mithun",
//         "class":"3bsec"
//     }
//     const [state,setstate] = useState(s1)
//     const update = () => {
//         setTimeout(() => {
//             setstate({
//                 "name":"chakravarthi",
//                 "class":"2csec"
//             })
//         },5000)
//     }
//     return(
//         <notecontext.Provider value={{state:state,update:update}}>      {/*value={{state,update}} it can be writtten in both this ways  */} 
//             {props.children}
//         </notecontext.Provider>
//     )
// }

// export default NoteState;
