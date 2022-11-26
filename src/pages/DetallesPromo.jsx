import React from 'react'
import imgLeft from '../assets/regneg_left.png'
import '../styles/DetallesPromo.css'

import {useNavigate} from 'react-router-dom'


function DetallesPromo() {
        
    const history = useNavigate()
    //const history1 = useNavigate()

    return <div className='contact'>
            

        <div 
            className='leftSide'
            style={{backgroundImage: `url(${imgLeft})`}}
        ></div>

        <div className='rightSide'>
        <h2 class="tituloDetPromo">Nombre del Producto</h2>
           <div class="row">
                <div class="column25">
                    <label class="labelPromo">Precio sin descuento:</label>
                </div>
            </div>
            
            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Precio con descuento:</label>
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Descripcion:</label>
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Categoria:</label>
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Ubicacion:</label>
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Inicio de la promocion:</label>
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Hora Inicio:</label>
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Fin de la promocion:</label>
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Hora fin:</label>
                </div>
            </div>

            <div class="">
                <div class="btnDetPromo">
                    <button className='formulario__btnPromo' onClick={()=> history(-1)}>Volver</button>
                </div>
            </div>
            
            <div class="">
                <div class="btnDetPromo">
                    <button  className='formulario__btnPromo' onClick={()=> history(-1)}>Volver</button>
                </div>
            </div>
       
        </div>
    </div>
}
export default DetallesPromo