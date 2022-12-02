import React, {useEffect,useState} from 'react'

function PromoItem({image, name, precio, precioDescuento}) {

  const imgURL = `${process.env.React_APP_API}/api/images/${image}`;  

  return (
    <div className="menuItem">
        <div style={{ backgroundImage: `url(${imgURL})`}}></div>
        <h1>{name}</h1>
        <p> Precio sin descuento: {precio} Bs. </p>
        <p> Precio con descuento: {precioDescuento} Bs.  </p>
    </div>
  )
}

export default PromoItem