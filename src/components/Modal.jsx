import styles from "../styles/Modal.module.css";
import { IoMdClose, IoLogoHtml5 } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { useState } from "react";

const Modal = ({ openModal, setOpenModal, project }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);


  return (
    <div
      className={
        !openModal ? styles.container : `${styles.container} ${styles.active}`
      }>
      <div className={styles.wrapper}>
        <div className={styles.lists}>
          <p>
            <BsFillLightningChargeFill /> {project.desc[0]}
          </p>
          <p>
            <BsFillLightningChargeFill />
            {project.desc[1]}
          </p>
          <p>
            <BsFillLightningChargeFill />
            {project.desc[2]}
          </p>
        </div>
        <div className={styles.logo}>
          {project.icons.map((icon) => (
            <div className={styles.icon_detail} key={icon.id}>
              <div
                className={
                  !isMouseOver
                    ? styles.iconName
                    : `${styles.iconName} ${styles.iconName_active}`
                }>
                {icon.iconName}
              </div>
              <div
                onMouseOver={() => setIsMouseOver(true)}
                onMouseOut={() => setIsMouseOver(false)}
                className={styles.icon}>
                {icon.icon}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.buttons}>
          <button>
            <a href={project.siteUrl} target="_blank">
              View
            </a>
          </button>
          <button>
            <a  href={project.codeUrl} target="_blank" >code</a>
          </button>
        </div>
      </div>
      <IoMdClose className={styles.close} onClick={() => setOpenModal(false)} />
    </div>
  );
};

export default Modal;
