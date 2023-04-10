import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";
import { FaHtml5 } from "react-icons/fa";

const ProjectCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <Image
            src={"/images/yt-clone.png"}
            width={200}
            height={200}
            className={styles.image}
          />
        </div>
        <div className={styles.info_container}>
          <div className={styles.info_wrapper}>
            <h3>youtube clone</h3>
            <p>made UI using MUI5</p>
            <p>fetched data from youtube API.</p>
            <p>component resuse</p>
          </div>
          <div className={styles.icon_wrapper}>
            <FaHtml5 style={{ fontSize: "1.5rem" }} />
            <FaHtml5 style={{ fontSize: "1.5rem" }} />
            <FaHtml5 style={{ fontSize: "1.5rem" }} />
            <FaHtml5 style={{ fontSize: "1.5rem" }} />
            <FaHtml5 style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
