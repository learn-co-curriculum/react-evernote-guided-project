import React from 'react';

const NoteList = (props) => (
  <li onClick={props.onClick}>
    <h2>{props.title}</h2>
    <p>{props.body}</p>
  </li>
);

export default NoteList;
