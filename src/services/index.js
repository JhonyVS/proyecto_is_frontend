import axios from 'axios';
const baseUrl = proces.env.REACT_APP_BASE_URL


export async function getCategorias(){

    try {
        const response = await axios({
            url: `${baseURL}/categorias`,
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
            url: `${baseURL}/registro/producto`,
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
            url: `${baseURL}/registro/negocio`,
            method: 'POST',
            data: negocioData
        })
        return response
    } catch (error) {
        console.log(error)
    }
}