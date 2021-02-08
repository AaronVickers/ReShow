import React, { useEffect, useRef, useState } from "react"

import { useNotes, NotesProvider } from "../../Contexts/Notes"

export const NewNote = () => {
  const { newNote } = useNotes()
  
  const noteRef = useRef()

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

  const noteUpdateRef = useRef()

  const updateNoteSubmit = (event) => {
    event.preventDefault()

    updateNote(note.id, noteUpdateRef.current.value)

    noteUpdateRef.current.value = ""
  }

  const deleteNoteSubmit = (event) => {
    event.preventDefault()
    
    deleteNote(note.id)
  }

  return (
    <li className="note">
      <p className="note-content">{note.content}</p>
      
      <form className="update-note" onSubmit={updateNoteSubmit}>
        <input className="update-note-input" placeholder="Note content" ref={noteUpdateRef} required/>
        
        <button className="btn-update-note" type="submit">Update</button>
      </form>

      <form className="delete-note" onSubmit={deleteNoteSubmit}>
        <button className="btn-delete-note" type="submit">Delete</button>
      </form>
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