import styles from "../styles/SideBar.module.css"
import NavLinks from "./NavLinks"

const SideBar = ({isOpen}) => {
    return (
        <div className={!isOpen ? styles.container : `${styles.container} ${styles.active}`}>
            <NavLinks type="mobile" />
        </div>
    )
}

export default SideBar