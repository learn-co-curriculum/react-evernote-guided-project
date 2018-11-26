import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';


class Content extends Component {
  renderContent = () => {
    if (this.props.currentEditState) {
      return <NoteEditor currentNoteContent={this.props.currentNoteContent} toggleEditButton={this.props.toggleEditButton} saveUpdatedNote={this.props.saveUpdatedNote}/>;
    } else if (this.props.currentNoteContent) {
      return <NoteViewer currentNoteContent={this.props.currentNoteContent} toggleEditButton={this.props.toggleEditButton}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
