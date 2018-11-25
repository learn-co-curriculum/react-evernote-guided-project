import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  state = {
    editMode: false,
  }

  handleEditClick = () => {
    this.setState({
      editMode: true,
    })
  }

  changeEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  renderContent = () => {
    if (this.state.editMode === true) {
      return <NoteEditor
        note={this.props.note}
        handleSubmit={this.props.handleSubmit}
        changeEditMode={this.changeEditMode}
      />
    } else if (this.props.note.id) {
      return <NoteViewer
        note={this.props.note} onEditClick={this.handleEditClick}
      />
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div key={this.props.note.id} className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
