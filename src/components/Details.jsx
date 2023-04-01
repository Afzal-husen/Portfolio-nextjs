import Image from "next/image";
import styles from "../styles/Details.module.css";
import Skills from "./Skills";
// import {FaHtml5} from "react-icons/fa"

const Details = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Here's What I Do</h1>
          <div className={styles.detail_container}>
            <div className={styles.img}>
              <Image
                src="/images/Hand.png"
                width={400}
                height={400}
                quality={100}
                loading="lazy"
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
