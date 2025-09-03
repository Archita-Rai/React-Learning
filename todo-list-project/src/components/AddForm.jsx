import { useState } from "react";
import { useDispatch } from "react-redux";
import  {addTodo}  from "../features/todo/todoSlice";

export default function AddForm(){
    const [task ,setTask] = useState("")
    const dispatch = useDispatch();
    const submitHandler = (e)=>{
        e.preventDefault()
        console.log(task);
        dispatch(addTodo(task));
    }
    return(
        <div className="d-flex justify-content-center align-items-center">
            <form onSubmit={submitHandler} className="d-flex justify-content-center align-items-center flex-wrap">
                <input type="text" placeholder="Enter task" onChange={(e)=>setTask(e.target.value)} className="task-input"></input>
                <button className="add-task-btn">Add </button>
            </form>
        </div>
    )
}