import React from 'react'

export default function Navbar({cartCount}) {
  return (
    <nav className='p-4 bg-blu-5-- text-white flex justify-between'>
      <h1> My Store</h1>
      <span>Cart Items:{cartCount}</span>
    </nav>
  )
}
