import React, { Component } from 'react';

class NoteEditor extends Component {
  state = {
      title: this.props.note.title,
      body: this.props.note.body
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleBodyChange = (event) => {
    this.setState({
      body: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleSubmit(this.state)
    this.props.changeEditMode()
  }

  render() {
    return (
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}  />
        <textarea name="body" value={this.state.body} onChange={this.handleBodyChange} />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.changeEditMode}>Cancel</button>
        </div>
      </form>
    );
  }
}



export default NoteEditor;
