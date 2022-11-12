import React from 'react'
import imgLeft from '../assets/regneg_left.png'
import { useForm } from 'react-hook-form';
import {useNavigate} from 'react-router-dom'
import '../styles/RegistroPromo.css'
import axios from 'axios';



const baseUrl = `${process.env.React_APP_API}/api/registro/producto`;
 
const RegistroPromo = () =>{
 const {register, formState:{errors}, handleSubmit} = useForm();
 const history = useNavigate()
 
 const onSubmit = async (data) => {
    let state ={
        form:{
            "producto_nombre" : data.producto_nombre,
            "producto_precio" : data.precio_original,
            "promocion_descuento" : data.precio_descuento,
            "producto_descripcion" : data.producto_descripcion,
            "photo" : data.imagen_producto[0],
            "producto_categoria" : data.categ_option, 
            "promocion_fecha_inicio" : data.promocion_fecha_inicio,
            "promocion_fecha_fin" : data.promocion_fecha_fin,
            "promocion_hora_inicio" : data.promocion_hora_inicio,
            "promocion_hora_fin" : data.promocion_hora_fin,
        }
    } 
    console.log(state.form)
        await axios.post(baseUrl, state.form, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        }); 
 }   
    
            
    return <div className='contact'>
        <div 
            className='leftSide'
            style={{backgroundImage: `url(${imgLeft})`}}
        ></div>
        <div className='rightSide'>
        <h2 class="tituloRegPromo">Registrar Promoción</h2>
        <form id="stripe-login"  onSubmit={handleSubmit(onSubmit)}>
            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Nombre del Producto</label>
                </div>
                <div class="column60">
                    <input type="text" class="input_form" {...register('producto_nombre',{
                        required: true,
                        maxLength: 64,
                        minLength: 4,
                        pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g
                        
                        
                    })}/> 
                </div>
            </div>
            <div class="row">
                <div class="column30"></div>
                <div class="column40" >    
                    {errors.producto_nombre?.type === 'required' && <span class="mensajeError">Es necesario el nombre del producto</span>}
                    {errors.producto_nombre?.type === 'minLength' && <span class="mensajeError">Debe tener mas de 4 caracteres</span>}
                    {errors.producto_nombre?.type === 'maxLength' && <span class="mensajeError">Debe tener menos de 64 caracteres</span>}
                    {errors.producto_nombre?.type === 'pattern' && <span class="mensajeError">Solo se permiten números y letras</span>}
                </div>
            </div>
            


            <div class="row">

                <div class="column30">
                    <label class="labelPromo">Precio sin Descuento en Bs.</label>
                </div>
                <div class="column15l">
                    <input  type="number" class="input_formPrecio"{...register('precio_original',{
                        required: true,
                        pattern: /^\d+$/,
                        maxLength: 4
                    })}/>
                </div>
                <div class="column30">
                    <label class="labelPromo">Precio con Descuento en Bs.</label>
                </div>
                <div class="column15l">
                    <input type="number" class="input_formPrecio"{...register('precio_descuento',{
                        required: true,
                        pattern: /^\d+$/,
                        maxLength: 4
                    })}/>
        
                </div>
            </div>
            <div class="row">
                <div class="column15"></div>
                <div class="column30a">
                    {errors.precio_original?.type === 'required' && <span class="mensajeError">Se debe insertar el precio</span>}
                    {errors.precio_original?.type === 'pattern' && <span class="mensajeError">No puede ser menor a 0</span>}
                    {errors.precio_original?.type === 'maxLength' && <span class="mensajeError">No debe ser mayor a 9999 Bs.</span>}
                </div>
                <div class="column30b">
                    {errors.precio_descuento?.type === 'required' && <span class="mensajeError">Se debe insertar el precio</span>}
                    {errors.precio_descuento?.type === 'pattern' && <span class="mensajeError">No puede ser menor a 0</span>}
                    {errors.precio_descuento?.type === 'maxLength' && <span class="mensajeError">No debe ser mayor a 9999 Bs.</span>}
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Descripción</label>
                </div>
                <div class="column60d">
                    <input type="text" class="input_form" {...register('producto_descripcion', {
                        required: true,
                        pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g,
                        maxLength: 128,
                        minLength: 8                      
                    })}/>
                </div>
            </div>
            <div class="row">
                <div class="column30"></div>
                <div class="column40">
                    {errors.producto_descripcion?.type === 'required' && <span class="mensajeError">Se debe ingresar una descripción</span>}
                    {errors.producto_descripcion?.type === 'minLength' && <span class="mensajeError">Debe tener mas de 8 caracteres</span>}
                    {errors.producto_descripcion?.type === 'maxLength' && <span class="mensajeError">Debe tener menos de 64 caracteres</span>}
                    {errors.producto_descripcion?.type === 'pattern' && <span class="mensajeError">Solo permiten números y letras.</span>}
                </div>
            </div>

            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Imagen de Referencia</label>
                </div>
                <div class="column60">
                    <input type="file"class="boxImagen1" id="archivoInput" accept = "image/png, image/jpeg, image/jpg" {...register('imagen_producto',{
                        required: true,
                        
                        
                    })}/>
                </div>
            </div>
            
            <div class="row"> 
                <div class="column30"></div> 
                <div class="column50">
                    {errors.imagen_producto?.type === 'required' && <span class="mensajeError">Es necesario subir una imagen</span>}                                
                </div>              
            </div>


            <div class="row">
                <div class="column25">
                    <label class="labelPromo">Categoría</label>
                </div>
                <div class="column60">
                    <select class="categ_opcion" {...register('categ_option')}>
                        <option value='comida rapida'>Comida Rápida</option>
                        <option value='bebida'>Bebida</option>
                        <option value='postre'>Postre</option>
                        <option value='carne asada'>Carne Asada</option>
                        <option value='otro'>Otros</option>
                    </select>
                </div>
            </div>
            <div class="row"> 
                <div class="column25a">
                    <label class="labelPromo">Inicio de la Promoción</label>
                </div>
                <div class="column15a">
                    <input type="date" class="input_fecha" {...register('promocion_fecha_inicio',{
                        required: true
                    })}/>
                </div>
                <div class="column25a">
                    <label class="labelPromo">Fin de la Promoción</label>
                </div>
                <div class="column15a">
                    <input type="date" class="input_fecha" {...register('promocion_fecha_fin',{
                        required: true
                    })}/>
                </div>   
            </div>
            <div class="row">
                <div class="column10"></div>
                <div class="column30c">
                    {errors.promocion_fecha_inicio?.type === 'required' && <span class="mensajeError">Ingrese una fecha</span>}
                </div>
                <div class="column30d">
                    {errors.promocion_fecha_fin?.type === 'required' && <span class="mensajeError">Ingrese una fecha</span>}
                </div>
            </div>

            <div class="row"> 
                <div class="column25b">
                    <label class="labelPromo">Hora de Inicio</label>
                </div>
                <div class="column15b">
                    <input type="time" class="input_hora" {...register('promocion_hora_inicio',{
                        required: true
                    })}/>
                </div>
                <div class="column25b">
                    <label class="labelPromo">Hora Fin</label>
                </div>
                <div class="column15b">
                    <input type="time" class="input_hora" {...register('promocion_hora_fin',{
                        required:true
                    })}/>
                </div>   
            </div>
            <div class="row">
                <div class="column10"></div>
                <div class="column30c">
                    {errors.promocion_hora_inicio?.type === 'required' && <span class="mensajeError">Ingrese la hora de inicio</span>}
                </div>
                <div class="column30d">
                    {errors.promocion_hora_fin?.type === 'required' && <span class="mensajeError">Ingrese la hora fin</span>}
                </div>
            </div>
            <div class="row">
                <div class="column_btn">
                    <button type="submit" className='formulario__btnPromo'>Registrar</button>
                </div>
                <div class="column_btn">                   
                    <button  className='formulario__btnPromo' onClick={()=> history(-1)}>Cancelar</button>
                </div>
            </div>
            
        </form>
        </div>
    </div>
    
}

export default RegistroPromo