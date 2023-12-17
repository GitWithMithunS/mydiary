import React from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'
import NotesItem from './NotesItem'
import AddNote from './AddNote'

export default function Notes() {
    const context = useContext(notecontext)
    const { notes, addnote } = context    //destructuring
    return (
        <>
            <h1>Your Notes</h1>
            <AddNote/>
            <div className="row my-3">
                {notes.map((element) => {
                    return <NotesItem keys={element._id} note={element} />
                })}
            </div>

        </>

    )
}
