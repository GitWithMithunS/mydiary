import React, { useState } from "react";
import notecontext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:4000"
  const notesInitial = []
  const [notes, setnotes] = useState(notesInitial)



  //GET/FETCH ALL NOTES
  const getallnotes = async () => {
    // console.log(`getting all  note `)
    const response = await fetch(`${host}/api/note/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
    });
    //console.log(response) //-->response still hold a promise which should be resolvedd to see itsoutput. 
    const json = await response.json()
    // console.log("from fetch notes json contains",json)
    setnotes(json)
  }




  //ADD A NOTE
  const addnote = async (title, description, tag) => {
    // console.log(`adding a new note `)

    // todo : api call
    const response = await fetch(`${host}/api/note/addnotes`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",        //use   authTokenand not auth-token
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    const addingnote = await response.json(); // parses JSON response into native JavaScript objects
    // console.log("addingnote contains",addingnote)
    setnotes(notes.concat(addingnote))       // setNotes([...notes, newNote]);  here i am using (...)spread operator to make a new array containing old and newnote thus not mutating(or changing,interfering) the old note which may be used to re-render(or access) when required
    //notes.push(note) can not be used becoz :- concat returns an arraywhereas push updates an array
  }





  //DELETE A NOTE
  const deletenote = async (id) => {
    // console.log("deleting note with ", id)

    // todo : api call
    await fetch(`${host}/api/note/deletnote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
    });
    // const json = response.json();
    // console.log("response fromm delete frontend",json)
    const newnote = notes.filter((note) => { return note._id !== id })
    setnotes(newnote)
    
  }




  //EDIT A NOTE
  const editnote = async (id, title, description, tag) => {
    // console.log("edit note is in progress")

    //api calls
    // const response = await fetch(`${host}/api/note/updatenote/${id}`, {
    await fetch(`${host}/api/note/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "Authorization": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });
    // const json = await response.json(); // parses JSON response into native JavaScript objects
    // console.log("json contains" + json)

    let newnotes = JSON.parse(JSON.stringify(notes))  //stringify -> converrts javascript object to json-formatted string.  //json.parsed -> converts json string to a javascript object.
    //logic to edit in client
    for (let index = 0; index < newnotes.length; index++) {
      const element = newnotes[index];
      if (element._id === id) {
        newnotes[index].title = title
        newnotes[index].description = description
        newnotes[index].tag = tag
        break
      }
      // console.log(element)
    }
    setnotes(newnotes)
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
