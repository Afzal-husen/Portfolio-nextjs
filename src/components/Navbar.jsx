import Head from "next/head"
import styles from "@/styles/Navbar.module.css"

const Navbar = () => {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <nav className={styles.container}>
                <div className={styles.wrapper}>
                    <div className="logo-wrapper">
                        <h1 className={styles.logo}>&#9001; Afzal.Diwan &#9002;</h1>    
                    </div>    
                    <div className={styles.pages}>
                        <ul>
                            <li className={styles.page}>Home</li>    
                            <li className={styles.page}>About Me</li>    
                            <li className={styles.page}>Projects</li>    
                            <li className={styles.page}>Experience</li>    
                            <li className={styles.page}>Contact</li>    
                        </ul>
                    </div>    
                        {/* Hamburger */}
                        <div className={styles.hamburger}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar