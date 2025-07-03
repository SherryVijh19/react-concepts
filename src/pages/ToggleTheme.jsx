import React from 'react'
import { useState } from 'react'

export default function ToggleTheme() {

  const [isDark,setIsDark]=useState('false');

  const toggleTheme=()=>{
    setIsDark((prev)=>!prev);
  };
 
  const themeStyles={
    backgroundColor:isDark?"#1e1e1e":"#f9f9f9",
    color:isDark?"#fff":"#000",
    minHeight:"100vh",
    padding:"40px",
    textAlign:"center",
    transition:"all 0.5s ease"

  }

  return (
    <div style={themeStyles}>
      <h1>{isDark?"🌙 Dark Mode":"☀️ Light Mode"}</h1>
      <button style={{padding:"12px 24px",fontSize:"18px",cursor:"pointer",backgroundColor:isDark?"#fff":"#333",
        color:isDark ? "#333" : "#fff",
          border: "none",
          borderRadius: "8px",
      }} onClick={toggleTheme}>
        {isDark?"Switch to light mode":"Switch to dark mode"}
      </button>
      
    </div>
  )
}
