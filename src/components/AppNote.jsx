import React from 'react'
import {getAllNotes} from '../utils/local-data'
import NoteAppHeader from './NoteAppHeader'
import NoteSearchBar from './NoteSearchBar'
import NoteList from './NoteList'

class NoteApp extends React.Component {
    constructor() {
        super(constructor)
        this.state = {
            notes: getAllNotes(),
            searchInput: '',
        }
    }

    onAddNoteHandler = ({title, body}) => {
        this.setState(prevState => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: new Date().toLocaleDateString(),
                        archived: false,
                    },
                ],
            }
        })
    }

    onDeleteNoteHandler = id => {
        this.setState(prevState => {
            return {
                notes: prevState.notes.filter(note => note.id !== id),
            }
        })
    }

    onSearchHandler = input => {
        this.setState({searchInput: input})
    }

    onToggleArchiveHandler = id => {
        this.setState(prevState => ({
            notes: prevState.notes.map(note => {
                if (note.id === id) {
                    return {
                        ...note,
                        archived: !note.archived,
                    }
                }
                return note
            }),
        }))
    }

    render() {
        const filteredNotes = this.state.notes.filter(note =>
            note.title
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase())
        )
        const activeNote = filteredNotes.filter(note => !note.archived)
        const archivedNote = filteredNotes.filter(note => note.archived)
        return (
            <div>
                <NoteAppHeader onSearch={this.onSearchHandler} />
                <main className="note-app__body">
                    <h2>Catatan Aktif</h2>
                    <NoteSearchBar onSearch={this.onSearchHandler} />
                    <NoteList
                        notes={activeNote}
                        onDelete={this.onDeleteNoteHandler}
                        onArchive={this.onToggleArchiveHandler}
                    />
                    <h2>Catatan Terarsip</h2>
                    <NoteList
                        notes={archivedNote}
                        onDelete={this.onDeleteNoteHandler}
                        onArchive={this.onToggleArchiveHandler}
                    />
                </main>
            </div>
        )
    }
}

export default NoteApp
