<<<<<<< HEAD
import axios from 'axios'

const base =process.env.React_APP_API
const id =1

export async function getDetProducto () {
    try {
        const respuesta = await axios({
            url: `${base}/api/producto/${id}`,
            method: 'GET'
        })
        return respuesta
    }catch (e){
        console.log(e)
    }
}


//fetch('https://localhost:8000/api/producto/<id-producto>')
//  .then( res => res.json)
//  .then(data =>){
//} 
=======
import axios from 'axios';
const baseUrl = '${process.env.React_APP_API}';


export async function getCategorias(){

    try {
        const response = await axios({
            url: `${baseUrl}/categorias`,
            method: 'GET',
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export async function guardarProducto(productoData){

    try {
        const response = await axios({
            url: `${baseUrl}/registro/producto`,
            method: 'POST',
            data: productoData
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export async function guardarNegocio(negocioData){

    try {
        const response = await axios({
            url: `${baseUrl}/registro/negocio`,
            method: 'POST',
            data: negocioData
        })
        return response
    } catch (error) {
        console.log(error)
    }
}
>>>>>>> origin/marco
