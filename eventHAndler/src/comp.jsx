import React, {useState} from "react";

function comp(){
    const [name, setname]= useState("Guest");
    const [Quatity, setQuatity]= useState();
    const [comment, setcomment]= useState("");
    const [payment, setpayment]=useState();
    const[shipping, setshipping]=useState();


    function handlerchnage(eve){
        setname(eve.target.value);
    }
    function handlequatity(even){
        setQuatity(even.target.value)
    }
    function handlecomment(event){
        setcomment(event.target.value)
    }
    function handlepayment(event){
        setpayment(event.target.value)
    }
    function handleshipping(event){
        setshipping(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handlerchnage} />
            <p>Name: {name}</p>

            <input value={Quatity} onChange={handlequatity}  type="number"/>
            <p>Quatity: {Quatity}</p>

            <textarea value={comment} onChange={handlecomment} placeholder="enter the delivery details"/>
            <p>Comment: {comment}</p>
            <select value={payment} placeholder="slect the option" onChange={handlepayment}>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="UPI/Online">UPI Online</option>
                <option value="Gift Card">Gift Card</option>
            </select>
            <p>payment: {payment}</p>

            <label>
                <input type="radio" value="pick Up" checked={shipping==="pick Up"} onChange={handleshipping}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleshipping}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}
export default comp;