import { useState } from "react";
import Styles from "../css/form.module.css";

export default function Form({ todolist, setTodoList }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    var todoname = todo.name;

    if (todoname === "") {
      alert("Todo cannot be empty!");
      return;
    }
    if (todolist.some((todo) => todo.name === todoname.trim())) {
      alert("Already Todo Item present");
      return;
    }

    setTodoList([...todolist, { name: todoname.trim(), done: false }]);

    setTodo({ name: "", done: false });
  }
  return (
    <form onSubmit={handleSubmit} className={Styles.todoform}>
      <div className={Styles.todo}>
        <input
          className={Styles.forminput}
          type="text"
          value={todo.name}
          placeholder="enter todo item..."
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        ></input>
        <button type="submit" className={Styles.btn}>
          Add
        </button>
      </div>
    </form>
  );
}
