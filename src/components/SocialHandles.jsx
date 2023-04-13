import Link from "next/link";
import styles from "../styles/SocialHandles.module.css"
import {
    GitHub,
    Twitter,
    LinkedIn,
    Google,
    Instagram,
  } from "@mui/icons-material";


const SocialHandles = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
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
          <a href="https://www.instagram.com/Afzal_Diwan_7/" target="_blank">
            <Instagram className={styles.insta} />
          </a>
        </div>
        <button>
          <Link href="/Contact">Contact Me</Link>
        </button>
      </div>
    </div>
  );
};

export default SocialHandles;
