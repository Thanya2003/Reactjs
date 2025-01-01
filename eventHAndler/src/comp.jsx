import React, {useState} from "react";

function comp(){
    const [name, setname]= useState("Guest");
    const [Quatity, setQuatity]= useState();
    const [comment, setcomment]= useState("");
    const [payment, setpayment]=useState();


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
        </div>
    )
}
export default comp;