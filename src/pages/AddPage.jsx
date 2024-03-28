import React from 'react'
import {useNavigate} from 'react-router-dom'
import {addNote} from '../utils/local-data'
import NoteInput from '../components/NoteInput'

function AddPage() {
    const navigate = useNavigate()

    const onAddContact = note => {
        addNote(note)
        navigate('/')
    }

    return <NoteInput addNote={onAddContact} />
}

export default AddPage
