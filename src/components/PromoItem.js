import React from 'react'
import DetallesPromo from '../pages/DetallesPromo'

function PromoItem({id, image, name, precio, precioDescuento}) {

  console.log(id)
  const idDet=id
  return (
    
    <a href='detallesPromocion'>
      <button className="menuItem" >
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p> Precio sin descuento: {precio} Bs. </p>
        <p> Precio con descuento: {precioDescuento} Bs.  </p>
        <p>ID: {id}</p>
        
      </button>
      </a>
  )
}

export default PromoItem
