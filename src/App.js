import React, { Component } from 'react';
import './App.css';
import Note from './componentes/Note.jsx';
import Form from './noteForm/form.jsx';
import firebase from 'firebase';
import {db_config} from './config/config.js';
import 'firebase/database'; 

class App extends Component {
  constructor(props){
    super(props); //hereda todas las clases de component
    this.state = {
      notes: [ ]
      };    

  }

  
  render() {
    return (
      <div className="notesContainer">         
          {this.userLog(this.state.notes)}                
        </div>
    );
  }
}

export default App;