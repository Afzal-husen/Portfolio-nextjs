import { useState } from "react";
import styles from "../styles/Card.module.css";

const Card = ({ logo, bgColor, nameOfOrg, title }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={{ boxShadow: isHover && `0 0 10px ${bgColor}` }}
      className={styles.container}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}>
      <div style={{ backgroundColor: `${bgColor}` }} className={styles.logo}>
        <div className={styles.logo_image}>{logo}</div>
      </div>
      <div className={styles.detail}>
        <p>{title}</p>
        <p>{nameOfOrg}</p>
      </div>
    </div>
  );
};

export default Card;
