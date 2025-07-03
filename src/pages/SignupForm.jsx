import React from 'react'
import { useState } from 'react'

export default function SignupForm() {
    const[formdata,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })

    const[errors,setErrors]=useState({});
    const[touched,setTouched]=useState({});

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData(prev=>({...prev,[name]:value}));    
    };

    

  return (
    <div>
      
    </div>
  )
}
