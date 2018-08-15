import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => (
        <NoteItem
          key={note.id}
          onClick={() => props.onSelect(note.id)}
          title={note.title}
          caption={note.body.length > 20 ? note.body.substring(0, 17).concat('...') : note.body}
        />
      ))}
    </ul>
  );
}

export default NoteList;
