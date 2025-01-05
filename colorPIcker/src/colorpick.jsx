import React, {useState} from 'react'
 
 function colorpicker(){
    const [color , setcolor]= useState("#FFFFFF")
    function handlecolor(event){
        setcolor(event.target.value);
        
    }
    return(
        <>
        <div className='Color-picker-container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected color: {color}</p>
            </div>
            <label>Select a color</label>
            <input type="color" value={color} onChange={handlecolor}/>
        </div>
        </>
    )
}
export default colorpicker;