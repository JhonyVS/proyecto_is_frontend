import React, {useEffect,useState} from 'react'
import {MenuList} from '../helpers/MenuList'
import PromoItem from '../components/PromoItem'
import '../styles/Promociones.css'
import AlitasMostaza from '../assets/promociones/alitasMostasa.jpg';
import axios from "axios";


const baseUrl = `${process.env.React_APP_API}/api/destacados`;
const catURL = `${process.env.React_APP_API}/api/categorias`;


function Promociones() {


const[products, setProducts] = useState([])
const[categorias, setCategorias] = useState([]);

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
},[])


const [catSel, setCatSel] = useState();


  console.log(catSel)

  console.log(products)
  console.log(categorias)

if (catSel == 'Todos'){
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
<<<<<<< HEAD
            {MenuList.map((promoItem, key) => {
              return(
                products.map((product) => (
                  <PromoItem 
                    key={product.producto_id} 
                    image = {AlitasMostaza}
                    name={product.nombre} 
                    precio={product.precio} 
                    recioDescuento={product.descuento} />
                  ))
              );

            })}
            
=======

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

>>>>>>> 63d1581049e41fabf9ad5f9929572f3053eabaf2
        </div>
    </div>
  )
    























}

export default Promociones

