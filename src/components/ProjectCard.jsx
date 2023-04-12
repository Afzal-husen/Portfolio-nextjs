import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";

const ProjectCard = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <Image
            src={"/images/yt-clone.png"}
            width={200}
            height={150}
            className={styles.image}
          />
          <div className={styles.heading}>
            <h4>Youtube clone</h4>
            <button onClick={() => setOpenModal(true)}>details</button>
          </div>
        </div>
      </div>
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};

export default ProjectCard;
