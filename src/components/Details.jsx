import Image from "next/image";
import styles from "../styles/Details.module.css";
import Skills from "./Skills";

const Details = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Here's What I Do</h1>
          <div className={styles.detail_container}>
            <div className={styles.image}>
              <Image
                src="/images/api-illustration.png"
                width={400}
                height={400}
                className={styles.img}
              />
            </div>
            <div className={styles.skills}>
              <h2>Full Stack Development</h2>
              <Skills />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
