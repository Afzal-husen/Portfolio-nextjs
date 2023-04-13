import DarkThemeLayout from "@/components/DarkThemeLayout";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/project.js";

const Projects = () => {
  return (
    <DarkThemeLayout>
      <div className={styles.container}>
        <div className={styles.wrapper_top}>
          <div className={styles.image_wrapper}>
            <Image
              src={"/images/project.svg"}
              width={400}
              height={500}
              className={styles.image}
            />
          </div>
          <div className={styles.intro_container}>
            <div className={styles.intro_wrapper}>
              <h2>Projects</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper_bottom}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id}/>
          ))}
        </div>
      </div>
    </DarkThemeLayout>
  );
};

export default Projects;
