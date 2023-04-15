import Link from "next/link"
import styles from "../styles/Button.module.css"

const Button = () => {
    return (
        <button className={styles.button}>
        <Link href="/Contact">Hire Me</Link>
      </button>
    )
}

export default Button