import React, { useState } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'

export default function AddNote() {
    const context = useContext(notecontext)
    const {addnote } = context

    const [note,setnote] = useState({title:"",desc:"",tag:""})

    
    const onchange = (e) => {
      setnote({...note , [e.target.name]: e.target.value})
      //(...) -> spread perator .basically here a new array is created with same info as of note and [e.target.name]: e.target.value this part of info is added or overwritten into the same array.
    }
    const handleclick = (e) => {
      e.preventDefault()      //preventDefault prevents the page from reloading or default form submission
      addnote(note)
    }

  return (
      <>
      
      <div className='container my-3'><h1>Add a Note</h1>
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title"  name="title" aria-describedby="emailHelp" onChange={onchange} />
          </div>               {/* name attribute is useful in scenarios where you are handling multiple form inputs, and you want to organize the form data in a structured way, typically in a state object. */}
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Descripton</label>
            <input type="text" className="form-control" id="description" name='description' onChange={onchange}/>      
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
        </form>
       
      </div>
    
    </>
  )
}
