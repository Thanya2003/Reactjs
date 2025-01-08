import React, {useState, useEffect} from "react"
function DigitalClock(){
    const [time, setTime]= useState(new Date());

    useEffect(()=>{
        const interValid=setInterval(()=>{
            setTime(new Date())
        },1000)

        return()=>{
            clearInterval(interValid);
        }
    },[]);

    function formatTime(){
        let hours=time.getHours();
        const min=time.getMinutes();
        const sec=time.getSeconds();
        const mer= hours>=12? "PM" : "AM"

        hours=hours % 12 || 12;
        return `${padZero(hours)}:${padZero(min)}:${padZero(sec)} ${mer}`;
    }

    function padZero(number){
        return(number <10? "0" : "")+number;
    }
    return(<>
    <div className="clock-container">
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
    </>)
}
export default DigitalClock;