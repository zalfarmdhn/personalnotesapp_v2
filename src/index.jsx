import React from 'react'
import {createRoot} from 'react-dom/client'
// import NoteApp from './components/AppNote'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

// styling
import './styles/style.css'

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
