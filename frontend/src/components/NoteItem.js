import React from 'react';

const NoteList = (props) => (
  <li onClick={props.onClick} id={props.id}>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </li>
);

export default NoteList;
