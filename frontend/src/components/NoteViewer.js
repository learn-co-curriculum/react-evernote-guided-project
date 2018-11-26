import React, { Fragment } from 'react';

const NoteViewer = (props) => {


  const toggleNoteEditor = () => {
    props.toggleEditButton()
  
  }

  return (

    <Fragment>
      <h2>{props.currentNoteContent.title}</h2>
      <p>{props.currentNoteContent.body.split('\\n').map((item, key) => {
          return <span key={key}>{item}<br/></span>})}</p>
      <button onClick={toggleNoteEditor}>Edit</button>
    </Fragment>
  );

}

export default NoteViewer;
