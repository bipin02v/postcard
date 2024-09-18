import styles from "./Buttons.module.css";
const Buttons = () => {
  return (
    <div className={styles.buttons}>
      <button className={`${styles.shoppingbtn} ${styles.btn1}`}>
        Add Favorite
      </button>
      <button className={`${styles.shoppingbtn} ${styles.btn2}`}>
        Read More
      </button>
    </div>
  );
};
export default Buttons;
