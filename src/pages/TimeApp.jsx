import React from 'react'
import { useState,useEffect } from 'react'

export default function TimeApp() {

    const[seconds,setSeconds]=useState(0);
    const[isRunning,setIsRunning]=useState(false);
    
    useEffect(()=>{
        let interval;
        if(isRunning){
            interval=setInterval(()=>setSeconds(prev=>prev+1),1000);
        }
        else{
            clearInterval(interval);
        }

        return()=>clearInterval(interval);
        },[isRunning]);

    return (
    <div className='text-center p-6'>
        <h1 className='text-3xl'>{seconds}s</h1>
        <div className='space-x-2 mt-4'></div>
        <button onClick={()=>setIsRunning(true)}>Start</button>
        <button onClick={()=>setIsRunning(false)}>Stop</button>
        <button onClick={()=>{setSeconds(0);setIsRunning(false);}}>Reset</button>     
    </div>
  );
}
