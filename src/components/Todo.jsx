import { useState } from "react";
import TodoList from "./TodoList";
import Form from "./Form";
import Footer from "./Footer";

export default function Todo() {
  
  const [todolist, setTodoList] = useState([]);
  
  var completed=todolist.filter((todo)=>todo.done===true).length;
  var total=todolist.length;

  
  return (
    <div>
      <Form todolist={todolist} setTodoList={setTodoList} />
      <TodoList todolist={todolist} setTodoList={setTodoList} />
      <Footer completed={completed} total={total}/>
    </div>
  );
}
