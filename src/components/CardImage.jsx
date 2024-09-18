import styles from "./CardImage.module.css";
const CardImage = ({ image }) => {
  return (
    <div className={styles.cardImage}>
      <img src={image} alt="" />
    </div>
  );
};
export default CardImage;
