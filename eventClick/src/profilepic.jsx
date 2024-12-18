function profilepic(){
const imageUrl='./src/assets/car.png';
const handleclick=(e)=>e.target.style.display="none";
return(<img onClick={(e)=>handleclick(e)} src={imageUrl}></img>)

}
export default profilepic;