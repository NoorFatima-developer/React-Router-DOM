import React, { useState,useEffect } from 'react'
import axios from 'axios';

export default function AxiosTutorial() {
const[userdata, setdata] = useState([])

     useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setdata(response.data);
        })
    },[])
    
  return (

    <div>Axios AxiosTutorial

     {userdata.map((data)=>{
      return(
        <div>{data.name}</div>
      )
    })}
    
    </div>   

    
    )
}
