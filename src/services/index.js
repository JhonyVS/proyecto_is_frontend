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