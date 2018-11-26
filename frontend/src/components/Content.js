import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {
  state = {
    editToggledOn: false
  }

  handleEditClick = () => this.setState({editToggledOn: !this.state.editToggledOn})

  editNote = (id, title, body) => {
    this.handleEditClick()
    this.props.editNote(id, title, body)
  }

  renderContent = () => {
    if (this.state.editToggledOn) {
      return <NoteEditor id={this.props.id} body={this.props.body} title={this.props.title} handleEditClick={this.handleEditClick} editNote={this.editNote}/>;
    } else if (true) {
      return <NoteViewer id={this.props.id} body={this.props.body} title={this.props.title} handleEditClick={this.handleEditClick}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
