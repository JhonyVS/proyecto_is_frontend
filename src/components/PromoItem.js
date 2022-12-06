import React from 'react'
import { Link } from 'react-router-dom';

function PromoItem({ image, name, precio, precioDescuento}) {
  const imgURL = `${process.env.React_APP_API}/api/images/${image}`;
  const nombre=name
  console.log(nombre)
  return (
    <Link to="/detallesPromocion" className="menuItem">
      <div style={{ backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p> Precio sin descuento: {precio} Bs. </p>
      <p> Precio con descuento: {precioDescuento} Bs.  </p>
      
    </Link>
    
  )
}

export default PromoItem