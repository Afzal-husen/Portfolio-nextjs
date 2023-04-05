import Image from "next/image";
import DarkThemeLayout from "@/components/DarkThemeLayout";
import Details from "@/components/Details";
import styles from "../styles/Home.module.css";
import {
  GitHub,
  Twitter,
  LinkedIn,
  Google,
  Instagram,
} from "@mui/icons-material";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <DarkThemeLayout>
        <div className={styles.container}>
          <div className={styles.wrapper}>
            <div className={styles.heading}>
              <div>
                <h4 className={styles.name}>
                  <span>Hello </span> I Am <span>Afzal Diwan</span>
                </h4>
                <h4 className={styles.name}>
                  A <span>MERN</span> Stack Developer
                </h4>
                <h4 className={styles.name}>
                  A <span>Learning</span> Enthusiast
                </h4>
                <div className={styles.btn}>
                  {/* social handles */}
                  <div className={styles.icons}>
                    <a href="https://github.com/Afzal-husen" target="_blank">
                      <GitHub />
                    </a>
                    <a>
                      <Twitter />
                    </a>
                    <a>
                      <LinkedIn />
                    </a>
                    <a>
                      <Google />
                    </a>
                    <a>
                      <Instagram />
                    </a>
                  </div>
                  <button>
                    <Link href="/Contact">
                      Contact Me
                    </Link>
                  </button>
                </div>
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="/images/man-1.png"
                width={500}
                height={500}
                quality={100}
                alt="Work illustrations by Storyset"
                className={styles.img}
                loading="lazy"
              />
            </div>
          </div>
          <Details />
        </div>
      </DarkThemeLayout>
    </>
  );
};

export default Home;
