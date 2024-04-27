import React from './App'
import { Route, createBrowserRouter, createRoutesFromElements, Outlet, Link, RouterProvider} from 'react-router-dom'
import { Home } from './Home'
import { Contact } from './Contact'
import { Start, dataLoader } from './Start'
//import AxiosTutorial from './AxiosTutorial';
//import {createContext, react, useEffect, useRef, useState} from 'react'
// import { data } from './data';
// import ChildC from './ChildC';
//import Form from './Form';
//import TodoList from '../TodoList';

 function App(props){

    const router = createBrowserRouter(
        createRoutesFromElements(

            <Route path='/' element={<Root />}>
            <Route index element ={<Home />}/>
            <Route path='data' element ={<Start />} loader={dataLoader}/>
            <Route path='contact' element ={<Contact />}/>
            
            </Route>

        )
    )

    return(
        <div className='App'>
        <RouterProvider router={router}/>
        {/* <h1>Hello React.</h1>
        <h2>Start editing to see some magic happen!</h2> */}
        </div>
    )
}

const Root = () =>{
    return(
        <>
            <div>
                <Link to="/">Home</Link>
                <Link to="/data">Data</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <>
                <Outlet />
            </>
        </>
    )
}


export default App;

















//TODO LIST, FORM TUTORIALS
// function App(){

//     return(
//     <>
//     <Form/>
//     <TodoList/>
//     <AxiosTutorial/>
//     </>
//     );
// }


// export default App;


// function App() {

//   const x = 10;

//   return (
//     <>                            {/*This empty tag called fragment(JSX RULE NO 1)8*/}

//    <Header name = "Noor"/>
//    <Header name = "Hira"/>
//    <Header name = "Fatima"/>
    

//     {/*If we want to use css file for designing then we can use className Tag in JSX not class as we use in html then css file will work to show design(RULE NO 4)*/}

//     <h1>Hello World!!</h1>

//     <h1 className='xyz'></h1>    
//     <p>How are you?</p>

//     {/*JSX expression must be in curly braces (JSX RULE NOP 2)  */}

//     <p>{5 + 5}</p>                  
    
//     {/*It works same(called ternary operator) in JSX as we use if else condition (RULE 3)*/}

//     <p>{(x)<15?"Greater" : "Smaller"} </p> 

//     </>

//   );

// }


// //It updateState function is not working in this case so we can use concept of hooks then it will work in that case

// function App(){

//   var x = 10;
//   function updateState(){
//     x = 15;
//   }

//   console.log(x);
  
// return(
//   <>
//     <h1>Learning State {x} </h1>
//     <button onClick={updateState}>Click Me</button>
//   </>
// );

// }


//Use of Hook to updateState of the function

// function App(){

//   const[count, setcounter] = useState(0);
//   const[data, setdata] = useState("RAM");


//   useEffect(()=> {console.log("component mounted")}, [count]);

//     function updateState(){

//       setcounter(count + 1);

//     }

//     function updateData(){
// 12
//       setdata("SAM");
//     }

//   return(
// <>
    
//   <h1>Button Clicked {count} </h1>
//   <button onClick = {updateState}>Click</button>
//   <button onClick={updateData}>updateData</button>
  

//     </>

//   );
  
// }



//Use of Hook with code Example

// function App(){

//   const[ count, setcounter] = useState(0);
//   const[ data, setData] = useState("Ram");

// //Use of UseEffect Hook

//   useEffect( ()=>{
//     console.log("component mounted")
//   }, [])


//   function updateState(){
//     setcounter(count + 1);
//   }


//   function updateData(){
//     setData("Seeta")
//   }

//   return(
//     <>
//       <h1>Button clicked {count} times </h1>
//       <button onClick={updateState}> Click </button>
//       <button onClick={updateData}>updateData</button>
//     </>
//   )
// }


//useref function componenet m use hony wala esa hook h jiski help sy hum apny DOM ko directly manipulate ksrsky hain


// function App(){

//   const refElement = useRef("");

//   const [name, setName] = useState("Noor");

//   console.log(refElement);

//   function Reset(){

