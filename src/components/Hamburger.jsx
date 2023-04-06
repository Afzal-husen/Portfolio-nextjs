import styles from "../styles/Hamburger.module.css"

const Hamburger = ({isOpen, setIsOpen}) => {
    const handleToggle = () => {
        setIsOpen(!isOpen);
      };

    return (
        <div
        onClick={handleToggle}
        className={
          !isOpen
            ? styles.hamburger
            : `${styles.hamburger}  ${styles.activeSpan}`
        }>
            <span></span>
            <span></span>
            <span></span>
      </div>
    )
}

export default Hamburger