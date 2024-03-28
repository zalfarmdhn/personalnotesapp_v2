import React from 'react'
import DeleteButton from './DeleteButton'
import ArchiveButton from './ArchiveButton'
// import prop-types
import propTypes from 'prop-types'

function NoteItemAction({id, onDelete, archived, onArchive}) {
    return (
        <div className="note-item__action">
            <DeleteButton id={id} onDelete={onDelete} />
            <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
        </div>
    )
}

NoteItemAction.propTypes = {
    id: propTypes.string.isRequired,
    archived: propTypes.bool.isRequired,
    onDelete: propTypes.func.isRequired,
    onArchive: propTypes.func.isRequired,
}

export default NoteItemAction
