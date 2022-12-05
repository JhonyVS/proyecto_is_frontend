import React, {useEffect,useState} from 'react';
import PromoItem from '../components/PromoItem';
import '../styles/Promociones.css';
import AlitasMostaza from '../assets/promociones/alitasMostasa.jpg';
import axios from "axios";
import "../styles/buscar.css";
import { FiSearch } from "react-icons/fi";


const baseUrl = `${process.env.React_APP_API}/api/destacados`;
const catURL = `${process.env.React_APP_API}/api/categorias`;
//const buscarURL = `${process.env.React_APP_API}/api/producto/filtro`;


function Promociones() {
const [catSel, setCatSel] = useState();
const[products, setProducts] = useState([]);
const[categorias, setCategorias] = useState([]);

const[prods, setProds] = useState([]);

// buscador
const[resultados, setResultados] = useState([]);
const[query, setQuery] = useState("");
const buscar = (event) => {
  setQuery(event.target.value.toLowerCase());
}
const comboSel = (event) => {
  setCatSel(event.target.value);
  setProds(products.filter(prod => prod.categoria === catSel));
  resultados.length=0;
}
const comboAll = (event) => {
  setCatSel(event.target.value);
  setProds(products.filter(prod=> prod.catgoria !== catSel));
  resultados.length=0;
}
function llenar(event){
  if (event.key === 'Enter' && query.length>2){
    setResultados(()=>{return products.filter((dato)=> dato.nombre.toLowerCase().includes(query.toLocaleLowerCase()))});
    console.log("**** presionaste enter *****");
    prods.length=0;
  }
}
// f buscador

useEffect(() => {
  axios.get(baseUrl).then(res =>{console.log(res.data)
    setProducts(res.data)
  }).catch(err => {
    console.log(err)
  }) 
  
  axios.get(catURL).then(res =>{
  console.log(res.data)
  setCategorias(res.data)
  }).catch(err => {
    console.log(err)
  }) 

},[]);

  console.log(products)
  console.log(categorias)
  console.log(prods)

if (catSel === 'Todos' || catSel === undefined){
  return (
    <div className='menu'>
      <div className='titulo'>
        <h1 className='menuTitle'>Promociones disponibles</h1>
      </div>
      <div className="buscar">
         <div id="cont">
          <button>
            <FiSearch />
          </button>
          <input
          placeholder="buscar"
          onChange={buscar.bind(this)}
          onKeyDown={llenar}
          />
          </div>
        </div>
    <div class="row">
      <div className='leftTexto'>
        <div className='labelTexto'>Buscar por categoria: </div>
      </div>
      <div className='rightSelectBox'>
        <select className='categ_option' onChange={comboAll} >
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
        
        {prods.map((product) => {
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
      <div className='titulo'>
        <h1 className='menuTitle'>Promociones disponibles</h1>
        </div>
        <div className="buscar">
         <div id="cont">
          <button>
            <FiSearch />
          </button>
          <input
          placeholder="buscar"
          onChange={buscar.bind(this)}
          onKeyDown={llenar}
          />
          </div>
        </div>
      
    <div class="row">
      <div className='leftTexto'>
        <div className='labelTexto'>Buscar por categoria: </div>
      </div>
      <div className='rightSelectBox'>
        
        <select className='categ_option'  onChange={comboSel} >
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
        
        {prods.map((product) => {
          return(
            <PromoItem 
            key={product.producto_id} 
            image = {AlitasMostaza}
            name={product.nombre} 
            precio={product.precio} 
            precioDescuento={product.descuento} />
          );
        })}

          {resultados.map((product) => {
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
    </div>
  )

}

export default Promociones

