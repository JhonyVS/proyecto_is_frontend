import React from 'react'
import imgLeft from '../assets/promociones/alitasMostasa.jpg'
import '../styles/DetallesPromo.css'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import { useEffect  , useState} from 'react'



const id=1

const baseUrl = `${process.env.React_APP_API}/api/producto/${id}`


function DetallesPromo() {
    
    
    const [productos, setProductos]= useState([]);
    const obtenerDetProducto = async()=>{
        await axios.get(baseUrl)
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
    return <div className='contactVer'>
         
        <div 
            className='leftSide1'
            style={{backgroundImage: `url(${imgLeft})`}}
           
        >
            {productos && productos.map((producto)=>(
            <tr key={(producto.id)}>
                <td class="">{(producto.image)}</td>
            </tr>
            ))}
        </div>
     

        <div className='rightSide1'>
        
    
        <h2 class="row2">
        {productos && productos.map((producto)=>(
            <tr key={(producto.id)}>
                <td class="tituloDetPromo">{(producto.nombre)}</td>
            </tr>

            ))}
        </h2>
           <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Precio sin descuento: </label>
                
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.precio)}</td>
                </tr>
                ))}
            </div>
            
            <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Precio con descuento:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.descuento)}</td>
                </tr>
                ))}
            </div>

            <div class="row1">
                <div class="columnVer1">
                    <label class="labelDetPromo">Descripcion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.descrip)}</td>
                </tr>
                ))}
            </div>

            <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Categoria:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.categoria)}</td>
                </tr>
                ))}
            </div>

            <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Ubicacion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.ubicacion)}</td>
                </tr>
                ))}
            </div>

            <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Inicio de la promocion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.fecha_ini)}</td>
                </tr>
                ))}
            </div>

            <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Hora Inicio:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.hora_ini)}</td>
                </tr>
                ))}
            </div>

            <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Fin de la promocion:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.fecha_fin)}</td>
                </tr>
                ))}
            </div>

            <div class="row1">
                <div class="columnVer">
                    <label class="labelDetPromo">Hora fin:</label>
                </div>
                {productos && productos.map((producto)=>(
                <tr key={(producto.id)}>
                    <td class="datosDet">{(producto.hora_fin)}</td>
                </tr>
                ))}
            </div>

            <div class="">
                <div class="btnDetPromo" >
                    <button className='btnDetPromo' onClick={()=> history(-1)}>Volver</button>
                </div>
            </div>
        </div>
    </div>
}
export default DetallesPromo