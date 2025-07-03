import React from 'react'
import ProductCard from './ProductCard'

const products=[
    {id: 1, name: "Laptop", price: 70000},
    {id: 2, name: "Headphones", price: 3000 },
    {id: 3, name: "Mouse", price: 1000}
]

export default function ProductList({onAddToCart}) {
  return (
    <div className='grid grid-cols-3 gap-4 p-4'>
     {
        products.map((product)=>
        <ProductCard key={product.id}
        product={product}
        onAddToCart={onAddToCart}
        />
        )
     }
    </div>
  )
}
