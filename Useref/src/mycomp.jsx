import React, {useEffect, useState, useRef} from "react";
function mycomp(){
    const inputref=useRef(null);
    const inputref1=useRef(null);
    const inputref2=useRef(null);


    useEffect(()=>{
        console.log("component render")
    })
    function handleclick(){
       inputref.current.focus();
       inputref.current.style.backgroundColor = "yellow"; 
       inputref1.current.style.backgroundColor = ""; 
       inputref2.current.style.backgroundColor = ""; 

    }
    function handleclick1(){
        inputref1.current.focus();
        inputref1.current.style.backgroundColor = "yellow"; 
        inputref.current.style.backgroundColor = ""; 
        inputref2.current.style.backgroundColor = ""; 
 
     }
     function handleclick2(){
        inputref2.current.focus();
        inputref2.current.style.backgroundColor = "yellow"; 
        inputref1.current.style.backgroundColor = ""; 
        inputref.current.style.backgroundColor = ""; 
 
     }
    return(<>
    <button onClick={handleclick}>Click me 1</button>
    <input ref={inputref} />

    <button onClick={handleclick1}>Click me 2</button>
    <input ref={inputref1} />

    <button onClick={handleclick2}>Click me 3</button>
    <input ref={inputref2} />
    </>)
}
export default mycomp;