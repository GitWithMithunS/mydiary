import React from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const NotesItem = (props) => {
    const context = useContext(notecontext)
    const {deletenote  } = context
    const { note , updatenote } = props
    // console.log("this is update from notesitem" ,updatenote)
    return (
        <>
            <div className='col-md-6 my-4'>
             
                <div className="card my-3" >

                        <div className="card-body align-item-center">
                            <h5 className="card-title">{note.title}</h5>
                            <p className="card-text">{note.description}</p>
                            {/* <a href="/" className="btn btn-primary">Go somewhere</a> */}
                            <div className="d-flex justify-content-end ">
                            <FontAwesomeIcon className="icon  mx-4" fade  icon={faTrash} onClick={() => {deletenote(note._id)}} style={{color: "#16cdda",}} />
                            <FontAwesomeIcon className="icon " data-bs-toggle="modal" data-bs-target="#exampleModal" bounce icon={faPenToSquare} onClick={()=> {updatenote(note)}} style={{color: "#16cdda",}} />
                            </div>
                        </div>                                                                     
                </div>
            </div>
        </>
    )
}

export default NotesItem