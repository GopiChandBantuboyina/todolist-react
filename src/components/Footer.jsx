import styles from "../css/footer.module.css";

export default function Footer({ completed, total }) {
  return (
    <div className={styles.footer}>
      <span>Completed : {completed}</span>
      <span>Total Todos : {total}</span>
    </div>
  );
}
