import styles from "@/styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>
            <p className={styles.name}>Made with
             <span className={styles.heart}>&#10084;</span>
              By Afzal Diwan</p>
        </div>
    </div>
  )
}

export default Footer