import React, {useState} from "react"
function Mycom(){
const [car, setcar]=useState({year:2013, 
    model:"Honda", price:"10.90 Lakh"})

    function handleyear(event){
        setcar(c=>({...c, year: event.target.value}))
    }
    function handlemodel(event){
        setcar(c=>({...c, model: event.target.value}))
    }
    function handleprice(event){
        setcar(c=>({...c, price: event.target.value}))
    }
    return(
        <>
        <div>
            <p>Your favourite car is {car.year} || {car.model} || {car.price} </p>
            <input type="number" value={car.year} onChange={handleyear} />
            <br />
            <input type="text" value={car.model} onChange={handlemodel} />
            <br />
            <input type="text" value={car.price} onChange={handleprice} />
        </div>
        </>
    )
}
export default Mycom