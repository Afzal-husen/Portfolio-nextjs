// import styles from "../styles/Home.module.css";
import styles from "../styles/NavLinks.module.css"
import Link from "next/link";


const NavLinks = ({type}) => {
    return (
        <div className={type === "mobile" ? styles.active : styles.pages}>
        <ul>
          <Link href="/Home">
            <li className={styles.page}>Home</li>
          </Link>
          <Link href="/About">
            <li className={styles.page}>About Me</li>
          </Link>
          <Link href="/Projects">
            <li className={styles.page}>Projects</li>
          </Link>
          <Link href="/Education">
            <li className={styles.page}>Education</li>
          </Link>
          <Link href="/Contact">
            <li className={styles.page}>Contact</li>
          </Link>
        </ul>
      </div>
    )
}

export default NavLinks