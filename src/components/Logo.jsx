import styles from "../styles/Logo.module.css"
import Link from "next/link";
import { FaAudioDescription } from "react-icons/fa";

const Logo = () => {
  return (
    <div className={styles.logo_wrapper}>
      <Link href="/Home">
          <FaAudioDescription  className={styles.logo}/>
      </Link>
    </div>
  );
};

export default Logo;
