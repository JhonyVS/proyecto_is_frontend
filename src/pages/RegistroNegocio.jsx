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
            <h2 class="tituloRegNeg">Registrar Negocio</h2>
            <form id="stripe-login"  onSubmit={handleSubmit(onSubmit)}>
                <div class="row">
                    <div class="column_nombreNeg">
                        <label class="labelNeg">Nombre del negocio</label>
                    </div>
                    <div class="column_nomNeg">
                        <input type="text" class="input_formNeg"{...register('nombre',{
                            required: true,
                            maxLength: 64,
                            minLength: 4,
                            pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ]+$/g
                            
                        })}/>
                    </div>
                </div> 
                <div class="row">
                    <div class="column30N"></div>
                    <div class="column40N">
                        {errors.nombre?.type === 'required' && <span class="mensajeError2">Es necesario el Nombre del Negocio</span>}
                        {errors.nombre?.type === 'minLength' && <span class="mensajeError2">Debe tener mas de 4 caracteres</span>}
                        {errors.nombre?.type === 'maxLength' && <span class="mensajeError2">Debe tener menos de 64 caracteres</span>}
                        {errors.nombre?.type === 'pattern' && <span class="mensajeError2">Solo se permiten números y letras</span>}
                    </div>
                </div>
                <div class="row">
                    <div class="column_nombreProp">
                        <label class="labelNeg">Nombre del propietario</label>
                    </div>
                    <div class="column_nomProp">
                        <input type="text" class="input_formNeg"{...register('nombrePropietario',{
                            required: true,
                            pattern: /^[A-Za-zñáéíóúÁÉÍÓÚ]+$/g,
                            maxLength: 64,
                            minLength: 4                  
                        })}/>
                    </div>
                </div>
                <div class="row">
                    <div class="column30N"></div>
                    <div class="column40N">
                        {errors.nombrePropietario?.type === 'required' && <span class="mensajeError2">Es necesario el Nombre del Propietario</span>}
                        {errors.nombrePropietario?.type === 'minLength' && <span class="mensajeError2">Debe tener mas de 4 caracteres</span>}
                        {errors.nombrePropietario?.type === 'maxLength' && <span class="mensajeError2">Debe tener menos de 64 caracteres</span>}
                        {errors.nombrePropietario?.type === 'pattern' && <span class="mensajeError2">Solo admite letras y vocales con acento</span>}
                    </div>
                </div>
                <div class="row">
                    <div class="column_logoNeg">
                        <label class="labelNeg">Logo del negocio</label>
                    </div>
                    <div class="column_logNeg">
                        <input type='file' class="boxImagen2"{...register('imagenLogo',{
                            required: true,     
                        })}/>
                    </div>
                </div>
                <div class="row">
                    <div class="column30N"></div>
                    <div class="column40N">
                        {errors.imagenLogo?.type === 'required' && <span class="mensajeError2">Es necesario subir el logo</span>}
                    </div>
                </div>
                <div class="row">
                    <div class="column_ubiNeg">
                        <label class="labelNeg">Ubicación</label>
                    </div>
                    <div class="column_ubicacion">
                        <input type="text" class="input_formNeg" {...register('ubicacion', {
                            required: true,
                            pattern: /^[#.0-9a-zA-Z\s,-]+$/,
                            maxLength: 128,
                            minLength: 8
                        })}/>
                    </div>
                </div>
                <div class="row">
                    <div class="column30N"></div>
                    <div class="column40N">
                        {errors.ubicacion?.type === 'required' && <span class="mensajeError2">Es necesario ingresar la ubición</span>}
                        {errors.ubicacion?.type === 'minLength' && <span class="mensajeError2">Debe tener mas de 8 caracteres</span>}
                        {errors.ubicacion?.type === 'maxLength' && <span class="mensajeError2">Debe tener menos de 128 caracteres</span>}
                        {errors.ubicacion?.type === 'pattern' && <span class="mensajeError2">Solo admite letras, numeros, "#" y "-"</span>}
                    </div>
                </div>
                <div class="row">
                    <div class="column_descripcionNeg">
                        <label class="labelNeg">Descripción</label>
                    </div>
                    <div class="column_descNeg">
                        <input type="text" class="input_formNeg"{...register('descripcion', {
                            required: true,
                            pattern: /^[A-Za-z0-9ñáéíóúÁÉÍÓÚ\s]+$/g,
                            maxLength: 128,
                            minLength: 8                      
                        })}/>
                    </div>
                </div>
                <div class="row">
                    <div class="column30N"></div>
                    <div class="column40N">
                        {errors.descripcion?.type === 'required' && <span class="mensajeError2">Se debe ingresar una descripción</span>}
                        {errors.descripcion?.type === 'minLength' && <span class="mensajeError2">Debe tener mas de 8 caracteres</span>}
                        {errors.descripcion?.type === 'maxLength' && <span class="mensajeError2">Debe tener menos de 128 caracteres</span>}
                        {errors.descripcion?.type === 'pattern' && <span class="mensajeError2">Solo admite letras y numeros.</span>}
                    </div>
                </div>
                <div class="row">
                    <div class="column_horaNeg">
                        <label class="labelNeg">Hora Apertura</label>
                    </div>
                    <div class="column_horaNegocio">
                        <input type="time" class="input_horaNeg"{...register('horario_inicio',{
                            required: true
                        })}/>
                    </div>
                    <div class="column_horaNeg">
                        <label class="labelNeg">Hora Cierre</label>
                    </div>
                    <div class="column_horaNegocio">
                        <input type="time" class="input_horaNeg"{...register('horario_cierre',{
                            required: true
                        })}/>
                    </div>
                </div>
                <div class="row">
                    <div class="column10N"></div>
                    <div class="column30HN">
                        {errors.horario_inicio?.type === 'required' && <span class="mensajeError2">Ingrese Hora Apertura</span>}
                    </div>
                    <div class="column30HN2">
                        {errors.horario_cierre?.type === 'required' && <span class="mensajeError2">Ingrese Hora Cierre</span>}
                    </div>
                </div>


                <div class="row">
                    <div class="column_numUsu">
                        <label class="labelNeg">Número Ref.</label>
                    </div>
                    <div class="column_numUsuInput">
                        <input type="number" class="input_formDoble"{...register('telefono', {
                            required: true,
                            maxLength: 8,
                            minLength: 7,
                            pattern: /(60|70|2|3|4|)*([0-9]*){6}/
                        })}/>
                    </div>
                    <div class="column_numUsu">
                        <label class="labelNeg">Nombre de usuario</label>
                    </div>
                    <div class="column_numUsuInput">
                        <input type="text" class="input_formDoble"{...register('nombreUsuario', {
                            required: true,
                            pattern: /^[A-Za-z0-9ñ]+$/g,
                            maxLength: 32,
                            minLength: 8                      
                        })}/>
                    </div>
                </div>
                <div class="row">
                    <div class="column10N"></div>
                    <div class="column30HN">
                        {errors.telefono?.type === 'required' && <span class="mensajeError2">Es necesario el Número Ref.</span>}
                        {errors.telefono?.type === 'pattern' && <span class="mensajeError2">Número no valido</span>}
                        {errors.telefono?.type === 'minLength' && <span class="mensajeError2">Debe tener al menos 7 dígitos</span>}
                        {errors.telefono?.type === 'maxLength' && <span class="mensajeError2">Debe tener un máximo de 8 dígitos</span>}
                    </div>
                    <div class="column30HN2">
                        {errors.nombreUsuario?.type === 'required' && <span class="mensajeError2">Es necesario el Nombre de usuario</span>}
                        {errors.nombreUsuario?.type === 'minLength' && <span class="mensajeError2">Debe tener mas de 8 caracteres</span>}
                        {errors.nombreUsuario?.type === 'maxLength' && <span class="mensajeError2">Debe tener menos de 32 caracteres</span>}
                        {errors.nombreUsuario?.type === 'pattern' && <span class="mensajeError2">Solo admite letras y números.</span>}
                    </div>
                </div>


                <div class="row">
                    <div class="column_contraseña">
                        <label class="labelNeg">Contraseña</label>
                    </div>
                    <div class="column_password">
                        <input type="password" class="input_formDoble"{...register('contraseña', {
                            required: true,
                            minLength: 8                      
                        })}/>
                    </div>
                    <div class="column_contraseña">
                        <label class="labelNeg">Repetir contraseña</label>
                    </div>
                    <div class="column_password">
                        <input type="password" class="input_formDoble"{...register('repContraseña', {
                            required: true,                     
                        })}/>
                    </div>
                </div>
                <div class="row">
                    <div class="column10N"></div>
                    <div class="column30HN">
                        {errors.contraseña?.type === 'required' && <span class="mensajeError2">Es nesesario la Contraseña</span>}
                        {errors.contraseña?.type === 'minLength' && <span class="mensajeError2">Debe tener mas de 8 caracteres</span>}
                    </div>
                    <div class="column30HN2">
                        {errors.repContraseña?.type === 'required' && <span class="mensajeError2">Las contraseñas no coinciden</span>}
                    </div>
                </div>        

                <div class="row">
                    <div class="column_btnNeg">
                        <button type="submit" class="formulario__btnNeg">Registrar</button>
                    </div>
                    <div class="column_btnNeg">
                        <button class="formulario__btnNeg" onClick={()=> history(-1)}>Cancelar</button>
                    </div>
                </div>               
            </form>
        </div>
    </div>
}
export default RegistroNegocio