import React, {useEffect,useState,useRef} from 'react'
import PromoItem from '../components/PromoItem'
import '../styles/Promociones.css'
import AlitasMostaza from '../assets/promociones/alitasMostasa.jpg';
import axios from "axios";
import "../styles/buscar.css";
import { FiSearch } from "react-icons/fi";


const baseUrl = `${process.env.React_APP_API}/api/destacados`;
const catURL = `${process.env.React_APP_API}/api/categorias`;
const buscarURL = `${process.env.React_APP_API}/api/producto/filtro`;


function Promociones() {

const[products, setProducts] = useState([])
const[categorias, setCategorias] = useState([]);

const[query, setQuery] = useState("");
const[data , setData] = useState([]);
const buscar = (event) => {
  setQuery(event.target.value.toLowerCase());
}
console.warn(query)


useEffect(() => {
  axios
    .get(baseUrl)
    .then(res =>{
    console.log(res.data)
    setProducts(res.data)
  }).catch(err => {
    console.log(err)
  }) 
  
  axios
  .get(catURL)
  .then(res =>{
  console.log(res.data)
  setCategorias(res.data)
  }).catch(err => {
    console.log(err)
  }) 
  var formData = new FormData();
    formData.append('tipo', 'B');
    formData.append('contenido', query);
  const respuesta = axios({
    method: "post",
    url: buscarURL,
    data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
    .then(function (res) {
      //handle success
      setData(res.data);
      console.log(data);
    })
    .catch(function (res) {
      //handle error
      console.log(res);
    });

  /** const buscarProductos = async () =>{ 
    const res = await axios.get(buscarURL);
    setData(res.data);
  };*/

},[]);


const [catSel, setCatSel] = useState();
const ref = useRef();

  console.log(catSel)

  console.log(products)
  console.log(categorias)

if (catSel === 'Todos'){
  return (
    <div className='menu'>
        <h1 className='menuTile'>Promociones disponibles</h1>

    <div class="row">
      <div className='leftTexto'>
        <div className='labelTexto'>Buscar por categoria: </div>
      </div>
      <div className='rightSelectBox'>
        <select className='categ_option'  onChange={e=>setCatSel(e.target.value)} >
          <option>Todos</option>
            {categorias.map((cats) => (
                <option key={cats.categoria} value={cats.categoria}>
                  {cats.categoria}
                </option>
            ))}
        </select>
      </div>
    </div>

      <div className="menuList">
      
        {products.map((product) => {
          return(
            <PromoItem 
            key={product.producto_id} 
            image = {AlitasMostaza}
            name={product.nombre} 
            precio={product.precio} 
            precioDescuento={product.descuento} />
          );
        })}

        </div>
    </div>
  )
}
  return (

    <div className='menu'>
        <h1 className='menuTile'>Promociones disponibles</h1>
        <div className="buscar">
      <div id="cont">
        <button>
          <FiSearch />
        </button>
        <input
          placeholder="buscar"
          onChange={buscar.bind(this)}
          onKeyPress={event => {
                if (event.key === 'Enter') {
                  console.log("presionaste enter");
                  this.respuesta();
                  <div className="menuList">
      
                    {data.map((product) => {
                return(
                  <PromoItem 
                    key = {product.producto_id} 
                    image = {AlitasMostaza}
                    name = {product.nombre} 
                    precio = {product.precio} 
                    precioDescuento = {product.descuento} />
                  );
                    })}
                </div>
                }
              }
            }
        />
       </div>
      </div>
      
    <div class="row">
      <div className='leftTexto'>
        <div className='labelTexto'>Buscar por categoria: </div>
      </div>
      <div className='rightSelectBox'>
        <select className='categ_option'  onChange={e=>setCatSel(e.target.value)} >
          <option>Todos</option>
            {categorias.map((cats) => (
                <option key={cats.categoria} value={cats.categoria}>
                  {cats.categoria}
                </option>
            ))}
        </select>
      </div>
    </div>

        <div className="menuList">

        {products.filter(prod => prod.categoria === catSel).map((product) => {
          return(
            <PromoItem 
            key={product.producto_id} 
            image = {AlitasMostaza}
            name={product.nombre} 
            precio={product.precio} 
            precioDescuento={product.descuento} />
          );
        })}
        
        {/* {products.map((product) => {
          return(
            <PromoItem 
            key={product.producto_id} 
            image = {AlitasMostaza}
            name={product.nombre} 
            precio={product.precio} 
            precioDescuento={product.descuento} />
          );
        })} */}

        </div>
    </div>
  )


    

}

export default Promociones

