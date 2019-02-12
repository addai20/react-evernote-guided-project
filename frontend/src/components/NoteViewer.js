import React, { Fragment } from 'react';

const NoteViewer = (props) => {
  console.log("props for NoteView", props);
  return (
    <Fragment>
      <h2>{props.currentNote.title}</h2>
      <p>{props.currentNote.body}</p>
      <button onClick= {props.noteEditClickHandler}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
