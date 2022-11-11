import React from 'react';
import '../styles/Login.css';
import logo from '../assets/session.jpg';
import imgLeft from '../assets/comidas.jpg'
//librerias a instalar
//npm install --save axios
//npm i universal-cookie
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = `${process.env.React_APP_API}/api/login/negocio`;
const cookies = new Cookies();
let cantidad = 0 ;
class Login extends React.Component{
  
    
    state={
    form:{
        "nick": '',
        "password": ''
    }
}
handleChange=async e=>{
    await this.setState({
        form:{
            ...this.state.form,
            [e.target.name]: e.target.value
        }
    });
  
console.log(this.state.form);
   }
   manejadorSubmit =async e=>{
    e.preventDefault();

 }

iniciarSesion=()=>{
  let nombre = /^[a-zA-Z0-9]{1,32}$/;
  //console.log(nombre.test(this.state.form.nick )); 
  cantidad +=1;
  //console.log(cantidad);
  if(cantidad>5){
    alert('Has intentando Inisiar Sesion mas de 5 veces erróneamente');
  }else{
    if(this.state.form.nick.length === 0 || this.state.form.password.length === 0){
      alert('El nick esta vacio o el password esta vacio');
  }else{
    if(this.state.form.nick.length < 4 || this.state.form.password.length < 8 ){
      alert('El nick es menor a 4 caracteres o el password es menor a 8 caracteres');
    }else{if(this.state.form.nick.length > 32 || this.state.form.password.length > 32){
      alert('El nick es meyor a 32 caracteres o el password es mayor a 32 caracteres');
    }else{if(nombre.test(this.state.form.nick )=== true){
      
      axios.post(baseUrl, this.state.form)
      .then(response=>{
        console.log(response); 
        //aumentar uhn status para controlar que tiene que devolver si o si en todos con 
        if(response.data.status === true){
          
              cookies.set('id', response.usuario_id, {path: "/"});
              cookies.set('token', response.token, {path: "/"}); 
              window.location.href="/";
        }else{alert('El usuario o la contraseña son incorrectos');}
    })
  }else{alert('El nick no se aceptan espacios o caracateres especiales');}
    }
      
      }
  }
}


  //aumentar mas restricciones
  
  
  }
componentDidMount(){
  if(cookies.get('token')){
    window.location.href="/";
  }
} 
  render(){
        return(
          <div className='contact_l'>
          <div 
              className='leftSide_l'
              style={{backgroundImage: `url(${imgLeft})`}}
          ></div>
  
          <div className='rightSide_l'>
          <React.Fragment>
          <div className="wrapper ">
              <div id="formContent">
                
                <div >
                <h2 class="tituloIni">Iniciar Sesión</h2>
                  
                  <img src={logo} width="150px"  alt="User Icon" />
                  <br /><br />
                </div>

           
                <form onSubmit={this.manejadorSubmit} >
                  {/* <input type="text" className="texto" name="nick" placeholder="Usuario" onChange={this.menejadorChange}/>
                  <input type="password"  name="password" placeholder="Password"onChange={this.menejadorChange}/> */}
                  <input type="text" className="texto" name="nick" placeholder="Usuario"onChange={this.handleChange} />
                  <input type="password"  name="password" placeholder="Password"onChange={this.handleChange}/>
                 
                  {/* <button type="submit" className='btn'onClick={this.manejadorBoton} >Iniciar Sesión</button> */}
                  <br /><br />
                   <button  id="iniciosesion" type="submit" className='btn' onClick={this.iniciarSesion}>Iniciar Sesión</button> 
                   <button  id="cancelar" className='btn' onClick={()=> window.location.href="/"}>Cancelar</button>                   
                  <br /><br />
                </form>
                    
            
                </div>
                </div>
              </React.Fragment>
          </div>
      </div>
        );

    }
    
}
/* 
const test = () => { 
  let aux = document.getElementById("cerrarsesion")
  let pos = document.getElementById("iniciarsesion")
  let aux2 = document.getElementById("cerrarsesion2")
  let pos2 = document.getElementById("iniciarsesion2")
  aux.style.display="flex";
  aux2.style.display="flex";
  pos.style.display="none" ;
  pos2.style.display="none";
} */

export default Login
