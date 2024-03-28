import React from 'react'
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ArchivedPage from './pages/ArchivedPage'
import AddPage from './pages/AddPage'
import ViewPage from './pages/ViewPage'
import Navigation from './components/Navigation'
import FailedPage from './pages/FailedPage'

function App() {
    return (
        <>
            <header className="note-app__header">
                <Navigation />
            </header>
            <main className="note-app__body">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/archived" element={<ArchivedPage />} />
                    <Route path="/add" element={<AddPage />} />
                    <Route path="/note/:id" element={<ViewPage />} />
                    <Route path="/*" element={<FailedPage />} />
                </Routes>
            </main>
        </>
    )
}

export default App
