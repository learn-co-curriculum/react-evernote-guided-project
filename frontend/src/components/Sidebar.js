import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {

  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList notes={this.props.notes} onClick={this.props.handleSidebarNoteClick}/>
        <button onClick={this.props.createNote}>New</button>
      </div>
    );
  }
}

export default Sidebar;
