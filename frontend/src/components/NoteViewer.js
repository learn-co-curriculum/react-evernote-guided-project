import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  const { title, body } = props.note;

  return (
    <Fragment>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={props.onEdit}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
