import React from 'react'
import {
    getAllNotes,
    getArchivedNotes,
    unarchiveNote,
    deleteNote,
} from '../utils/local-data'
import {useSearchParams} from 'react-router-dom'
import {FaBoxArchive} from 'react-icons/fa6'
import NoteSearchBar from '../components/NoteSearchBar'
import NoteList from '../components/NoteList'
import propTypes from 'prop-types'

function ArchivedWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()

    const keyword = searchParams.get('keyword')

    function changeSearchParams(keyword) {
        setSearchParams({keyword})
    }

    return (
        <ArchivedPage
            defaultKeyword={keyword}
            keywordChange={changeSearchParams}
        />
    )
}

class ArchivedPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getAllNotes(),
            searchInput: props.defaultKeyword || '',
        }
    }

    onUnArchiveHandler = id => {
        unarchiveNote(id)
        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        })
    }

    onDeleteNoteHandler = id => {
        deleteNote(id)
        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        })
    }

    onSearchHandler = input => {
        this.setState({searchInput: input})

        this.props.keywordChange(input)
    }

    render() {
        const filteredNotes = this.state.notes.filter(note =>
            note.title
                .toLowerCase()
                .includes(this.state.searchInput.toLowerCase())
        )
        const filteredActive = getArchivedNotes(filteredNotes)
        return (
            <div>
                <div className="note-container">
                    <FaBoxArchive />
                    <h2>Catatan Arsip</h2>
                </div>
                <NoteSearchBar onSearch={this.onSearchHandler} />
                <NoteList
                    notes={filteredActive}
                    onDelete={this.onDeleteNoteHandler}
                    onArchive={this.onUnArchiveHandler}
                />
            </div>
        )
    }
}

ArchivedPage.propTypes = {
    defaultKeyword: propTypes.string,
    keywordChange: propTypes.func.isRequired,
}

export default ArchivedWrapper
