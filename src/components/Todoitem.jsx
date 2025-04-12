import styles from "../css/todoitem.module.css";

export default function Todoitem({ item, setTodoList, todolist }) {
  function handledelete(item) {
    setTodoList(todolist.filter((todo) => todo.name != item.name));
    console.log(todolist);
  }

  function handlecomplete(item) {
    setTodoList(
      todolist.map((todo) =>
        todo.name === item.name ? { ...todo, done: !todo.done } : todo
      )
    );
    console.log(todolist);
  }

  const completed = item.done ? styles.completed : "";

  return (
    <div className={styles.name}>
      <span className={completed} onClick={() => handlecomplete(item)}>
        {item.name}
      </span>
      <button
        type="button"
        className={styles.deletebtn}
        onClick={() => handledelete(item)}
      >
        X
      </button>
      <hr className={styles.line} />
    </div>
  );
}
