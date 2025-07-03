import React from 'react'
import { useState } from 'react';

function WeatherCard({city,temperature,condition}){
    return(
        <div className='p-4 border rounded'>
            <h2>{city}</h2>
            <p>{temperature}degC-{condition}</p>
        </div>
    );
}

export default function WeatherApp() {

    const [cityIndex,setCityIndex]=useState(0);
    
    const cities=[
        {city:'Delhi',temperature:38 ,condition:'Sunny'},
        {city:'Mumbai',temperature:30 ,condition:'Humid'},
        {city:'Shimla',temperature:18 ,condition:'Cool'},
    ];

  return (
    <div className='text-center'>
        <WeatherCard {...cities[cityIndex]} />
        <button onClick={()=>setCityIndex((cityIndex+1)%cities.length)} className="mt-4 bg-blue-600 text-white px-3 py-1">Change City</button>
      
    </div>
  )
}
