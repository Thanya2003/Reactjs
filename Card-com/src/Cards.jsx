import pic from "./assets/edit.png"
function Cards(){
return(
    <div className="Card">
        <img className="cardimg" src={pic} alt="profile pic"/>
        <h1 className="cardtitle">Thanya Shettigar</h1>
        <p className="cardtext">I an developing this site</p>
    </div>
);

}
export default Cards;