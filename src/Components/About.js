import React, { useEffect } from 'react'
import { useContext } from 'react'
import notecontext from '../context/notes/NoteContext'

export default function About() {
  const a = useContext(notecontext)
  useEffect(() => {
    a.update()
    // eslint-disable-next-line
  },[])
  return (
    <>
      <div>All About Me</div>
      <div>
        <p>this is about {a.state.name} of class {a.state.class}</p>
      </div>
    </>
   
  )
}
