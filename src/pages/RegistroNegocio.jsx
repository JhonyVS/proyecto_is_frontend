import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form';
import imgLeft from '../assets/negocio.jpg'

import '../styles/registroNegocio.css'
            
    


const RegistroNegocio = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
    const history = useNavigate()
    //Aqui se tiene toda la informacion del formulario en data
    //Desde aqui no entiendo bien como puedo hacer el post
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
        <h2 >Registrar Negocio</h2>
        <form id="stripe-login"  onSubmit={handleSubmit(onSubmit)}>
            
            <div  className='c'>
                <div><label className='formulario__label'>Nombre del Negocio</label></div>
                <div><input className='formulario__input' type="text" {...register('nombre',{
                    required: true,
                    maxLength: 64,
                    minLength: 4,
                    pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g
                    
                })}/>


                {errors.nombre?.type === 'required' && <p>El campo "Nombre del Negocio" es requerido</p>}
                {errors.nombre?.type === 'minLength' && <p>El campo "Nombre del Negocio" debe contener mas de 4 caracteres</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo "Nombre del Negocio" debe contener menos de 64 caracteres</p>}
                {errors.nombre?.type === 'pattern' && <p>El campo "Nombre del Negocio" solo admite letras y numeros</p>}</div>
                
            </div>
            <div  className='c'>
                <div><label className='formulario__label'>Nombre del Propietario</label></div>
                <div><input className='formulario__input' type="text" {...register('nombrePropietario',{
                    required: true,
                    pattern: /^[A-Za-zñáéíóúÁÉÍÓÚ\s]+$/g,
                    maxLength: 64,
                    minLength: 4                  
                })}/>

                {errors.nombrePropietario?.type === 'required' && <p>El campo "Nombre del Propietario" es requerido</p>}
                {errors.nombrePropietario?.type === 'minLength' && <p>El campo "Nombre del Propietario" debe contener mas de 4 caracteres</p>}
                {errors.nombrePropietario?.type === 'maxLength' && <p>El campo "Nombre del Propietario" debe contener menos de 64 caracteres</p>}
                {errors.nombrePropietario?.type === 'pattern' && <p>El campo "Nombre del Negocio" solo admite letras y vocales con acento</p>}</div>
            </div>
            <div  className='c'>
                <div><label className='formulario__label'>Ubicación</label></div>
                <div><input className='formulario__input' type="text" {...register('ubicacion', {
                    required: true,
                    pattern: /^[#.0-9a-zA-Z\s,-]+$/,
                    maxLength: 128,
                    minLength: 8
                })}/>
                {errors.ubicacion?.type === 'required' && <p>El campo "Ubicación" es requerido</p>}
                {errors.ubicacion?.type === 'minLength' && <p>El campo "Ubicación" debe contener mas de 8 caracteres</p>}
                {errors.ubicacion?.type === 'maxLength' && <p>El campo "Ubicación" debe contener menos de 64 caracteres</p>}
                {errors.ubicacion?.type === 'pattern' && <p>El campo "Ubicación" solo admite letras, numeros, "#" y "-"</p>}</div>
            </div>
            <div  className='c'>
                <div><label className='formulario__label'>Descripción</label></div>
                <div><input className='formulario__input' type="text"  {...register('descripcion', {
                    required: true,
                    pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g,
                    maxLength: 128,
                    minLength: 8                      
                })}/>
                {errors.descripcion?.type === 'required' && <p>El campo "Descripción" es requerido</p>}
                {errors.descripcion?.type === 'minLength' && <p>El campo "Descripción" debe contener mas de 8 caracteres</p>}
                {errors.descripcion?.type === 'maxLength' && <p>El campo "Descripción" debe contener menos de 64 caracteres</p>}
                {errors.descripcion?.type === 'pattern' && <p>El campo "Descripción" solo admite letras y numeros.</p>}</div>
            </div>
            <div  className='c'>
            <div><label className='formulario__label'>Telefono de contacto</label></div>
                <div><input className='formulario__input' type="number"  {...register('telefono', {
                    required: true,
                    maxLength: 8,
                    minLength: 7,
                    pattern: /(60|70|2|3|4|)*([0-9]*){6}/
                })}/>
                {errors.telefono?.type === 'required' && <p>El campo "Telefono de contacto" es requerido</p>}
                {errors.telefono?.type === 'pattern' && <p>Solo admite telefonos que empiecen por 2,3,4 o celulares que empiezan por 6,7.</p>}
                {errors.telefono?.type === 'minLength' && <p>El campo "Telefono" debe contener almenos 7 digitos</p>}
                {errors.telefono?.type === 'maxLength' && <p>El campo "Telefono" debe contener un maximo de 8 digitos</p>}</div>
            </div>
           
            <div className='a'>    
            <div > <label className='formulario__label'>Hora Apertura</label></div>
            <div > <input className='formulario__input__hora' type="time" {...register('horario_inicio',{
                    required: true
                })}/>
                {errors.horario_inicio?.type === 'required' && <p >Campo obligatorio</p>}</div>
                <div ><label className='formulario__label'>Hora Cierre</label></div>
                <div > <input className='formulario__input__hora' type="time" {...register('horario_cierre',{
                    required:true
                })}/>
                {errors.horario_cierre?.type === 'required' && <p >Campo obligatorio</p>}</div>
                
               
                
            </div>
            
            
            
                <div className='c'>
                    <button className='formulario__btn' type="submit"  >
                Enviar
{/* <input type="submit" value="Enviar"/> */}
            </button>
            
            <button className='formulario__btn' onClick={()=> history(-1)}>Cancelar</button> 
            </div>
            
                
            
            
        </form>
        </div>
    </div>
}


// function RegistroNegocio() {
//   return (
//     <>
//         <Formik
//             onSubmit={() => {
//                 console.log('Formulario Enviado')
//             }}
//         >
//         {(handleSubmit) = > (
//             <form className="formulario" onSubmit={handleSubmit}>

//                 <div>
//                     <label htmlFor='nombreNegocio'>Nombre del Propietario</label>
//                     <input type="text" id="nombreNegocio" placeholder="Ingrese el nombre"></input>
//                 </div>
//                 <div>
//                     <label htmlFor='nombreNegocio'>Ubicacion</label>
//                     <input type="text" id="nombreNegocio" placeholder="Ingrese el nombre"></input>
//                 </div>
//                 <div>
//                     <label htmlFor='Descripcion'>Ubicacion</label>
//                     <input type="text" id="nombreNegocio" placeholder="Ingrese el nombre"></input>
//                 </div>
//                 <div>
//                     <label htmlFor='Descripcion'>Hora de apertura</label>
//                     <input type="text" id="nombreNegocio" placeholder="Ingrese el nombre"></input>
//                 </div>
//                 <div>
//                     <label htmlFor='Descripcion'>Hora de cierre</label>
//                     <input type="text" id="nombreNegocio" placeholder="Ingrese el nombre"></input>
//                 </div>
//             </form>
//         )}


//         </Formik>
    
    
    
//     </>
//   );
// }

export default RegistroNegocio