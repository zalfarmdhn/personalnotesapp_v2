import React from 'react'
import propTypes from 'prop-types'

function DeleteButton({id, onDelete}) {
    return (
        <button
            className="note-item__delete-button"
            onClick={() => onDelete(id)}>
            Delete
        </button>
    )
}

DeleteButton.propTypes = {
    id: propTypes.string.isRequired,
    onDelete: propTypes.func.isRequired,
}

export default DeleteButton
