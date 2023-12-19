import React, { useState } from "react";
import notecontext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000"
  const notesInitial = [ ]
  const [notes, setnotes] = useState(notesInitial)



  //GET/FETCH ALL NOTES
  const getallnotes = async () => {
    // console.log(`getting all  note `)
    const response = await fetch(`${host}/api/note/fetchallnotes`,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ODA5MWU2M2IyNGZiNjkyM2UwNmQ3NSIsImlhdCI6MTcwMjkyNDc5NX0.cGADZMuhO5xXKmsRU2ABkk5JqU8oM1IIPeXC9UYo4p4"
      },
    });
    console.log(response)
    const json = await response.json()
    console.log(json)
  }




  //ADD A NOTE
  const addnote = async (title, description, tag) => {
    console.log(`adding a new note `)

    // todo : api call
    const response = await fetch(`${host}/api/note/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",        //use   authTokenand not auth-token
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2IwZDBiOTMxNGRkOTE1ZjRlODhlNiIsImlhdCI6MTcwMjU2MzA5NH0.LmXQ1RWM4kBV0fGv7zQDO2iCI3yGIts23NlrxHE7F24"
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    // const json = response.json(); // parses JSON response into native JavaScript objects
    // console.log("json contains",json)

    const note = {
      "_id": "vvf657cssb0db89314dyut15f43e88f4",
      "user": "657b0d0b9314fcdd915f4e88e6",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-12-14T14:14:16.926Z",
      "__v": 0
    }
    setnotes(notes.concat(note))       // setNotes([...notes, newNote]);  here i am using (...)spread operator to make a new array containing old and newnote thus not mutating(or changing,interfering) the old note which may be used to re-render(or access) when required
    //notes.push(note) can not be used becoz :- concat returns an arraywhereas push updates an array
  }





  //DELETE A NOTE
  const deletenote = async (id) => {
    console.log("deleteing note with ", id)

    // todo : api call
    const response = await fetch(`${host}/api/note/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      // mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2IwZDBiOTMxNGRkOTE1ZjRlODhlNiIsImlhdCI6MTcwMjU2MzA5NH0.LmXQ1RWM4kBV0fGv7zQDO2iCI3yGIts23NlrxHE7F24"
      },
    });
    const json = response.json();
    console.log(json)
    const newnote = notes.filter((note) => { return note._id !== id })
    setnotes(newnote)
  }




  //EDIT A NOTE
  const editnote = async (id, title, description, tag) => {
    console.log("edit note is in progress")

    //api calls
    const response = await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "authToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2IwZDBiOTMxNGRkOTE1ZjRlODhlNiIsImlhdCI6MTcwMjU2MzA5NH0.LmXQ1RWM4kBV0fGv7zQDO2iCI3yGIts23NlrxHE7F24"
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects
    console.log("json contains" + json)

    //logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title
        element.description = description
        element.tag = tag
      }
    }
    // setnotes()
  }



  return (
    <notecontext.Provider value={{ notes, addnote, deletenote, editnote, getallnotes }}>
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
