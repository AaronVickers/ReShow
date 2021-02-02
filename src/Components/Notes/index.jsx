import React, { useRef } from "react"

import { useNotes, NotesProvider } from "../../Contexts/Notes"

export const NewNote = () => {
  const noteRef = useRef()

  const { newNote } = useNotes()

  const newNoteSubmit = (event) => {
    event.preventDefault()

    const note = newNote(noteRef.current.value)

    noteRef.current.value = ""

    return note
  }

  return (
    <form className="new-note" onSubmit={newNoteSubmit}>
      <input className="new-note-input" placeholder="Note content" ref={noteRef} required/>
      
      <button className="btn-new-note" type="submit">Add</button>
    </form>
  )
}

export const Note = () => {
  const { updateNote, deleteNote } = useNotes()

  return (
    <div className="note">
      
    </div>
  )
}

export const NotesList = () => {
  const { getNotes } = useNotes()

  getNotes()

  return (
    <div className="notes-list">

    </div>
  )
}

export const NotesPage = () => {
  return (
    <NotesProvider>
      <div className="notes-page">
        <NewNote />
        <NotesList />
      </div>
    </NotesProvider>
  )
}