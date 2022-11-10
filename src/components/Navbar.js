import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import '../styles/Navbar.css'
import { HiOutlineMenu } from "react-icons/hi";

// import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toogleNavbar = () => {
        setOpenLinks(!openLinks);
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
        {/* <a className="text-white" href='/registrarNegocio'>fasdfsdafsdf</a> */}
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
          
        </div>
        <div className="rightSide">
            <a href='/'>Home</a>
            <a href='registrarNegocio' id='iniciarsesion'>Registrar Negocio</a>
            <a href='/ini' id='iniciarsesion2'>Iniciar sesión</a>
            <a href='/registrarPromocion' id='cerrarsesion'>Registrar Promocion</a>
            <a href='/' id='cerrarsesion2' onClick={test2}>Cerrar Sesion</a>
            {/* <Link to="/">Home</Link>
            <Link to="/registrarNegocio"id="iniciarsesion">Registrar Nekjhkjgocio</Link>
            <Link to="/ini" id="iniciarsesion2" >Iniciar sesion</Link>
            <Link to="/registrarPromocion"id="cerrarsesion">Registrar Promocion</Link>
            <Link to="/"id="cerrarsesion2"onClick={test2}>Cerrar Sesion</Link> */}
            
            <button onClick={toogleNavbar}>
                <HiOutlineMenu/>
            </button>

        </div>
    </div>
  )
}
export default Navbar