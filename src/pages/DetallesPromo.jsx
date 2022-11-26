import React from 'react'
import imgLeft from '../assets/regneg_left.png'
import '../styles/DetallesPromo.css'
import {useNavigate} from 'react-router-dom'

import axios from 'axios'
import { useEffect  , useState} from 'react'

const id =3
const API = 'http://localhost:8000/api/producto/1`'
const baseUrl = `${process.env.React_APP_API}/api/producto/${id}`

function DetallesPromo() {
        
    
    //const history1 = useNavigate()
    
    //fetch(API)
    // .then(response => response.json())
    // .then(data => mostrarData(data))
    // .catch(error => console.log(error))

    //function mostrarData(data)  {
        //console.log(data)
        //const h3 = document.createElement("h3");
        //    h3.textContent = data[0].nombre
        //const div =document.createElement('div')
        //   div.appendChild(h3);

        //row.appendChild(div)
    //}
    //mostrarData()
    const [productos, setProductos]= useState([]);
    const obtenerDetProducto = async()=>{
        await axios.get(API)
        .then(response=>{
           setProductos(response.data)
        }).catch(error=>{
            console.log(error)
        })
    }

    useEffect(()=>{
        obtenerDetProducto();
    })

    const history = useNavigate()
    return <div className='contact'>
         
        <div 
            className='leftSide'
            style={{backgroundImage: `url(${imgLeft})`}}
           
        >
            {/* {productos && productos.map((producto)=>(
            <tr key={(producto.nombre)}>
                <td class="tituloDetPromo">{(producto.nombre)}</td>
            </tr>

        ))} */}
        </div>
     

        <div className='rightSide'>
        
    
        <h2 class="row1">
        {productos && productos.map((producto)=>(
            <tr key={(producto.id)}>
                <td class="tituloDetPromo">{(producto.nombre)}</td>
            </tr>

            ))}
        </h2>
           <div class="row">
                <div class="column25">
                    <label class="labelPromo">Precio sin descuento: </label>
                
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.precio)}</td>
                </tr>
                ))}
            </div>
            
            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Precio con descuento:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.descuento)}</td>
                </tr>
                ))}
            </div>

            <div class="row">
                <div class="column26">
                    <label class="labelPromo">Descripcion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.descrip)}</td>
                </tr>
                ))}
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Categoria:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.categoria)}</td>
                </tr>
                ))}
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Ubicacion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.ubicacion)}</td>
                </tr>
                ))}
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Inicio de la promocion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.fecha_ini)}</td>
                </tr>
                ))}
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Hora Inicio:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.hora_ini)}</td>
                </tr>
                ))}
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Fin de la promocion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.fecha_fin)}</td>
                </tr>
                ))}
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Hora fin:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datos">{(producto.hora_fin)}</td>
                </tr>
                ))}
            </div>

            <div class="">
                <div class="btnDetPromo">
                    <button className='formulario__btnPromo' onClick={()=> history(-1)}>Volver</button>
                </div>
            </div>
        </div>
    </div>
}
export default DetallesPromo