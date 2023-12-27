import React, { useEffect, useRef,useState } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'
import NotesItem from './NotesItem'
import AddNote from './AddNote'
import {  useNavigate } from 'react-router-dom'


export default function Notes(props) {
    const context = useContext(notecontext)
    const navigate = useNavigate()
    const { notes, getallnotes,editnote } = context    //destructuring

    const [note,setnote] = useState({_id:"" ,title:"",description:"",tag:""})
   
    useEffect(() => {
        if(localStorage.getItem('token')){
            getallnotes()
            console.log("token")
        }
        else{
            navigate('/login')
            props.showalert('login to your account to get your notes','info')
        }
        // eslint-disable-next-line
    }, [])

    const refopen = useRef(null)
    const refclose = useRef(null)

    const updateNote = (currentNote) => {
        refopen.current.click()           //.click() here is to click on point were the ref is pointing currently.
        setnote(currentNote)
    }
    
    const onchange = (e) => {
        setnote({...note , [e.target.name]: e.target.value})
        
    }
    const handleclicked = (e) => {
        console.log("updating the note..",note)
        e.preventDefault() 
        editnote(note._id,note.title,note.description,note.tag)
        refclose.current.click()   
        props.showalert("Notes updated successfully" , "warning")

      }
  


    return (
        <>
            <h1 className="text-center my-5" style={{cursor:"-webkit-grab"}}>MyDiary - your info is secure in the cloud</h1>
            <AddNote showalert={props.showalert}/>

            <button ref={refopen} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">


                            <div className='container my-3'><h1>Add a Note</h1>
                                <form className='my-3'>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Title</label>
                                        <input type="text" className="form-control" id="title" name="title" value={note.title} aria-describedby="emailHelp" onChange={onchange}  minLength={3}/>
                                    </div>               {/* name attribute is useful in scenarios where you are handling multiple form inputs, and you want to organize the form data in a structured way, typically in a state object. */}
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Descripton</label>
                                        {/* <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={onchange} minLength={5} required/> */}
                                        <textarea className="form-control" id="description" name='description' value={note.description} onChange={onchange} minLength={5} required></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="tag" className="form-label">Tag</label>
                                        <input type="text" className="form-control" id="tag" name='tag' value={note.tag} onChange={onchange} />
                                    </div>
                                </form>
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button"  ref={refclose} className="btn btn-secondary d-none" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={note.title.length<3 || note.description.length<5} className="btn btn-primary" onClick={handleclicked}>Update Note</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row my-3">
                <h2>Your Notes</h2>
                <div className='container mx-2'>
                {notes.length === 0 && 'No notes to display'}
                </div>
                {notes.map((element) => {
                    return <NotesItem keys={element._id} updatenote={updateNote} note={element} showalert={props.showalert} />
                })}
            </div>
        </>
    )
}
