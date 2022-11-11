// import { Grid } from '@mui/material';
import { Container, Row, Col } from 'react-grid-system';
import React from 'react'
// import {Link} from 'react-router-dom'
import imagenFondo from '../assets/fondoComida.png';
import '../styles/Home.css';

function Home() {
  return (
    <Container className='headerContainer'>
        <div className = "home" style={{ backgroundImage: `url(${imagenFondo})`}}>
            {/* <div className='headerContainer' > */}
                <Row>
                    <Col sx = {6} sm = {6} md = {12}>
                    <h1 >Lo mejor en Promociones</h1>
                    </Col>
                </Row>
                <Row>
                    <p>Solo promociones</p>
                </Row>
                <Row>
                    <a href='/promociones'>
                        <button>VER PROMOCIONES</button>
                    </a>
                </Row>
                {/* <Grid item sx= {6} sm ={6} md = {12}>
                <h1 >Lo mejor en Promociones
                </h1>

                </Grid>
                
                <p>Solo promociones</p>
                <Link to="/promociones">
                    <button>VER PROMOCIONES</button> 
                </Link> */}

        </div>
    </Container>
    // </div>
  )
}

export default Home