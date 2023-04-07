import styles from "../styles/Logo.module.css"
import Link from "next/link";

const Logo = () => {
  return (
    <div className="logo-wrapper">
      <Link href="/Home">
        <p className={styles.logo}>
          {/* &#9001; Afzal.D &#9002; */}
          <span>A</span>fzal.D
        </p>
      </Link>
    </div>
  );
};

export default Logo;
