import ComponentC from "./comC"
function componentB(props){
    return(
        <div className="box">
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    )
}
export default componentB