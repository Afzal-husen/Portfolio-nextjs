import Image from "next/image";
import DarkThemeLayout from "@/components/DarkThemeLayout";
import Details from "@/components/Details";
import styles from "../styles/Home.module.css";
import Typed from "typed.js";
import Link from "next/link";
import { useEffect, useRef } from "react";
import SocialHandles from "@/components/SocialHandles";
import Button from "@/components/Button";

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        `
        <br /> 
        A <span>MERN</span> Stack Developer
        <br /> 
        A <span>Learning</span> Enthusiast
        `,
      ],
      typeSpeed: 20,
      backSpeed: 10,
      loop: true,
      cursorChar: ".",
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
              <div className={styles.typed}>
                <div>
                  <h4 className={styles.name}>
                    <span>Hello </span> I Am <span>Afzal Diwan</span>
                  </h4>
                  <h4 ref={el} className={styles.name}></h4>
                </div>
                <Button />
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
