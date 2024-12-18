function button(){
    let count =0;
const hndleclick=()=>{
    console.log('ouchh!...')
}
const hndleclick1=(name)=>{
    console.log(`${name} stop Clicking me `)
}
const hndleclick2=(name)=>{
    if(count<3){
        count++;
        console.log(`${name} you clicked me ${count} times`)
    }else{
    console.log(`${name} stop Clicking me `)
        
    }
}
const handleclick=(e)=>{console.log(e);}
const handleclick1=(e)=>e.target.textContent="Ouchh!..🤕";
return(<button onDoubleClick={(e)=>handleclick1(e)}>click me 😊</button>);
}
export default button;