import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/

// if props.currentNote === true
class Content extends Component {
  constructor() {
    super()
    this.state = {
      editClicked: false,
      noteTitle: "",
      noteBody: ""
    }
  }

  newNoteHandler = (note)=> {
    console.log("New note button clicked!")
  }

  onChangeTitle = (note)=> {
    console.log("Title passed!", note)
    // debugger
    this.setState({
      noteTitle: note.target.value
    })
  }
  onChangeTextArea = (note)=> {
    console.log("Text Area passed!", note)
    // debugger
    this.setState({
      noteBody: note.target.value
    })
  }

  noteEditClickHandler = (note)=> {
    this.setState({
      editClicked: !(this.state.editClicked)
    })
  }




  renderContent = () => {
    if (this.props.currentNote !== null && this.state.editClicked === false) {

      return <NoteViewer
        noteEditClickHandler = {this.noteEditClickHandler}
        currentNote = {this.props.currentNote}/>;
    } else if (this.props.currentNote !== null && this.state.editClicked === true) {
      return <NoteEditor
        onChangeTitle = {this.onChangeTitle}
        onChangeTextArea = {this.onChangeTextArea}
        currentNote = {this.props.currentNote}
        noteTitle = {this.state.noteTitle}
        noteBody = {this.state.noteBody}
        newNoteHandler = {this.state.newNoteHandler}
        />;
    } else {
      return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
