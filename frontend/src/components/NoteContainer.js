import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  state = {
    allNotes: [],
    selectedNote: {},
    searchTerm: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/v1/notes')
      .then(response => response.json())
      .then(json => this.setState({
        allNotes: json
      }))
  }

  handleNoteClick = (id) => {
    let foundNote = this.state.allNotes.find(note =>
      note.id === id
    )
    this.setState({
      selectedNote: foundNote
    })
  }

  handleSubmit = (note) => {
    let id = this.state.selectedNote.id

    fetch(`http://localhost:3000/api/v1/notes/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: note.title,
        body: note.body,
        user_id: 1
      })
    })
      .then(response => response.json())
      .then(jsonNote => {
        this.componentDidMount()
        this.setState({
          selectedNote: jsonNote
        })
      })

  }

  handleNewClick = () => {
    fetch(`http://localhost:3000/api/v1/notes/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: 'default',
        body: 'placeholder',
        user_id: 1
      })
    })
      .then(response => response.json())
      .then(jsonNote => {
        this.componentDidMount()
        this.setState({
          selectedNote: jsonNote
        })
      })
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filterNotes = () => {
    return this.state.allNotes.filter(note => {
      return note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  render() {
    return (
      <Fragment>
        <Search
          searchFilter={this.handleSearch}
          value={this.state.searchTerm}
        />
        <div className='container'>
          <Sidebar
            notes={this.filterNotes()}
            onNoteClick={this.handleNoteClick}
            onClickNew={this.handleNewClick}
          />
          <Content
            note={this.state.selectedNote}
            handleSubmit={this.handleSubmit}
           />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
