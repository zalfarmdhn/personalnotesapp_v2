import React from 'react'
import propTypes from 'prop-types'
import NoteItemContent from './NoteItemContent'
import NoteItemAction from './NoteItemAction'

function NoteItem({id, title, body, archived, createdAt, onDelete, onArchive}) {
    return (
        <article className="note-item">
            <NoteItemContent
                title={title}
                body={body}
                createdAt={createdAt}
                id={id}
            />
            <NoteItemAction
                id={id}
                archived={archived}
                onDelete={onDelete}
                onArchive={onArchive}
            />
        </article>
    )
}

NoteItem.propTypes = {
    id: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    body: propTypes.string.isRequired,
    archived: propTypes.bool.isRequired,
    createdAt: propTypes.string.isRequired,
    onDelete: propTypes.func.isRequired,
    onArchive: propTypes.func.isRequired,
}

export default NoteItem
