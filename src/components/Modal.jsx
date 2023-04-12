import styles from "../styles/Modal.module.css";
import { IoMdClose, IoLogoHtml5 } from "react-icons/io";
import { BsFillLightningChargeFill } from "react-icons/bs";

const Modal = ({ openModal, setOpenModal }) => {
  return (
    <div
      className={
        !openModal ? styles.container : `${styles.container} ${styles.active}`
      }>
      <div className={styles.wrapper}>
        <div className={styles.lists}>
          <p>
            <BsFillLightningChargeFill /> made using mui, react
          </p>
          <p>
            <BsFillLightningChargeFill />
            data fetched from third party API
          </p>
          <p>
            <BsFillLightningChargeFill />
            resused components
          </p>
        </div>
        <div className={styles.logo}>
          <IoLogoHtml5 />
          <IoLogoHtml5 />
          <IoLogoHtml5 />
        </div>
        <div className={styles.buttons}>
            <button><a href="https://afzaldiwan.netlify.app/" target="_blank">View</a></button>
            <button><a>code</a></button>
        </div>
      </div>
      <IoMdClose className={styles.close} onClick={() => setOpenModal(false)} />
    </div>
  );
};

export default Modal;
