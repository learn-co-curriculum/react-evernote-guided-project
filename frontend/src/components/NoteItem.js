import React from 'react';

const NoteList = (props) => {
  const onClick = () => {
    props.handleClickedNote(props.note.id)
  }

  return (
  <li onClick={onClick}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.substring(0, 20)}...</p>
  </li>
 )
};

export default NoteList;
