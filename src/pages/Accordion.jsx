import React from 'react'
import { useState } from 'react'

const data=[
    {question:"What is React?",answer:"React is a JavaScript library for UI."},
    {question:"What is useState?",answer:"It's a hook to manage state in functional components."}
]

export default function Accordion() {
    const [activeIndex,setActiveIndex]=useState(null);

  return (
    <div className='max-w-md mx-auto'>
      {data.map((item,index)=>(
        <div key={index} className='mb-2 border rounded'>
            <button onClick={()=>setActiveIndex(activeIndex===index?null:index)} className='w-full text-left p-3 font-medium bg-gray-100'> {item.question}</button>
            {activeIndex===index && (<div className='p-3 bg-white'>{item.answer}</div>)}
    
    </div>
  ))}
  </div>
);
}
