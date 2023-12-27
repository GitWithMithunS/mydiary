import React, { useState } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'

export default function AddNote(props) {
    const context = useContext(notecontext)
    const {addnote } = context

    const [note,setnote] = useState({title:"",desc:"",tag:""})

    
    const onchange = (e) => {
      setnote({...note , [e.target.name]: e.target.value})
      console.log("onchange is active")
      //(...) -> spread perator .basically here a new array is created with same info as of note and [e.target.name]: e.target.value this part of info is added or overwritten into the same array.
    }
    const handleclick = (e) => {
      e.preventDefault()      //preventDefault prevents the page from reloading or default form submission
      addnote(note.title , note.desc , note.tag)
      // console.log(note)
      setnote({title:"",desc:"",tag:""})
      props.showalert("Notes added successfully" , "warning")
  
    }

  return (
      <>
      
      <div className='container my-3'><h1>Add a Note</h1>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" onChange={onchange}  value={note.title} minLength={3} required/>
          </div>               {/* name attribute is useful in scenarios where you are handling multiple form inputs, and you want to organize the form data in a structured way, typically in a state object. */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripton</label>
            {/* <input type="text" className="form-control" id="description" name='desc' onChange={onchange} value={note.desc} minLength={5} required/>       */}
            <textarea className="form-control"  id="description" name='desc' onChange={onchange} value={note.desc} minLength={5} required ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">Tag</label>
            <input type="text" className="form-control" id="tag" name='tag' onChange={onchange} value={note.tag} />      
          </div>
          <button type="submit" disabled={note.title.length<3 || note.desc.length<5} className="btn btn-primary" onClick={handleclick}>Add Note</button>
        </form>
       
      </div>
    
    </>
  )
}

