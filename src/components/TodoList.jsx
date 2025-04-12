import styles from "../css/todolist.module.css";
import Todoitem from "./Todoitem";
export default function TodoList({ todolist, setTodoList }) {

  const sortedTodos = todolist.slice().sort((a, b) => Number(a.done) - Number(b.done));

  return (
    <div className={styles.todolist}>
      {sortedTodos.map((todo) => (
        <Todoitem
          key={todo.name}
          item={todo}
          setTodoList={setTodoList}
          todolist={todolist}
        />
      ))}
    </div>
  );
}
