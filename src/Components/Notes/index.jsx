import React, { useEffect, useRef, useState } from "react"

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

export const Note = (props) => {
  const { updateNote, deleteNote } = useNotes()

  const note = props.note

  const updateNoteClick = () => {
    updateNote(note.id, "Updated content")
  }

  const deleteNoteClick = () => {
    deleteNote(note.id)
  }

  return (
    <li className="note">
      <p className="note-content">{note.content}</p>
      
      <button className="btn-update-note" onClick={updateNoteClick}>Update</button>
      <button className="btn-delete-note" onClick={deleteNoteClick}>Delete</button>
    </li>
  )
}

export const NotesList = () => {
  const { getNotes } = useNotes()

  const [notes, setNotes] = useState([])
  
  useEffect(() => {
    getNotes().then((notesObject) => {
      let newNotes = []
  
      for (let id in notesObject) {
        notesObject[id]["id"] = id
  
        newNotes.push(notesObject[id])
      }
  
      setNotes(newNotes)
    })
  }, [getNotes])

  return (
    <div className="notes-list">
      <ul>
        {
          notes.map((note) => {
            return <Note note={note} key={note.id} />
          })
        }
      </ul>
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