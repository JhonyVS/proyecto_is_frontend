import axios from 'axios';

const baseUrl = '${process.env.React_APP_API}';
const API = 'http://localhost:8000/api/producto/1`'

fetch(API)
     .then(response => response.json())
     .then(data => console.log(data))
     .catch(error => console.log(error))

export async function getDetProducto () {
    try {
        const respuesta = await axios({
            url: `${baseUrl}/api/producto/1`,
            method: 'GET'
        })
        return respuesta
    }catch (error){
        console.log(error)
    }
}


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