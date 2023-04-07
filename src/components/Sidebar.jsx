import styles from "../styles/SideBar.module.css"
import NavLinks from "./NavLinks"

const SideBar = ({isOpen, setIsOpen}) => {
    return (
        <div className={!isOpen ? styles.container : `${styles.container} ${styles.active}`}>
            <NavLinks setIsOpen={setIsOpen} type="mobile" />
        </div>
    )
}

export default SideBar