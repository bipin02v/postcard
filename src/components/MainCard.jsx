import styles from "./MainCard.module.css";
const MainCard = ({ children }) => {
  return <div className={styles.mainCard}>{children}</div>;
};
export default MainCard;
