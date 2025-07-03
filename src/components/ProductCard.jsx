import React from 'react'

export default function ProductCard({product,onAddToCart}) {
  const {name,price}=product;
        console.log('onADDtOcART CALLED');

    return (
    <div className='p-4 border rounded shadow'>
        <h2 className='text-lg font-semibold'>{name}</h2>
        <p>Rs{price}</p>
        <button className='mt-2 bg-green-500 text-white px-3 py-1 rounded' onClick={()=>onAddToCart(product)}> Add to Cart</button>
      
    </div>
  )
}
