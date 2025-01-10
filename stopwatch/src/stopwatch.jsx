import React, {useState, useEffect, useRef} from "react";
function stopwatch(){
    const [isRunnning, setIsrunning]=useState(false);
    const [elapsedTime, setElapsedTime]=useState(0);
    const intervalIdRef=useRef(null);
    const startTimeRef=useRef(null);

    useEffect(()=>{
        if(isRunnning){
            intervalIdRef.current=setInterval(()=>{
                setElapsedTime(Date.now()-startTimeRef.current)
            },10);
        }
        return()=>{
            clearInterval( intervalIdRef.current);
        }
    },[isRunnning])

    function startTime(){
        setIsrunning(true);
        startTimeRef.current=Date.now()- elapsedTime;
    }
    function stopTime(){
        setIsrunning(false);
    }
    function resetTime(){
        setElapsedTime(0);
        setIsrunning(false);
    }
    function formatTime(){
        let hours=Math.floor(elapsedTime/(1000*60*60))
        let min=Math.floor(elapsedTime/(1000*60)%60)
        let sec=Math.floor(elapsedTime/(1000)%60)
        let milsec=Math.floor(elapsedTime%(1000)/10)

        hours=String(hours).padStart(2,"0");
        min=String(min).padStart(2,"0");
        sec=String(sec).padStart(2,"0");
        milsec=String(milsec).padStart(2,"0");
        return `${hours}:${min}:${sec}:${milsec}`;
    }
    return(
        <>
        <div className="stopwatch">
            <div className="display">{formatTime()}</div>
            <div className="controls">
                <button onClick={startTime} className="start-button">Start</button>
                <button onClick={stopTime} className="stop-button">Stop</button>
                <button onClick={resetTime} className="rest-button">Reset</button>
            </div>
        </div>
        </>
    )
}
export default stopwatch;