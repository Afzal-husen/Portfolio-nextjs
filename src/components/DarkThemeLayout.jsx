import styles from "../styles/DarkThemeLayout.module.css"


const DarkThemeLayout = (props) => {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}

export default DarkThemeLayout