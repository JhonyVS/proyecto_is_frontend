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

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="/registrarPromocion">Registrar Negocio</Link>
            <Link to="/registrarProducto">Registrar Promocion</Link>              
            </div>
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/registrarNegocio">Registrar Negocio</Link>
            <Link to="/registrarPromocion">Registrar Promocion</Link>
            <button onClick={toogleNavbar}>
                <ReorderIcon/>
            </button>

        </div>
    </div>
  )
}

export default Navbar