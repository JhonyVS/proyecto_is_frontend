import React from 'react'
import {MenuList} from '../helpers/MenuList'
import PromoItem from '../components/PromoItem'
import '../styles/Promociones.css'

function Promociones() {
  return (
    <div className='menu'>
        <h1 className='menuTile'>Promociones disponibles:</h1>
        <div className="menuList">
            {MenuList.map((promoItem, key) => {
                return(
                    <PromoItem 
                    key={key}
                    image={promoItem.image} 
                    name={promoItem.name} 
                    precio={promoItem.precio} 
                    precioDescuento={promoItem.precioDescuento} 
                    />
                );
 
            })}
        </div>
    </div>
  )
}

export default Promociones