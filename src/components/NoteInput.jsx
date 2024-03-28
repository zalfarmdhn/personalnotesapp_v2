import React from 'react'
import propTypes from 'prop-types'

class NoteInput extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            body: '',
            date: new Date(),
        }
    }

    onTitleChangeEventHandler = event => {
        if (!event.target) {
            this.setState(() => {
                return {
                    title: '(untitled)',
                }
            })
        }

        if (event.target.value.length <= 50) {
            this.setState(() => {
                return {
                    title: event.target.value,
                }
            })
        }
    }

    onBodyChangeEventHandler = event => {
        if (!event.target) {
            this.setState(() => {
                return {
                    body: '',
                }
            })
        }

        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onInputHandler = event => {
        this.setState(() => {
            return {
                title: event.target.innerHTML,
            }
        })
    }

    onSubmitEventHandler = event => {
        event.preventDefault()

        this.props.addNote(this.state)
    }

    render() {
        return (
            <section className="note-input">
                <h2>Buat Catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        {this.state.title.length} / 50
                    </p>
                    <input
                        type="text"
                        className="note-input__title"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        placeholder="Tambah judul notes..."
                    />
                    <textarea
                        className="note-input__body"
                        type="text"
                        onChange={this.onBodyChangeEventHandler}
                        placeholder="Tambah keterangan notes.."
                    />
                    <button type="submit">Buat</button>
                </form>
            </section>
        )
    }
}

NoteInput.propTypes = {
    addNote: propTypes.func.isRequired,
}

export default NoteInput
