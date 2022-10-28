import { Grid } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom'
import imagenFondo from '../assets/fondoComida.png';
import '../styles/Home.css';

function Home() {
  return (<Grid container>
    <div className = "home" style={{ backgroundImage: `url(${imagenFondo})`}}>
        <div className='headerContainer' >
            <Grid item sx= {6} sm ={6} md = {12}>
            <h1 >Lo mejor en Promociones
            </h1>

            </Grid>
            
            <p>Solo promociones</p>
            <Link to="/promociones">
                <button>VER PROMOCIONES</button> 
            </Link>

        </div>
    </div>
    </Grid>
  )
}

export default Home