import axios from 'axios'

const base =process.env.React_APP_API

export async function getDetProducto () {
    try {
        const respuesta = await axios({
            url: `${base}/api/producto/${id}`,
            method: 'GET'
        })
        return respuesta
    }catch (error){
        console.log(error)
    }
}

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
