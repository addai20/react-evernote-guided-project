import React from 'react';
import NoteItem from './NoteItem';

const NoteList = (props) => {
  // debugger
  console.log("NoteList Props", props.allnotes)
  return (

    <ul>
      {props.allNotes.map(note =>
      <NoteItem
        noteInfo = {note}
        />)}

    </ul>
  );
}

export default NoteList;




// const NoteList = (props) => {
//   // debugger
//   return (
//     console.log("NoteList Props", props)
//     <ul>
//       {props.allNotes.map(note =>
//       <NoteItem allNotes = {props.allNotes}/>)}
//
//     </ul>
//   );
// }
//
// export default NoteList;
