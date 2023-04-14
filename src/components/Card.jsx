import { useState } from "react";
import styles from "../styles/Card.module.css";

const Card = ({ logo, bgColor, nameOfOrg, title }) => {
  return (
    <div className={styles.container}>
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
