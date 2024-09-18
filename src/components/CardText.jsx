import styles from "./CardText.module.css";
const CardModule = ({ title, desc }) => {
  return (
    <div className={styles.cardText}>
      <span className={styles.date}>4 days ago</span>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};
export default CardModule;
