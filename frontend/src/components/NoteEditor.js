import React, { Component } from 'react';

class NoteEditor extends Component {
  render() {
    return (
      <form
        onSubmit= {this.props.noteItemUpdateHandler}
        className="note-editor">
        <input type="text" name="title"
          onChange = {this.props.onChangeTitle}
          value = {this.props.noteTitle}
          placeholder ={this.props.currentNote.title}
          />
        <textarea name="body"
          onChange = {this.props.onChangeTextArea}
          value= {this.props.noteBody}
          placeholder= {this.props.currentNote.body}
          />
        <div className="button-row">
          <input className="button" type="submit" value="Save" />
          <button type="button">Cancel</button>
        </div>
      </form>
    );
  }
}

export default NoteEditor;
