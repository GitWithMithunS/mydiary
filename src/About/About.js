import React from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'

export default function About() {
  const a = useContext(notecontext)
  return (
    <>
      <div>All About Me</div>
      <div>
        this is about {a.name} of class {a.class}
      </div>
    </>
   
  )
}
