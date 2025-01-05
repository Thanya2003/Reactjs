import React, {useState} from "react";
function list(){
    const [Food, setFood]=useState(['Apple', 'Banana', 'Garpes'])
    function handleaddList(){
        const newFood = document.getElementById('FoodName').value;
        document.getElementById('FoodName').value="";
        setFood(F=>[...F, newFood])
    }
    function handleremoveList(index){
        setFood(Food.filter((_, i) =>i!==index))
    }
return(<>
<div>
    <h1>List of fruits </h1>
    <ul>
        {Food.map((food, index)=><li key={index} onClick= {()=>{handleremoveList(index)}}>{food}</li>)}
    </ul>
    <input type="text" id="FoodName" placeholder="Enter the fruit" />
    <button onClick={handleaddList}>ADD_Food</button>
</div>
</>)
}
export default list;