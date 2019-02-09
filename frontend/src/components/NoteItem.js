import React, { Component } from 'react';

class NoteItem extends Component {

   truncate = (body)=> {
    if (this.props.noteInfo.body.length > 45){
      return this.props.noteInfo.body.slice(0, 44) + "...";
    } else {
      return this.props.noteInfo.body;
    }
  }

      //LEFT OFF HERE
  //   function noteClickHandler(){
  //   console.log("Note Clicked")
  // }

  render() {
    return (
      <li>
        <h2>{this.props.noteInfo.title}</h2>
        <p>

          {this.truncate(this.props.noteInfo.body)}
        </p>
      </li>
    );
  }
}

export default NoteItem;


      // Changed the component from functional to class
// import React from 'react';
//
// const NoteItem = (props) => (
//
//   <li>
//     <h2>Title</h2>
//     <p>Caption...</p>
//   </li>
// );
//
// export default NoteItem;
