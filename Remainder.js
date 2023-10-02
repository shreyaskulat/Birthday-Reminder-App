import React, { useState } from 'react';
import Data from './Data' 
import './reminder.css'

const Remainder = () => {
    let[data,setState]=useState(Data);
    console.log(data)
  return (
    <div className='style'>
        <section>
            <div className='head'>
            <h2>Birthday Reminder</h2>
            
            
           
            </div>
         {
            data.map((item)=>{
                return(
                    <div className='cards'>
                    <img src={item.ImageURL} alt=''></img>
                    <h3>Name: {item.ActorName}</h3>
                    <h3>Age: {item.Birthday}</h3>
                    </div>
                )
            })
         }
        </section>
        <center><button onClick={()=>setState([])}>Clear</button></center>
    </div>
  )
}

export default Remainder