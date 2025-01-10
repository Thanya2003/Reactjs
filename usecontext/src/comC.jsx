import ComponentD from "./comD"
import React,{useContext} from "react";
import {UserContext} from './comA'
function componentC(props){
    const use= useContext(UserContext)
    return(
        <div className="box">
            <h1>ComponentC</h1>
            <h2>{`hello ${use}` }</h2>
            <ComponentD user={props.user}/>
        </div>
    )
}
export default componentC