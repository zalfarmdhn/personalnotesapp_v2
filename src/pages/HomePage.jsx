import React from 'react'
import {
    getAllNotes,
    getActiveNotes,
    deleteNote,
    archiveNote,
} from '../utils/local-data'
import {FaCircleCheck} from 'react-icons/fa6'
import {useSearchParams} from 'react-router-dom'
import NoteSearchBar from '../components/NoteSearchBar'
import NoteList from '../components/NoteList'
import propTypes from 'prop-types'

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams()

    const keyword = searchParams.get('keyword')

    function changeSearchParams(keyword) {
        setSearchParams({keyword})
    }

    return (
        <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
    )
}

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            notes: getAllNotes(),
            searchInput: props.defaultKeyword || '',
        }
    }

    onArchiveHandler = id => {
        archiveNote(id)
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
        const filteredActive = getActiveNotes(filteredNotes)
        return (
            <div>
                <div className="note-container">
                    <FaCircleCheck />
                    <h2>Catatan Aktif</h2>
                </div>
                <NoteSearchBar onSearch={this.onSearchHandler} />
                <NoteList
                    notes={filteredActive}
                    onDelete={this.onDeleteNoteHandler}
                    onArchive={this.onArchiveHandler}
                />
            </div>
        )
    }
}

HomePage.propTypes = {
    defaultKeyword: propTypes.string,
    keywordChange: propTypes.func.isRequired,
}

export default HomePageWrapper
