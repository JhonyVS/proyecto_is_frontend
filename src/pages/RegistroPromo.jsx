import React from 'react'
import imgLeft from '../assets/regneg_left.png'
import { useForm } from 'react-hook-form';
import '../styles/RegistroPromo.css'

function RegistroPromo() {
    const {register, formState:{errors}, handleSubmit} = useForm();


    const onSubmit = async (data) => {
        console.log(data);
        console.log(data.nombre);


        
    }

    return <div className='contact'>
        <div 
            className='leftSide'
            style={{backgroundImage: `url(${imgLeft})`}}
        ></div>

        <div className='rightSide'>
        <h2 className='form'>Registrar Promocion</h2>
        <form id="stripe-login"  onSubmit={handleSubmit(onSubmit)}>
            <div className="input-block">
                <label >Nombre del Producto*</label>
                <input type="text" {...register('producto_nombre',{
                    required: true,
                    maxLength: 64,
                    minLength: 4,
                    pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g
                    
                })}/>
                {errors.producto_nombre?.type === 'required' && <p>El campo "Nombre del Producto" es requerido</p>}
                {errors.producto_nombre?.type === 'minLength' && <p>El campo "Nombre del Producto" debe contener mas de 4 caracteres</p>}
                {errors.producto_nombre?.type === 'maxLength' && <p>El campo "Nombre del Producto" debe contener menos de 64 caracteres</p>}
                {errors.producto_nombre?.type === 'pattern' && <p>El campo "Nombre del Producto" solo admite letras y numeros</p>}
            </div>


            <div className="input-block">
                <label >Precio original en Bs.*</label>
                <input type="number" {...register('precio_original',{
                    required: true,
                    pattern: /^\d+$/,
                    maxLength: 4
                })}/>
                {errors.precio_original?.type === 'required' && <p>El campo "Precio original" es requerido</p>}
                {errors.precio_original?.type === 'pattern' && <p>El campo "Precio original" solo admite numeros positivos</p>}
                {errors.precio_original?.type === 'maxLength' && <p>El campo "Precio original" no admite montos superiores a 9999 Bs.</p>}
            </div>

            <div className="input-block">
                <label >Precio con descuento en Bs.*</label>
                <input type="number" {...register('precio_descuento',{
                    required: true,
                    pattern: /^\d+$/,
                    maxLength: 4
                })}/>
                {errors.precio_descuento?.type === 'required' && <p>El campo "Precio con descuento" es requerido</p>}
                {errors.precio_descuento?.type === 'pattern' && <p>El campo "Precio con descuento" solo admite numeros positivos</p>}
                {errors.precio_descuento?.type === 'maxLength' && <p>El campo "Precio con descuento" no admite montos superiores a 9999 Bs.</p>}
            </div>

            <div className="input-block">
                <label >Descripción*</label>
                <input type="text"  {...register('producto_descripcion', {
                    required: true,
                    pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g,
                    maxLength: 128,
                    minLength: 8                      
                })}/>
                {errors.producto_descripcion?.type === 'required' && <p>El campo "Descripción" es requerido</p>}
                {errors.producto_descripcion?.type === 'minLength' && <p>El campo "Descripción" debe contener mas de 8 caracteres</p>}
                {errors.producto_descripcion?.type === 'maxLength' && <p>El campo "Descripción" debe contener menos de 64 caracteres</p>}
                {errors.producto_descripcion?.type === 'pattern' && <p>El campo "Descripción" solo admite letras y numeros.</p>}
            </div>


            <div className="input-block">
                <label >Ubicación*</label>
                <input type="text" {...register('promocion_ubicacion', {
                    required: true,
                    pattern: /^[#.0-9a-zA-Z\s,-]+$/,
                    maxLength: 128,
                    minLength: 8
                })}/>
                {errors.promocion_ubicacion?.type === 'required' && <p>El campo "Ubicación" es requerido</p>}
                {errors.promocion_ubicacion?.type === 'minLength' && <p>El campo "Ubicación" debe contener mas de 8 caracteres</p>}
                {errors.promocion_ubicacion?.type === 'maxLength' && <p>El campo "Ubicación" debe contener menos de 64 caracteres</p>}
                {errors.promocion_ubicacion?.type === 'pattern' && <p>El campo "Ubicación" solo admite letras, numeros, "#" y "-"</p>}
            </div>                


            <div className="input-block">
                <label >Categoría*</label>
                <select {...register('categoria')}>
                    <option value='comida rapida'>Comida Rapida</option>
                    <option value='bebida'>Bebida</option>
                    <option value='postre'>Postre</option>
                    <option value='carne asada'>Carne Asada</option>
                    <option value='otro'>Otros</option>
                </select>
            </div>


            <div className="input-block">    
                <label >Fecha de inicio de la promoción*</label>
                <input type="date" {...register('promocion_fecha_inicio',{
                    required: true
                })}/>
                {errors.promocion_fecha_inicio?.type === 'required' && <p>El campo "Fecha de Inicio" es requerido</p>}                
            </div>

            <div className="input-block">    
                <label >Fecha final de la promoción*</label>
                <input type="date" {...register('promocion_fecha_fin',{
                    required: true
                })}/>
                {errors.promocion_fecha_fin?.type === 'required' && <p>El campo "Fecha Fin" es requerido</p>}                
            </div>

            <div className="input-block">    
                <label >Hora de Inicio*</label>
                <input type="time" {...register('promocion_hora_inicio',{
                    required: true
                })}/>
                {errors.promocion_hora_inicio?.type === 'required' && <p>El campo "Hora de Inicio" es requerido</p>}
            
            
            </div>
            <div className="input-block">
                <label >Hora Fin*</label>
                <input type="time" {...register('promocion_hora_fin',{
                    required:true
                })}/>
                {errors.promocion_hora_fin?.type === 'required' && <p>El campo "Hora Fin" es requerido</p>}
            </div>
            <button className="input-button" type="submit" >
                Enviar
            </button>

        </form>
        </div>
    </div>
}

export default RegistroPromo