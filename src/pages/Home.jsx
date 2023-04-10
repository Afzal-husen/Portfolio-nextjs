import Image from "next/image";
import DarkThemeLayout from "@/components/DarkThemeLayout";
import Details from "@/components/Details";
import styles from "../styles/Home.module.css";
import Typed from "typed.js";
import {
  GitHub,
  Twitter,
  LinkedIn,
  Google,
  Instagram,
} from "@mui/icons-material";
import Link from "next/link";
import { useEffect, useRef } from "react";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `<span>Hello </span> I Am <span>Afzal Diwan</span>
        <br /> 
        A <span>MERN</span> Stack Developer
        <br /> 
        A <span>Learning</span> Enthusiast
        `,
      ],
      typeSpeed: 20,
      backSpeed: 10,
      loop: true,
      cursorChar: "|",
    };

    const typed = new Typed(el.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <DarkThemeLayout>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.heading}>
              <div>
                <h4 ref={el} className={styles.name}></h4>
                <div className={styles.btn}>
                  {/* social handles */}
                  <div className={styles.icons}>
                    <a href="https://github.com/Afzal-husen" target="_blank">
                      <GitHub className={styles.github} />
                    </a>
                    <a href="https://twitter.com/Afzal_Diwan_7" target="_blank">
                      <Twitter className={styles.twitter} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/afzal-diwan-7202b8239/"
                      target="_blank">
                      <LinkedIn className={styles.linkdn} />
                    </a>
                    <a href="mailto:afzalhusen3@gmail.com">
                      <Google className={styles.google} />
                    </a>
                    <a
                      href="https://www.instagram.com/Afzal_Diwan_7/"
                      target="_blank">
                      <Instagram className={styles.insta} />
                    </a>
                  </div>
                  <button>
                    <Link href="/Contact">Contact Me</Link>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image src={"/images/hello.svg"} width={500} height={500} />
            </div>
          </div>
          <Details />
        </div>
      </DarkThemeLayout>
    </>
  );
};

export default Home;
