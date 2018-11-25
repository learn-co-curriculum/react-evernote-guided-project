import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  return (
    <ul>
      {props.notes.map(note => {
        return <NoteItem
          key={note.id}
          note={note}
          onNoteClick={() => props.onNoteClick(note.id)}
        />
      })}
    </ul>
  );
}

export default NoteList;
