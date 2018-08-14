import React from 'react';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => {
        return (
          <li key={note.id} onClick={() => props.onSelect(note.id)}>
            <h2>{note.title}</h2>
            <p>{note.body.length > 20 ? note.body.substring(0, 17).concat('...') : note.body}</p>
          </li>
        )
      })}
    </ul>
  );
}

export default NoteList;
