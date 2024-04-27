import React, { useEffect, useState } from 'react'

function Form() {
  
//Now, I will make object to store all values of name, email and password:

  const data = {name:"", email:"", password:""};

//Now, to handle all these values I will use useState function:

const[inputdata, setinputdata] = useState(data);
const[flag, setflag] = useState(false)

useEffect(()=>{
  console.log("Registered");
},[flag])


  function handledata(e) {
    const { name, value } = e.target;
  
    setinputdata((prevData) => ({
      ...prevData,
      [name]: name === "password" ? value.toUpperCase() : value,
    }));
  }



function handleSubmit(e){

  e.preventDefault();
  if(!inputdata.name || !inputdata.email || !inputdata.password)
  {
    alert("Al fields are Mandatory")
  }

  else
  {
    setflag(true);

  }
}

return (
  <>

  <pre>{(flag)?<h2 className='ui-define'>Hello {inputdata.name}, You have registered successfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
     <div className='header'>
        <h1>Registration Form</h1>
        <label>Enter details:</label><br/>

     </div>

     <div>
      <input type = "text" placeholder="Enter your name" name = "name" value = {inputdata.name} onChange={handledata}></input>
     </div>   

     <div>
      <input type = "text" placeholder='Enter your email' name ="email" value={inputdata.email} onChange={handledata}></input>
     </div>

     <div>
      <input type = "text" placeholder='Enter your password' value = {inputdata.password} name = "password" onChange={handledata}></input>
     </div>
     
     
     <div>
      <button type='submit'>Submit</button>
     </div>
    </form>
    </>
  );
}

export default Form;
