import React from 'react'
import Navigation from './Navigation'

function NoteAppHeader() {
    return (
        <header className="note-app__header">
            <div className="note-app-header__title">
                <h1>Notes App</h1>
            </div>
            <div className="note-app-header__navigation">
                <Navigation />
            </div>
        </header>
    )
}

export default NoteAppHeader
