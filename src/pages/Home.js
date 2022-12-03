// import { Grid } from '@mui/material';
import { Container, Row, Col } from 'react-grid-system';
import React from 'react'
// import {Link} from 'react-router-dom'
import '../styles/Home.css';
import { useEffect } from 'react';
import Cookies from 'universal-cookie';
function Home() {
    const cookies = new Cookies();
    useEffect(() => {
        if(cookies.get('token')){
            let aux = document.getElementById("cerrarsesion")
  let pos = document.getElementById("iniciarsesion")
  let aux2 = document.getElementById("cerrarsesion2")
  let pos2 = document.getElementById("iniciarsesion2")
  aux.style.display="flex";
  aux2.style.display="flex";
  pos.style.display="none" ;
  pos2.style.display="none";
          }
            
          
      });
  return (<Container >
    <div className = "home" >
    
        <div className='headerContainer' >
            <Row>
                <Col>
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
    </div>
    </Container>
  )
}

export default Home
