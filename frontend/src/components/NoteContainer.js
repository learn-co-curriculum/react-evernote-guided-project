import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {


  getSelectedNote(){
    return this.props.allNotes.find((note) => {
      return note.id == this.props.currentlySelectedNoteId
    })
  }

  render() {
    return (
      <Fragment>
        <Search filterNotes={this.props.filterNotes}/>
        <div className='container'>
          <Sidebar allNotes={this.props.allNotes} handleClickedNote={this.props.handleClickedNote} createNewNote={this.props.createNewNote}/>
          <Content  currentNoteContent={this.getSelectedNote()} toggleEditButton={this.props.toggleEditButton} currentEditState={this.props.currentEditState} saveUpdatedNote={this.props.saveUpdatedNote}/>
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
