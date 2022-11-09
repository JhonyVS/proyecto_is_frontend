import React, {useEffect,useState} from 'react'
import {MenuList} from '../helpers/MenuList'
import PromoItem from '../components/PromoItem'
import '../styles/Promociones.css'
import AlitasMostaza from '../assets/promociones/alitasMostasa.jpg';



function Promociones() {

  const[products, setProducts] = useState([]);
  useEffect(() => {
    fetchData();

  },[])

  const fetchData = async () => {
    await fetch('http://localhost:8000/api/destacados')
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => {
      console.log(err);
    })
  }

  console.log(products)


  return (
    <div className='menu'>
        <h1 className='menuTile'>Promociones disponibles:</h1>
        <div className="menuList">
            {MenuList.map((promoItem, key) => {
                return(
                  products.map((product) => (
                    <PromoItem 
                          key={product.producto_id} 
                          image = {AlitasMostaza}
                          name={product.nombre} 
                          precio={product.precio} 
                          precioDescuento={product.descuento} />
                          
                  ))

                    // <PromoItem 
                    // key={key}
                    // image={promoItem.image} 
                    // name={promoItem.name} 
                    // precio={promoItem.precio} 
                    // precioDescuento={promoItem.precioDescuento} 
                    // />
                );

            })}
        </div>
    </div>
  )
}

export default Promociones