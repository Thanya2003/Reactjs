import React,{useState, useEffect} from "react";

function com(){
    const [width, setwidth]=useState(window.innerWidth);
    const [height, setheight]=useState(window.innerHeight);
    useEffect(()=>{
        window.addEventListener("resize", handleSize);
        console.log("ADD EVENT LISTENER")

        return()=>{
            window.removeEventListener("resize", handleSize); 
            console.log("remove EVENT LISTENER")
        }
    },[])
    
    useEffect(()=>{
        document.title=`size: ${width} x ${height}`;
    },[width, height])
    function handleSize(){
        setwidth(window.innerWidth);
        setheight(window.innerHeight);
    }
return(<>
    <p>width:{width} px</p>
    <p>height:{height}px</p>
</>)
}
export default com;