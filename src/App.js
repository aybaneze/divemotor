import React, { Component } from 'react';
import './App.css';
import {Modal,Button} from 'react-bootstrap';


class App extends Component {
  constructor(props, context){
    super(props, context); //hereda todas las clases de component
    this.state = {
        show: false,
        username:'',
        fullname: '',
        email: '',
        cargo: '',
        date: '',
        img:''
      };    
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
     this.handleDownload = this.handleDownload.bind(this);
  }

  handleClose(){
    this.setState({show:false});
  }

  handleShow(){
    if(this.state.username!==''){
      this.setState({show: true});
    }else{
      alert("Debe completar todos los campos")
    }
 
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value, 
    })
  }

  handleDownload(e){
    const file = e.target.files[0];
    this.setState({img: file})
    // this.setState({img:file})
  
  }

  
  render() {

    return (
      <div className="body">         
        <div className="form">
          <h3>Formulario de Usuario</h3>
          <label htmlFor="username">Ingrese Nombres</label>
          <input 
          type="text" 
          className="ipt"
          value = {this.state.username}
          onChange = {this.onChange.bind(this)}
          name = "username" id="username" ></input><br/>

          <label htmlFor="fullname">Ingrese Apellidos</label>
          <input 
          id="fullname" type="text"
          value = {this.state.fullname}
          onChange = {this.onChange.bind(this)} 
          name = "fullname" className="ipt"></input><br/>

          <label htmlFor="email">Correo Electronico</label>
          <input 
          id="email"
          type="email" className="ipt"
          value = {this.state.email}
          onChange = {this.onChange.bind(this)}
          name = "email" ></input><br/>

          <label>Cargo</label>
          <select id="cargo" name="cargo"
          value={this.state.cargo} 
          onChange= {this.onChange.bind(this)}
          className="ipt">
          <option value="">Seleccione un cargo</option>
          <option value="Analista de BD">Analista de BD</option>
          <option value="Programador">Programador</option>
          <option value="Desarrollador">Desarrollador</option>  
          </select><br/>

          <label>Fecha de Ingreso</label>  
          <input 
          className="ipt" type="date"
          value={this.state.date}
          onChange= {this.onChange.bind(this)}
          name= 'date'
          ></input><br/>

          <label>Foto</label><br/>
          <input className="ipt" type="file"
          onChange= {this.handleDownload}
          ></input><br/>

          <button className="btn" onClick={this.handleShow}>VISUALIZAR</button>
         
       
        
     
        <Modal className="mod"  show={this.state.show}>        
          <Modal.Header>
            <Modal.Title>Fotocheck de ....</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="carnet">
                <div className="foto">
                  <img src="http://1.bp.blogspot.com/-0gjA5s6TCUU/VhmHBDbI2LI/AAAAAAAABEI/Met-PnaxKAA/s1600/silueta_abogado2.png"></img>     
                </div>
                <div className="datos">
                    <p>{JSON.stringify(this.state.username)}</p>
                    <p>{JSON.stringify(this.state.fullname)}</p>
                    <p>{JSON.stringify(this.state.email)}</p>
                    <p>{JSON.stringify(this.state.cargo)}</p>
                    <p>{JSON.stringify(this.state.date)}</p>    
                </div>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btnModal" ><i className="fas fa-download"></i></Button>
            <Button className="btnModal" onClick={this.handleClose}><i className="fas fa-times"></i></Button>
          </Modal.Footer>       
        </Modal>
       
          </div>
          </div>
    );
  }
}



export default App;