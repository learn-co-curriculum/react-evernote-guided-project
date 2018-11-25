import React from 'react';


const NoteItem = (props) => (
    <li onClick={props.onNoteClick}>
        <h2>{props.note.title}</h2>
        <p>{props.note.body.substring(0, 15)}...</p>
    </li>
);

export default NoteItem;
