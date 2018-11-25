import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <NoteList
          notes={this.props.notes}
          onNoteClick={this.props.onNoteClick}
        />
        <button onClick={this.props.onClickNew}>New</button>
      </div>
    );
  }
}

export default Sidebar;
