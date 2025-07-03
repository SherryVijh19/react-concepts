import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

export default function LiftStateUp() {
   
    const [cartItems,setCartItems]=useState([]);

    const handleAddToCart=(product)=>{
        setCartItems([...cartItems,product]);
    }

  return (
    <div>
     <Navbar cartCount={cartItems.length} />
     <ProductList onAddToCart={handleAddToCart}/> 
    </div>
  );
}
