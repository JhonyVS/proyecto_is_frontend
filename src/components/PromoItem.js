import React from 'react'

function PromoItem({image, name, precio, precioDescuento}) {
  return (
    <div className="menuItem">
        <div style={{ backgroundImage: `url(${image})`}}></div>
        <h1>{name}</h1>
        <p> Precio sin descuento: {precio} Bs. </p>

        <p> Precio con descuento: {precioDescuento} Bs.  </p>
    </div>
  )
}

export default PromoItem