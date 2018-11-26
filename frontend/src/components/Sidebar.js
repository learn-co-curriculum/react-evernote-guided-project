import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  addNewNote = () => {
    this.props.createNewNote()
  }

  render() {

    return (
      <div className='master-detail-element sidebar'>
        <NoteList allNotes={this.props.allNotes} handleClickedNote={this.props.handleClickedNote}/>
        <button onClick={this.addNewNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
