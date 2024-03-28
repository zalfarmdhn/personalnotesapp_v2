import React from 'react'
import {Link} from 'react-router-dom'
import {FaPlusCircle} from 'react-icons/fa'

function Navigation() {
    return (
        <>
            <div className="note-app-header__title">
                <h1>
                    <Link to="/">Notes App</Link>
                </h1>
            </div>
            <div className="note-app-header__navigation">
                <nav className="note-app-header__navigation">
                    <ul>
                        <li>
                            <Link to="/">Aktif</Link>
                        </li>
                        <li>
                            <Link to="/archived">Arsip</Link>
                        </li>
                        <li>
                            <Link to="/add" className="note-app__add-button">
                                <FaPlusCircle />
                                Tambah Note
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Navigation
