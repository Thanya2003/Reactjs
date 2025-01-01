import react, {useState, UseState} from 'react';
function MyCompoent(){
const [name, setname]= useState("Button");
const[age, setAge]= useState(0);
const [Isemploy, setIsemploy]= useState(false);
const updatefun= ()=>{
    setname("thanya");
}

const incrementage = ()=>{
    setAge(age+1);

}
const toggledEmployStatus=()=>{
    setIsemploy(!Isemploy)
}
return(
    <div>
        <p>name: {name}</p>
        <button onClick={updatefun}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementage}>Increment Age</button>

        <p>Is Employed: {Isemploy? "Yes": "No"}</p>
        <button onClick={toggledEmployStatus}>Toggle status</button>
    </div>
)
}
export default MyCompoent;