import React from 'react'
import { useReducer } from 'react'
import '../styles/Calculator.css'
import { evaluate } from 'mathjs';

const initialState={input:""};

function reducer(state,action){

    switch(action.type){
        case "Add":
            return {input:state.input + action.payload};
        case "Clear":
            return {input:""};
        case "Delete":
            return {input:state.input.slice(0,-1)};
        case "Evaluate":
             try {
                return{input:evaluate(state.input).toString()};
             }
             catch{
                return{input:"Error"};
             }
             default:
                return state;
             }
}

export default function Calculator() {
    const [state,dispatch]=useReducer(reducer,initialState);
    const buttons=["7","8","9","/","4","5","6","*","1","2","3","-","0",".","+"];
  return (
    <div className='calculator'>
        <input type="text" value={state.input} readOnly />
      <div className='buttons'>
        {buttons.map((btn)=>(
            <button key={btn} onClick={()=>dispatch({type:"Add",payload:btn})}>{btn}</button>
        ))}
        <button onClick={() => dispatch({ type: "Evaluate" })}>=</button>
        <button onClick={() => dispatch({ type: "Clear" })}>C</button>
        <button onClick={() => dispatch({ type: "Delete" })}>←</button>
      </div>
    </div>
  )
}
