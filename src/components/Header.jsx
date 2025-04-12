import { useEffect, useState } from "react";
import styles from "../css/Header.module.css";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "black" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);
  return (
    <div className={styles.header}>
      <h1>My Todo List</h1>
      <i
        className="fa-solid fa-moon icon"
        style={{ fontSize: "24px", cursor: "pointer" }}
        onClick={() => setDarkMode(!darkMode)}
      ></i>
    </div>
  );
}
