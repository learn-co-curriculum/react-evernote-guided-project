import React, { Component } from 'react';

class NoteEditor extends Component {
  constructor(props){
    super(props)
    this.state = {
      title: this.props.title,
      body: this.props.body
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({body: newProps.body, title: newProps.title})
  }

  handleChange = (event) => this.setState({[event.target.name]: event.target.value})

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.editNote(this.props.id , this.state.title, this.state.body)
  }

  render() {
    return (
      <form className="note-editor" onSubmit={this.handleSubmit}>
        <input type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
        <textarea name="body" onChange={this.handleChange} value={this.state.body}/>
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button" onClick={this.props.handleEditClick}>Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
