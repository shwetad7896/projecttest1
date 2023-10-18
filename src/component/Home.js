import React,{useState,} from 'react'
import Properties from './props';

const Home = () => {
  const [data,setData] = useState('on');
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'http://placekitten.com/g/64/64'
        }
      };
      const fruits = [
        'Apple',
        'Mango',
        'Banana',
        'GFG'
    ];

   
     const handleClick = () => {
      if(data === "on"){
        setData('on');
      }
      
     }
  return (
    <div>Home
    <Properties value={comment} value2={fruits}/>
    <p onClick={handleClick} > Toggle data {data}</p>
    </div>
  )
}

export default Home