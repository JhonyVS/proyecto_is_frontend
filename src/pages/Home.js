import React from 'react'
import {Link} from 'react-router-dom'
import imagenFondo from '../assets/fondoComida.png';
import '../styles/Home.css';

function Home() {
  return (
    <div className = "home" style={{ backgroundImage: `url(${imagenFondo})`}}>
        <div className='headerContainer' >
            <h1>Lo mejor en Promociones
            </h1>
            <p>Solo promociones</p>
            <Link to="/promociones">
                <button>VER PROMOCIONES</button> 
            </Link>

        </div>
    </div>
  )
}

export default Home