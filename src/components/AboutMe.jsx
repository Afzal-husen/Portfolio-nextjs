import styles from "../styles/AboutMe.module.css";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <Image
            src="/images/dev.png"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.about}>
            <h2>About Me</h2>
            <p>
              Hello and welcome to my personal portfolio! My name is Afzal
              Diwan, and I am a MERN stack web developer based in
              Gujarat-Bharuch. I am passionate about web Development and I like
              to Read and listen to podcasts.
            </p>
          </div>
          <div className={styles.education}>
            <h2>Education</h2>
            <p>
              I dropped out of aeronautical engineering after realizing it was
              not my passion. I then began tutoring for a year and discovered
              coding, which I taught myself using free resources like YouTube
              and paid resources like Udemy. Today, I I continue to study and
              develop my coding skills while pursuing my career in the tech.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
