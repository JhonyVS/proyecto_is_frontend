import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';



function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toogleNavbar = () => {
        setOpenLinks(!openLinks);
    }
    
    const test = () => { 
        let aux = document.getElementById("cerrarsesion")
        let pos = document.getElementById("iniciarsesion")
        let aux2 = document.getElementById("cerrarsesion2")
        let pos2 = document.getElementById("iniciarsesion2")
        aux.style.display="flex";
        aux2.style.display="flex";
        pos.style.display="none" ;
        pos2.style.display="none" ;
    }
        
    const test2 = () => { 
        let aux = document.getElementById("cerrarsesion")
        let pos = document.getElementById("iniciarsesion")
        let aux2 = document.getElementById("cerrarsesion2")
        let pos2 = document.getElementById("iniciarsesion2")
        aux.style.display="none";
        aux2.style.display="none";
        pos.style.display="flex" ;
        pos2.style.display="flex" ;
    }

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
          
        </div>
        <div className="rightSide">
            <Link to="/registrarNegocio"id="iniciarsesion">Registrar Negocio</Link>
            <Link to="/" id="iniciarsesion2" onClick={test}>Iniciar sesion</Link>
            <Link to="/registrarPromocion"id="cerrarsesion">Registrar Promocion</Link>
            <Link to="/"id="cerrarsesion2"onClick={test2}>Cerrar Sesion</Link>
            
            <button onClick={toogleNavbar}>
                <ReorderIcon/>
            </button>

        </div>
    </div>
  )
}

export default Navbar
