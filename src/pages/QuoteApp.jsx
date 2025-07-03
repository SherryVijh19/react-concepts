import React from 'react'
import { useState } from 'react'

const quotes=[
    "The journey of a thousand miles begins with a single step.",
    "React is declarative, efficient, and flexible.",
    "You miss 100% of the shots you don't take."
]

export default function QuoteApp() {

    const [index,setIndex]=useState(0);

    const getNewQuote=()=>{
        let newIndex=Math.floor(Math.random()*quotes.length);
        while(newIndex===index)newIndex=Math.floor(Math.random()*quotes.length);
        setIndex(newIndex);
    };


  return (
    <div className='p-6 text-center'>
        <blockquote className='italic text-xl'>"{quotes[index]}"</blockquote>
        <button onClick={getNewQuote} className='mt-4 bg-purple-600 text-white px-4 py-2'>New Quote</button>      
    </div>
  )
}
