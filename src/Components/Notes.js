import React, { useEffect, useRef } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'
import NotesItem from './NotesItem'
import AddNote from './AddNote'

export default function Notes() {
    const context = useContext(notecontext)
    const { notes, getallnotes } = context    //destructuring

    useEffect(() => {
        getallnotes()
        // eslint-disable-next-line
    }, [])

    const ref = useRef(null)
    const updateNote = (note) => {
        ref.current.click()           //.click() here is to click on point were the ref is pointing currently.
    }

    return (
        <>
            <h1>Your Notes</h1>
            <AddNote />

            {/* <button ref={ref}  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                 Launch demo modal
            </button>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <button ref={ref} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-3">
                {notes.map((element) => {
                    return <NotesItem keys={element._id} updatenote={updateNote} note={element} />
                })}
            </div>
        </>
    )
}
