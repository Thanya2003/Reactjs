import React, {useState} from 'react'
function Mycom(){

    const [car, setCar]= useState([]);
    const[carYear, setCarYear]= useState(new Date().getFullYear());
    const[carMake, setcarMake]=useState("");
    const[carModel, setcarModel]=useState("");

    function handleCar(){
        const newcar={year:carYear,
                      make:carMake,
                      model:carModel
         }
         setCar(c=>[...c, newcar])
         setCarYear(new Date().getFullYear());
         setcarMake("");
         setcarModel("");
    }
    function handleremoveCar(index){
        setCar(c=>c.filter((_, i)=> i!==index))
    }
    function handleYearCar(event){
        setCarYear(event.target.value)
    }
    function handleModelCar(event){
        setcarModel(event.target.value)
    }
    function handleMakeCar(event){
        setcarMake(event.target.value)
    }
    return(<>
    <div>
        <h2>List of the car</h2>
        <ul>
            {car.map((cars, index)=><li key={index} onClick={()=>handleremoveCar(index)}>
                {cars.year} || {cars.model} || {cars.make}
            </li>)}
        </ul>
        <input type="number" value={carYear} onChange={handleYearCar}/> <br />
        <input type="text" value={carMake} onChange={handleMakeCar} placeholder='Enter the Car Make'/>
        <br />
        <input type="text" value={carModel} onChange={handleModelCar} placeholder='Enter the Car model'/>
        <br />
        <button onClick={handleCar}>Add Car</button>
        </div></>)
}
export default Mycom