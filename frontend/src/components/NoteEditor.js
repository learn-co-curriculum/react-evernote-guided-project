import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props){
    super(props)
    this.state = {
      inputTitle: props.currentNoteContent.title,
      inputBody: props.currentNoteContent.body
    }
  }
  toggleNoteEditor = () => {
    this.props.toggleEditButton()
  }


  componentWillReceiveProps(nextProps) {

      this.setState({
        inputTitle: nextProps.currentNoteContent.title,
        inputBody: nextProps.currentNoteContent.body
      } );
    }

    saveNote = (event) => {
      event.preventDefault()
      let noteId = this.props.currentNoteContent.id
      let noteTitle = this.state.inputTitle
      let noteBody =  this.state.inputBody
      this.props.saveUpdatedNote(noteId, noteTitle, noteBody)
    }

  render() {
    return (
      <form className="note-editor">
        <input type="text" name="title" value={this.state.inputTitle} onChange={e => this.setState({inputTitle: e.target.value})}/>
        <textarea name="body" value={this.state.inputBody} onChange={e => this.setState({inputBody: e.target.value})}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" onClick={this.saveNote}/>
          <button type="button" onClick={this.toggleNoteEditor}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
