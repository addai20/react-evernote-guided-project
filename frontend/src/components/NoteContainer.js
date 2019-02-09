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
      displayedComp: "Instructions"
    }
    //consider adding click handler here
  }

  componentDidMount(){
    // debugger
    fetch('http://localhost:3000/api/v1/users/1')
      .then(function(response){
        return response.json();
      })
      .then(noteData => {
        this.setState({ uNotes: noteData.notes });
        console.log("Notes fetched!",noteData)
      })
  }

  render() {
    return (
      <Fragment>
        <Search />
        <div className='container'>
          <Sidebar allNotes={this.state.uNotes}/>
          <Content />
        </div>
      </Fragment>
    );
  }
}

export default NoteContainer;
