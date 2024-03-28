import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {getNote, deleteNote, archiveNote} from '../utils/local-data'
import {showFormattedDate} from '../utils/index'
import NoteItemAction from '../components/NoteItemAction'

function ViewPage() {
    const {id} = useParams()
    const navigate = useNavigate()
    const note = getNote(id || navigate('/404'))

    return (
        <div>
            <h1 className="detail-page__title">{note.title}</h1>
            <h2>{showFormattedDate(note.createdAt)}</h2>
            <p className="detail-page__body">{note.body}</p>
            <NoteItemAction
                id={id}
                archived={note.archived}
                onDelete={() => {
                    deleteNote(id)
                    navigate('/')
                }}
                onArchive={() => {
                    archiveNote(id)
                    navigate('/')
                }}
            />
        </div>
    )
}

export default ViewPage