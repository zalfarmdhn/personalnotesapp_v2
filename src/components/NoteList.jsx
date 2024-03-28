import React from 'react'
import NoteItem from './NoteItem'
import propTypes from 'prop-types'

function NoteList({notes, onDelete, onArchive}) {
    return (
        <>
            {notes.length === 0 && (
                <p className="notes-list__empty-message">Tidak ada catatan</p>
            )}
            <section className="notes-list">
                {notes.map(note => (
                    <NoteItem
                        key={note.id}
                        id={note.id}
                        onDelete={onDelete}
                        onArchive={onArchive}
                        {...note}
                    />
                ))}
            </section>
        </>
    )
}

NoteList.propTypes = {
    notes: propTypes.array.isRequired,
    onDelete: propTypes.func.isRequired,
    onArchive: propTypes.func.isRequired,
}

export default NoteList
