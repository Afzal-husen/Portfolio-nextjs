import Link from "next/link"
import styles from "../styles/Button.module.css"

const Button = ({type}) => {
    return (
        <button className={styles.button}>
        <Link href={type !== "prj" ? "/Contact" : "https://github.com/Afzal-husen"}>{type !== "prj" ? "Hire Me" : "More"}</Link>
      </button>
    )
}

export default Button