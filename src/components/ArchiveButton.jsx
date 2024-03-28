import React from 'react'
import propTypes from 'prop-types'

function ArchiveButton({id, archived, onArchive}) {
    return (
        <button
            className="note-item__archive-button"
            onClick={() => onArchive(id)}>
            {archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
    )
}

ArchiveButton.propTypes = {
    id: propTypes.string.isRequired,
    archived: propTypes.bool.isRequired,
    onArchive: propTypes.func.isRequired,
}

export default ArchiveButton
