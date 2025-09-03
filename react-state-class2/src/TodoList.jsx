import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import "./TodoList.css"

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "sample task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = (event) => {
    console.log("we have to add new task in todo");
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodos = (id) => {
    setTodos((prevTodo) => todos.filter((prevTodo) => prevTodo.id != id));
  };
  let upperCaseAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((prevTodo) => {
        return {
          ...prevTodo,
          task: prevTodo.task.toUpperCase(),
        };
      })
    );
  };
  let doneAll = () => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        return {
          ...todo,
          isDone: (todo.isDone = true),
        };
      })
    );
  };
  let oneDone = (id) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id == id) {
          return {
            ...todo,
            isDone: (todo.isDone = true),
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div className="main-div">
      <div className="task-div">
        <input
          type="text"
          placeholder="add a task"
          value={newTodo}
          onChange={updateTodoValue}
        />
        <button onClick={addNewTask}>Add task</button>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <h4>Todo List</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.isDone ? "line-through" : "none" }}
            >
              {todo.task}
            </span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodos(todo.id)}>Delete</button>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => oneDone(todo.id)}>Done</button>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <br></br>
      <button onClick={upperCaseAll}>Uppercase All</button>
      &nbsp;&nbsp;&nbsp;
      <button onClick={doneAll}>All Done</button>
    </div>
  );
}
