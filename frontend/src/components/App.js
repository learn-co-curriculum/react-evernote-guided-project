import React, { Component } from 'react';
import Header from './Header';
import NoteContainer from './NoteContainer';

let url = 'http://localhost:3000/api/v1/notes'
const fetchMessages = () => fetch(url).then(res => res.json());

class App extends Component {
  constructor(){
    super()
    this.state = {
      originalNotes: [],
      notes: [],
      clickedNote: null,
      editMode: false
    }
  }

componentDidMount() {
  fetchMessages().then(data => {
    this.setState({ notes: data, originalNotes: data });
    });
  }

  handleClickedNote = (noteId) => {
    this.setState({
      clickedNote: noteId
    })
  }

  toggleEditButton = () => {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  saveUpdatedNote = (noteId, noteTitle, noteBody) => {
    fetch(url + `/${noteId}`, {
      method: 'PATCH',
      headers:
      {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        "title": noteTitle,
        "body": noteBody
      })
    })
    .then(res => res.json())
    .then((resObj) => {
      let updatedNote = resObj
      let noteToUpdate = this.state.notes.find((note) => {
        return note.id == updatedNote.id

      })
      noteToUpdate.title = updatedNote.title
      noteToUpdate.body = updatedNote.body
      this.setState({
       notes: this.state.notes
      })
    })
 }

 createNewNote = () => {
   const defaultTile = 'Default Title'
   const defaultBody = 'Default Body'
   fetch(url, {
     method: 'POST',
     headers:
     {
       "Content-Type": "application/json; charset=utf-8"
     },
     body: JSON.stringify({
       "title": defaultTile,
       "body": defaultBody
     })
   })
   .then(res => res.json())
   .then((resObj) => {
     const newNote = resObj
     this.setState({
      notes: this.state.notes.concat(newNote)
     })
   })
 }

 filterNotes = (searchInput) => {
   if (searchInput === ''){
     this.setState({
       notes: this.state.originalNotes
     })
   } else {
  const filteredNote = this.state.notes.filter((note) => {
     return note.title.toLowerCase().includes(searchInput.toLowerCase())
   })
   this.setState({
     notes: filteredNote
   })
  }
 }

  render() {
    return (
      <div className="app">
        <Header />
        <NoteContainer allNotes={this.state.notes} handleClickedNote={this.handleClickedNote} currentlySelectedNoteId={this.state.clickedNote} toggleEditButton={this.toggleEditButton} currentEditState={this.state.editMode} saveUpdatedNote={this.saveUpdatedNote} createNewNote={this.createNewNote} filterNotes={this.filterNotes}/>
      </div>
     );
   }
 }


export default App;
// return this.state.messages.map(mObj => <p key={mObj.id}>{mObj.message}</p>);