//     setName("");

//     refElement.current.focus();

//   }
  
//   function HandleInput(){

//     refElement.current.style.color = "blue";
//     refElement.current.value = "Hira"
//     refElement.current.focus();



//   }
//   return(

//     <>
    
//     <h1>Learning UseRef</h1>

//     <input ref = {refElement} type = "text" value = {name} onChange={(e) => setName(e.target.value)}>
//     </input>

//     <button onClick={Reset}> Reset </button>
//     <button onClick={HandleInput}>HandleInput </button>
//     </>

//   );

// }

// //So after that we can manipulate our DOM


// //Concept of Prop Drilling and how can we use it....

// function App(){

//   const name = "Fatima";

//   return(

//     <>
//       <ChildA name = {name}/>
//     </>
//   );


//Concept of Context API(Solution of Props Drilling)
//Use of Context API:
//(create, provider, consumer)


// function App()

// {

//     const [name , setName] = useState("Noor")

//     return(

//         <>
//             <data.Provider value = {name}>

//             <ChildC/>

//             </data.Provider>
//         </>
//     );

// }


//Concept of useContext(Solution of Context API)
//(create, provider, useContext)

// const data = createContext();
// const data1 = createContext();

// function App(){

//     const [name, setName] = useState("noor");
//     const [name1, setName1] = useState("fatiuma");


//     return(
//         <>
//             <data.Provider value = {name}>
//             <data1.Provider value = {name1}>
//                 <ChildC/>
//                 </data1.Provider>
//             </data.Provider>
//         </>
//     )
// }

// export default App; 
// export {data, data1};




//1---------------Controlled components by using React----------------------
 
// function App(){

//     const[name, setName] = useState("");
//     const[passwd, setPasswd] = useState("");

//     const refElement = useRef("");
//     console.log("refElement");

//     function Reset(){

//         refElement.current.style.color = "red";
//         refElement.current.value = ""
//         refElement.current.focus();
        
//     }

//     function handleChange(e){

//         console.log(e.target.name);
//         //With the help of controled compoents, we can contolled data and it just happen with the help of react in JSX
//         if(e.target.name == "firstName")
//         {

//             const capName = (e.target.value).toUpperCase();
//             setName(capName);
//         }

//         else
//         {
//             setPasswd(e.target.value);
//         }
//     }

//     function handlePasswd(e){

//         console.log(e.target.value);
//         setPasswd(e.target.value);
//     }

//     function HandleInput(){
        
//         refElement.current.style.color = "blue";
//         refElement.current.value = ""
//         refElement.current.focus();

//     }
//     return(
//         <> 
//        <form className='App'>

//       <label>First name:</label><br/>
//        handleChange function works same as the above line works 
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)}/><br/> 
//         <input ref={refElement} type = "text" value={name} onChange={(e)=> setName(e.target.value)}></input> 
//         <input ref={refElement} type= "text" name="firstName" value={name} onChange={handleChange}/><br/>

//         <input ref={refElement} type = "text"  value={passwd} name="password" onChange={handleChange}/><br/>
//             <label>Password:</label><br/>
//          <input type = "text" value={passwd} onChange={handlePasswd}/><br/> 
        
// QUESTION: Also if i have multiple fields like address, id etc So, i will make multiple onChange functions? 
// ANSWER:   No, we can just use on function with if else conditions in that one function
//       <button onClick ={Reset}>Reset</button>
//       <button onClick ={HandleInput}>HandleInput</button>
//         </form>
//         </>
//     )
// } 


//2----------------------------Uncontrolled components by using DOM (using USeRef)---------------------------------

// function App(){

//     const refElement = useRef("");
//     console.log(refElement);
//     function Submit(e)
//     {

//         e.preventDefault();
//         console.log((refElement.current.value).toUpperCase()); 
//         refElement.current.focus();
//     }

//     return(
//         <>
//             <form className='APP'>
//             <label>First name:</label>
//                 <input type="text" ref={refElement}/><br/> 
//             <button onClick={Submit}>Submit</button>
//             </form>
//         </>
//     );
// }
// export default App;