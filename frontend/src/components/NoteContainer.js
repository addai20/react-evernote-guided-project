import React, { Component, Fragment } from 'react';
import Search from './Search';
import Sidebar from './Sidebar';
import Content from './Content';

class NoteContainer extends Component {
  constructor(){
    super()
    this.state = {
      uNotes: [],
      // currentUser: {},
      displayedComp: "Instructions",
      currentNote: null
    }
    //consider adding click handler here
  }

  noteItemUpdateHandler = (note)=> {
    console.log("update function initiates")
  }

// When clicked, stores clicked note and its props into 'currentNote'
  noteItemClickHandler = (note)=> {
      // debugger
      console.log("Note Item Clicked!")
      this.setState({
        currentNote: note
      })
    }



  componentDidMount(){
    // debugger
    fetch('http://localhost:3000/api/v1/users/1')
      .then(function(response){
        return response.json();
      })
      .then(noteData => {
        this.setState({
          uNotes: noteData.notes,
          displayedComp: noteData.displayedComp

        });
        console.log("Notes fetched!",noteData)
      })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar
            allNotes={this.state.uNotes}
            noteItemClickHandler = {this.noteItemClickHandler}
            />
          <Content
            allData={this.state}
            currentNote = {this.state.currentNote}
            />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
