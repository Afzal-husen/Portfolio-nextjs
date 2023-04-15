import styles from "../styles/Logo.module.css"
import Link from "next/link";
import { FaAudioDescription } from "react-icons/fa";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <Link href="/Home">
        <p className={styles.logo}>
          <span><FaAudioDescription /></span>Afzal.Diwan
        </p>
      </Link>
    </div>
  );
};

export default Logo;
