import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {

  return (
    <ul>
      {props.notes.map(note => <NoteItem title={note.title} body={note.body} key={note.id} id={note.id} onClick={props.onClick}/>)}
    </ul>
  );
}

export default NoteList;
