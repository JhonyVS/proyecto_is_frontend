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

const[productos, setProductos] = useState([])



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

  axios
    .get(buscarURL)
    .then(res =>{
    console.log(res.data)
    setProductos(res.data)
  }).catch(err => {
    console.log(err)
  }) 

},[])


const [catSel, setCatSel] = useState();
const ref = useRef();
const [active, setActive] = useState(false);/**aaaaa */

  console.log(catSel)

  console.log(products)
  console.log(categorias)

  console.log(productos)

if (catSel === 'Todos' || catSel == undefined){
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
            image = {product.imagen}
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
        <button onClick={() => ref.current.focus()}>
          <FiSearch />
        </button>
        <input
          ref={ref}
          placeholder="buscar"
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={event => {this.setState({query: event.target.value})}}
                onKeyPress={event => {
                if (event.key === 'Enter') {
                  <div className="menuList">
      
                       {productos.map((product) => {
                    return(
                      <PromoItem 
                        key={product.producto_id} 
                        image = {product.imagen}
                        name={product.nombre} 
                        precio={product.precio} 
                        precioDescuento={product.descuento} />
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
            image = {product.imagen}
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

