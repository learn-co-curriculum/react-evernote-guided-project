import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    searchTerm: "",
    notes: [],
    selectedNoteId: "",
    contentBody: "",
    contentTitle: ""
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
    .then(res => res.json())
    .then(notes => this.setState({notes: notes}, () => this.populateContentNode(this.state.notes[0].id)))
  }

  saveNoteEdit = (id, title, body) => {
    let updatedNote = this.state.notes.find(note => note.id == id)
    updatedNote.title = title
    updatedNote.body = body
    let newNotes = this.state.notes.map(note => note.id == id ? updatedNote : note)
    this.setState({notes: newNotes}, () => this.populateContentNode(id))
    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: title, body: body})
    })
  }

  filteredNotes = () => this.state.notes.filter(note => (note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || note.body.toLowerCase().includes(this.state.searchTerm.toLowerCase())))

  handleSearchChange = (event) => this.setState({searchTerm: event.target.value})

  handleSidebarNoteClick = (event) => {
    this.populateContentNode(event.currentTarget.id)
  }

  populateContentNode = id => {
    let foundNote = this.state.notes.find(note => note.id == id)
    this.setState({contentBody: foundNote.body, contentTitle: foundNote.title, selectedNoteId: id})
  }

  createNote = () => {
    fetch(`http://localhost:3000/api/v1/notes`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title: "title...", body: "body...", user_id: 1})
    }).then(res => res.json())
    .then(note => this.setState({notes: [...this.state.notes, note]}))
  }

  render() {
    return (
      <Fragment>
        <Search searchTerm={this.state.searchTerm} handleSearchChange={this.handleSearchChange}/>
        <div className='container'>
          <Sidebar notes={this.filteredNotes()} handleSidebarNoteClick={this.handleSidebarNoteClick} createNote={this.createNote}/>
          <Content id={this.state.selectedNoteId} body={this.state.contentBody} title={this.state.contentTitle} editNote={this.saveNoteEdit}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
