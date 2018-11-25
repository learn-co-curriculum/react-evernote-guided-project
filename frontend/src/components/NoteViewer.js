import React, { Fragment } from 'react';

const NoteViewer = ({ note, onEditClick }) => {
  return (
    <Fragment>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
      <button onClick={onEditClick}>Edit</button>
      <a href={`mailto:?subject= Someone Shared a Flatnote with you&body=Hi,I wanted to share my Flatnote with you: ${note.title} ${note.body}` }>Email note to a friend
      </a>
    </Fragment>
  );
}

export default NoteViewer;
