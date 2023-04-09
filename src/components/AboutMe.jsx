import Card  from "../components/Card";
import styles from "../styles/AboutMe.module.css";
import Image from "next/image";
import { certificates } from "@/utils/certificates.js";

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
              Hello and welcome to my personal portfolio! My name is <span>Afzal
              Diwan</span> , and I am a <span>MERN</span>  stack web developer based in <span>Gujarat-Bharuch</span>. I am passionate about web Development and I like
              to Read and listen to podcasts.
            </p>
          </div>
          <div className={styles.education}>
            <h2>Education</h2>
            <p>
              I dropped out of aeronautical engineering after realizing it was
              not my passion. I then began tutoring for a year and discovered
              coding, which I <span>taught myself</span>  using free resources like <span>YouTube </span> 
              and paid resources like <span>Udemy</span> . Today, I  continue to study and
              develop my coding skills while pursuing my career in the tech.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.certification}>
        <h2>Certification</h2>
        <div className={styles.cards}>
          {certificates.map((cert) => (
            <Card
            key={cert.id}
            bgColor={cert.bgColor}
            nameOfOrg={cert.nameOfOrg}
            title={cert.title}
            logo={cert.logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
