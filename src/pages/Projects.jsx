import DarkThemeLayout from "@/components/DarkThemeLayout";
import styles from "../styles/Projects.module.css";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/utils/project.js";
import Button from "@/components/Button";

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
                In my journey as a web developer, I have worked on several
                exciting projects using different tools and technologies. Here
                are a few examples:
                <ol>
                  <li>
                    Responsive Web Design: Designed and developed responsive
                    websites using HTML, CSS, and JavaScript, showcasing my
                    skills in front-end web development.
                  </li>
                  <li>
                    E-commerce Website: Built a fully functional e-commerce
                    website using React.js and Node.js, allowing users to browse
                    products, add them to their cart, and checkout securely.
                  </li>
                  <li>
                    Yt-clone: built a YouTube clone using the YouTube API, which
                    allows users to search for and watch videos similar to the
                    original YouTube platform. This project was created using a
                    combination of React.js, Node.js, and the YouTube API.
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper_bottom}>
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
          <Button type="prj"/>
        </div>
      </div>
    </DarkThemeLayout>
  );
};

export default Projects;
