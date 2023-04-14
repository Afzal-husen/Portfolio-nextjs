import Card from "../components/Card";
import styles from "../styles/AboutMe.module.css";
import Image from "next/image";
import { certificates } from "@/utils/certificates.js";

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <Image
            src="/images/education.svg"
            width={500}
            height={400}
            className={styles.image}
          />
        </div>
        <div className={styles.details}>
          <div className={styles.about}>
            <h2>About Me</h2>
            <p>
              Hello and welcome to my personal portfolio! My name is{" "}
              <span>Afzal Diwan</span> , and I am a <span>MERN</span> stack web
              developer based in <span>Gujarat-Bharuch</span>. I am passionate
              about web Development and I like to Read and listen to podcasts.
            </p>
          </div>
          <div className={styles.education}>
            <h2>Education</h2>
            <p>
              I am a 10+2 pass out with science background, i chose b-tech in
              <span> aeronautical enginneeing </span> but soon i realised it was{" "}
              <span> not my passion </span>, so i dropped out. after sometime i
              started tutoring school children. after a year i discovered the
              world of <span> coding & programming </span>. I started{" "}
              <span> learning to code </span> using free resources like
              <span> youtube </span> and paid resources like{" "}
              <span> udemy </span>.Today, I Continue To Study And Develop My
              Coding Skills While Pursuing My Career In The Tech.
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
