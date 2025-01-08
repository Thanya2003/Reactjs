import React, {useEffect, useState} from "react";
function useffect(){
    const [count, setcount]=useState(0);
    const [color, setcolor]=useState("green");
    function addCount(){
        setcount(c=>c+1)
    }
    function subCount(){
        setcount(c=>c-1)
    }
    function addcolor(){
        setcolor(c=>c==="green"? "red":"green")
    }
    useEffect(()=>{
        document.title=`Count : ${count} ${color}`
    },[count, color])
    return(
        <>
        <div>
            <p style={{color:color}}>count:{count}</p>
            <button onClick={addCount}>ADD</button>
            <button onClick={subCount}>sub</button>
            <br />
            <button onClick={addcolor}>Set Color</button>

        </div>
        </>
    )
}
export default useffect;