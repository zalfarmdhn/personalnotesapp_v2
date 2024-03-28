import React from 'react'
import propTypes from 'prop-types'

class NoteSearchBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchInput: '',
        }
    }

    inputChange = event => {
        this.setState({searchInput: event.target.value})
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    className="note-search__input"
                    placeholder="Cari notes..."
                    value={this.state.searchInput}
                    onInput={this.inputChange}
                />
            </div>
        )
    }
}

NoteSearchBar.propTypes = {
    onSearch: propTypes.func.isRequired,
}

export default NoteSearchBar
