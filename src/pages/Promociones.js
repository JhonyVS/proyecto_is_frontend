import React, {useEffect,useState} from 'react'
import {MenuList} from '../helpers/MenuList'
import PromoItem from '../components/PromoItem'
import '../styles/Promociones.css'
import AlitasMostaza from '../assets/promociones/alitasMostasa.jpg';


const baseUrl = `${process.env.React_APP_API}/api/destacados`;

function Promociones() {

  const[products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();

  },[])

  const fetchData = async () => {
    await fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(products)


  return (
    <div className='menu'>
        <h1 className='menuTile'>Promociones disponibles</h1>
        <div className="menuList">
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
            
        </div>
    </div>
  )
}

export default Promociones