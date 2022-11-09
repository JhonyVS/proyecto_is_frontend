import React from 'react';
import '../styles/Login.css';
import logo from '../assets/session.jpg';
import imgLeft from '../assets/comidas.jpg'
//librerias a instalar
//npm install --save axios
//npm i universal-cookie
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="https://backend-descuentos-production.up.railway.app/api/login/negocio";
const cookies = new Cookies();

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
  //aumentar mas restricciones
  if(this.state.form.nick.length < 4 || this.state.form.password.length < 8 ){
    alert('El nick es menor a 4 caracteres o el password es menor a 8 caracteres');
  }else{
    axios.post(baseUrl, this.state.form)
    .then(response=>{
      console.log(response); 
      //aumentar uhn status para controlar que tiene que devolver si o si en todos con 
      if(response.data.status === "true"){
        
            cookies.set('id', response.usuario_id, {path: "/"});
            cookies.set('token', response.token, {path: "/"}); 
            window.location.href="/";
      }else{alert('El usuario o la contraseña no son correctos');}
  })
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
                  <br />
                  <img src={logo} width="150px"  alt="User Icon" />
                  <br />
                </div>

           
                <form onSubmit={this.manejadorSubmit} >
                  {/* <input type="text" className="texto" name="nick" placeholder="Usuario" onChange={this.menejadorChange}/>
                  <input type="password"  name="password" placeholder="Password"onChange={this.menejadorChange}/> */}
                  <input type="text" className="texto" name="nick" placeholder="Usuario"onChange={this.handleChange} />
                  <input type="password"  name="password" placeholder="Password"onChange={this.handleChange}/>
                  <div></div>
                  {/* <button type="submit" className='btn'onClick={this.manejadorBoton} >Iniciar Sesión</button> */}
                   <button  type="submit" className='btn' onClick={this.iniciarSesion}>Iniciar Sesión</button> 
                  <div></div>
                </form>
                    
              
            
                </div>
                </div>
              </React.Fragment>
          </div>
      </div>
        );

    }
    
}

export default Login
