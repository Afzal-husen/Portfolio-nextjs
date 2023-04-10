// import styles from "../styles/Home.module.css";
import styles from "../styles/NavLinks.module.css"
import Link from "next/link";
import { useState } from "react";


const NavLinks = ({type, setIsOpen}) => {


  const handleClick = () => {
    setIsOpen(false)
  }

    return (
        <div className={type === "mobile" ? styles.active : styles.pages}>
        <ul>
          <Link href="/Home" >
            <li className={styles.page} onClick={handleClick}>Home</li>
          </Link >
          <Link href="/About" onClick={handleClick}>
            <li className={styles.page}>About Me</li>
          </Link>
          <Link href="/Projects" onClick={handleClick}>
            <li className={styles.page}>Projects</li>
          </Link>
          <Link href="/Contact" onClick={handleClick}>
            <li className={styles.page}>Contact</li>
          </Link>
        </ul>
      </div>
    )
}

export default NavLinks