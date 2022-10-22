import React from 'react'
import imgLeft from '../assets/negocio.jpg'
import {telefonoValidator} from '../components/validators'
import '../styles/registroNegocio.css'
import { useForm } from 'react-hook-form';

const RegistroNegocio = () => {
    const {register, formState:{errors}, handleSubmit} = useForm();
   
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
        <h2 className='form'>Registrar Negocio</h2>
        <form id="stripe-login"  onSubmit={handleSubmit(onSubmit)}>
            <div className="formInput">
                <label >Nombre del Negocio</label>
                <input type="text" {...register('nombre',{
                    required: true,
                    maxLength: 64,
                    minLength: 4,
                    pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g
                    
                })}/>


                {errors.nombre?.type === 'required' && <p>El campo "Nombre del Negocio" es requerido</p>}
                {errors.nombre?.type === 'minLength' && <p>El campo "Nombre del Negocio" debe contener mas de 4 caracteres</p>}
                {errors.nombre?.type === 'maxLength' && <p>El campo "Nombre del Negocio" debe contener menos de 64 caracteres</p>}
                {errors.nombre?.type === 'pattern' && <p>El campo "Nombre del Negocio" solo admite letras y numeros</p>}
                
            </div>
            <div class="field padding-bottom--24">
                <label >Nombre del Propietario</label>
                <input type="text" {...register('nombrePropietario',{
                    required: true,
                    pattern: /^[A-Za-zñáéíóúÁÉÍÓÚ\s]+$/g,
                    maxLength: 64,
                    minLength: 4                  
                })}/>

                {errors.nombrePropietario?.type === 'required' && <p>El campo "Nombre del Propietario" es requerido</p>}
                {errors.nombrePropietario?.type === 'minLength' && <p>El campo "Nombre del Propietario" debe contener mas de 4 caracteres</p>}
                {errors.nombrePropietario?.type === 'maxLength' && <p>El campo "Nombre del Propietario" debe contener menos de 64 caracteres</p>}
                {errors.nombrePropietario?.type === 'pattern' && <p>El campo "Nombre del Negocio" solo admite letras y vocales con acento</p>}
            </div>
            <div class="field padding-bottom--24">
                <label >Ubicación</label>
                <input type="text" {...register('ubicacion', {
                    required: true,
                    pattern: /^[#.0-9a-zA-Z\s,-]+$/,
                    maxLength: 128,
                    minLength: 8
                })}/>
                {errors.ubicacion?.type === 'required' && <p>El campo "Ubicación" es requerido</p>}
                {errors.ubicacion?.type === 'minLength' && <p>El campo "Ubicación" debe contener mas de 8 caracteres</p>}
                {errors.ubicacion?.type === 'maxLength' && <p>El campo "Ubicación" debe contener menos de 64 caracteres</p>}
                {errors.ubicacion?.type === 'pattern' && <p>El campo "Ubicación" solo admite letras, numeros, "#" y "-"</p>}
            </div>
            <div class="field padding-bottom--24">
                <label >Descripción</label>
                <input type="text"  {...register('descripcion', {
                    required: true,
                    pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g,
                    maxLength: 128,
                    minLength: 8                      
                })}/>
                {errors.descripcion?.type === 'required' && <p>El campo "Descripción" es requerido</p>}
                {errors.descripcion?.type === 'minLength' && <p>El campo "Descripción" debe contener mas de 8 caracteres</p>}
                {errors.descripcion?.type === 'maxLength' && <p>El campo "Descripción" debe contener menos de 64 caracteres</p>}
                {errors.descripcion?.type === 'pattern' && <p>El campo "Descripción" solo admite letras y numeros.</p>}
            </div>
            <div class="field padding-bottom--24">
            <label >Telefono de contacto</label>
                <input type="number"  {...register('telefono', {
                    required: true,
                    maxLength: 8,
                    minLength: 7,
                    pattern: /(60|70|2|3|4|)*([0-9]*){6}/
                })}/>
                {errors.telefono?.type === 'required' && <p>El campo "Telefono de contacto" es requerido</p>}
                {errors.telefono?.type === 'pattern' && <p>Solo admite telefonos que empiecen por 2,3,4 o celulares que empiezan por 6,7.</p>}
                {errors.telefono?.type === 'minLength' && <p>El campo "Telefono" debe contener almenos 7 digitos</p>}
                {errors.telefono?.type === 'maxLength' && <p>El campo "Telefono" debe contener un maximo de 8 digitos</p>}
            </div>
            <div class="field padding-bottom--24">    
                <label >Hora Apertura</label>
                <input type="time" {...register('horario_inicio',{
                    required: true
                })}/>
                {errors.horario_inicio?.type === 'required' && <p>El campo "Hora Apertura" es requerido</p>}
            </div>
            <div class="field padding-bottom--24">
                <label >Hora Cierre</label>
                <input type="time" {...register('horario_cierre',{
                    required:true
                })}/>
                {errors.horario_cierre?.type === 'required' && <p>El campo "Hora Cierre" es requerido</p>}
            </div>
            <button type="submit" >
                Enviar
{/* <input type="submit" value="Enviar"/> */}
            </button>

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