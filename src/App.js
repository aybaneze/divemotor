import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props); //hereda todas las clases de component
    this.state = {
      notes: [ ]
      };    

  }

  
  render() {
    return (
      <div className="body">         
        <div className="form">
          <label>Ingrese Nombre</label>
          <input className="ipt"></input><br/>
          <label>Ingrese Apellidos</label>
          <input className="ipt"></input><br/>
          <button>VISUALIZAR</button>
          <button>DESCARGAR</button>
        </div>                
      </div>
    );
  }
}

export default App;