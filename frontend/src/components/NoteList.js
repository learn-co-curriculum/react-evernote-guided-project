import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {


  const noteCard = (note, idx) => {
    return <NoteItem note={note} key={idx} handleClickedNote={props.handleClickedNote}/>
  }


  return (
    <ul >
      {props.allNotes.map((note, idx) => {
        return noteCard(note, idx)
      })}
      {/* <NoteItem /> */}
    </ul>
  );
}

export default NoteList;
