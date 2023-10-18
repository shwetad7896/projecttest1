import React from 'react'
import nature from '../assets/nature.jpg'
import './props.css'

function Properties(props) {
    console.log(props);
   
    console.log(props.value2)
     let optionvalue = props.value2

    let res =  props.value;
    console.log(res);
 
   
    let resautor = res.author;
    console.log(resautor)
 
    
  return (
    <div>Author properties
    <div>
    <img src={nature} className='resizeimg'/>
    
    <p>{res.text}</p>
    </div>
    <div>
    <p>{resautor.avatarUrl}</p>
        <h2>{resautor.name}</h2>
        <select>
            {optionvalue.map((data) => (
                <option>{data}</option>
            ))}
            
        </select>
        </div>
    </div>
  )
}

export default Properties