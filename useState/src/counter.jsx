import React, { useState } from "react";

function counter(){
    const[count, setCount]= useState(0);
    const incre=()=>{
        setCount(c => c+1) //updater
        setCount(c => c+1)
        setCount(c => c+1)

    }
    const drecre=()=>{
        setCount(count-1)
    }
    const reset=()=>{
        setCount(0)
    }
    return(
        <div className="count-cont">
            <p className="count-dis">{count}</p>
            <button className="count-button" onClick={drecre}>Dercement</button>
            <button className="count-button" onClick={reset}>Reset</button>
            <button className="count-button" onClick={incre}>increment</button>
        </div>
    )
}
export default counter;