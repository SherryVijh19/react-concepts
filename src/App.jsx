import React from 'react'
import Counter from './pages/Counter'
import ToDoList from './pages/ToDoList'
import ToggleButton from './pages/ToggleButton'
import ToggleTheme from './pages/ToggleTheme'
import FormApp from './pages/FormApp'
import WeatherApp from './pages/WeatherApp'
import Accordion from './pages/Accordion'
import AccordionMultiple from './pages/AccordionMultiple'
import QuoteApp from './pages/QuoteApp'
import TimeApp from './pages/TimeApp'
import LiftStateUp from './pages/LiftStateUp'
import Calculator from './pages/Calculator'
import Calendar from './pages/Calendar'
export default function App() {
  return (
    <div>
       <div className="bg-red-500 text-white p-4 text-center rounded-lg">
      ✅ Tailwind is working!
    </div>
      < Counter />
      <ToggleTheme />
      <ToggleButton />
      <ToDoList />
      <WeatherApp />
      <FormApp />
      <Accordion/>
      <AccordionMultiple />
      <QuoteApp />
      <TimeApp />
      <LiftStateUp />
       <div>
      <h1 style={{ textAlign: "center", color: "#444" }}>React Calculator</h1>
      <Calculator />
    </div>

    <div className='calendar-display'>
      <Calendar />
    </div>
    </div>
  )
}
