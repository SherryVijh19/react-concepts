import React from 'react'
import { useState } from 'react'
import '../styles/Calendar.css';

export default function Calendar() {
    const today=new Date();
    const[currentDate,setCurrentDate]=useState(today);
    const monthNames=[
        'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
    ];
    


    return (
    <div className='calendar'>
        <h2>
            {monthNames[currentDate.getMonth()]}{currentDate.getFullYear()}
        </h2>

        <div className='weekdays'>
            <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
        </div>
        
        <div className='days-grid'>

        </div>
    </div>
  )
}
