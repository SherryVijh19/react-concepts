import { useState,useEffect } from 'react'

function Counter() {
  // variables
  const [count, setCount] = useState(0);
  const [history,setHistory]=useState([]);
  const [theme,setTheme]=useState('light');
  const [step,setStep]=useState(1);
  const [lastClickTime,setLastClickTime]=useState(Date.now());
  
  // functions
  const increment=()=> {
    if(count<15)
    {
      setCount(prev=>prev+step);
      updateHistory(count+step);
    }
    setLastClickTime(Date.now())  
  }

  const decrement=()=>{
    setCount(prev=>prev-step);
    updateHistory(count-step);
    setLastClickTime(Date.now());
  }

  const reset=()=>{
    setCount(0);
    updateHistory(0);
    setLastClickTime(Date.now());
  }

  const updateHistory=(newCount)=>{
    setHistory(prev=>[...prev,newCount]);
  }

  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setCount(0);
      updateHistory(0);
    },5000);
    return ()=> clearTimeout(timeout);
  },[lastClickTime]);

    const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Background and text colors
  const backgroundColor = theme === 'light' ? '#f9f9f9' : '#1e1e1e';
  const textColor = theme === 'light' ? '#000' : '#fff';

  // styles
  const styles={
    container:{
      textAlign:'center',
      marginTop:'100px',
      padding:'30px',
      borderRadius:'10px',
      minHeight: '100vh',
      transition:'background-color 0.3s ease',
    },

    buttonContainer:{
      display:'flex',
      justifyContent:'center',
      gap:'10px',
      marginTop:'20px'
    },

    section:{
      marginTop:'20px',
    },

    input:{
      padding:'5px',
      width:'60px',
      fontSize:'16px',
      marginLeft:'10px',
    },
  };


  const getCountColor=()=>{
    if(count<0) return 'red';
    if (count===0) return 'green';
    if (count>0 && count<=10) return 'yellow'
    return 'blue';
  }

  return (
    <div style={{...styles.container,backgroundColor,color:textColor}}>
      <h1>Simple Counter</h1>
      <h2 style={{color:getCountColor()}}>Count:{count}</h2>

      {/* {count === 10 && <p style={{color:'red',fontWeight:'bold'}}>Limit Reached</p>} */}
      {count===15? <p style={{color:'green',fontWeight:'bold'}}>Max Limit Reached!</p>:null}
      {/* Another way of writing this
       {count === 10 ? <p>Limit Reached!</p> : null} */}
       {count===0? <p style={{color:'orange'}}>Auto reset in 5s if no action</p>:null}

      <div style={styles.buttonContainer}>
        <button onClick={increment} disabled={count>=15}> + Increase</button>
        <button onClick={decrement} disabled={count===0}>- Decrease</button>
        <button onClick={reset}Reset></button>
      </div>

      <div style={styles.section}>
        <label> Step:</label>
        <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} style={styles.input}/>
      </div>

      <div style={styles.section}>
        <button onClick={toggleTheme}>Switch Theme</button>
      </div>

      <div style={styles.section}>
        <h3>Count History:</h3>
        <ul>
          {history.map((val,i)=>(
            <li key={i}>#{i+1}:{val}</li>
          ))}
        </ul>
      </div>
      
    </div>
  )
}

export default Counter;
