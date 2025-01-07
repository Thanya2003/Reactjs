import React, {useState} from "react"
function todolist(){
    const[task, setTask]=useState(["whnknkwnkn", "vvbwbbwb", "vvwwbbtntntn"]);
    const[newTask, setNewTask ]=useState("")
    function inputchange(event){
        setNewTask(event.target.value);
    }
    function addtask(){
        if(newTask.trim()!==""){
        setTask(t=>[...t, newTask]);
        setNewTask("");
        }
    }
    function deleteTask(index){
        const upadatedtask= task.filter((_, i)=>i!==index)
        setTask(upadatedtask);
    }
    function movetaskUp(index){
        if(index>0){
            const updTask =[...task];
            [updTask[index], updTask[index-1]]=[updTask[index-1], updTask[index]]
            setTask(updTask)
        }
    }
    function movetaskdown(index){
        if(index<task.length-1){
            const updTask =[...task];
            [updTask[index], updTask[index+1]]=[updTask[index+1], updTask[index]]
            setTask(updTask)
        }
    }
    return(
        <>
        <div className="To-do-list">
            <h1>To-Do-List</h1>
        <div>
            <input type="text" placeholder="Enter a task..." value={newTask} onChange={inputchange}/>
            <button className="add-button" onClick={addtask}>ADD</button>
        </div>
        <ol>
            {task.map((tasks, index)=><li key={index}>
                <span className="text">{tasks}</span>
                <button className="dele-button" onClick={()=>deleteTask(index)}>Delete</button>
                <button className="move-button" onClick={()=>movetaskUp(index)}>Moveup</button>
                <button className="move-button" onClick={()=>movetaskdown(index)}>Movedown</button>
            </li>)}
        </ol>
        </div>
        </>
    )
}
export default todolist