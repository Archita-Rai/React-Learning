import { useDispatch, useSelector } from "react-redux";
import AddForm from "./AddForm";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch()
   
 

  return (
    <>
      <h1 className="todolist-heading text-center text-light">Todos List </h1>
      <AddForm></AddForm>
      <div className="d-flex justify-content-center mt-5">
        <ul className="text-dark">
          {todos.map((todo, idx) => {
            return (
              <div
                key={todo.id}
                className="todos-main-container py-3 px-3 row bg-light mb-2"
              >
                <div className="task-container col-8">
                  <input
                    type="checkbox"
                    class="form-check-input rounded-circle"
                  />

                  <li>{todo.task}</li>
                </div>
                <div className="col-2">
                </div>
                <div className="col-2  d-flex justify-content-end ">
                <button className="bg-light border-0 fw-bolder delete-icon " onClick={deleteTodo}>
                  <i class="bi bi-trash"></i>
                </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
}
