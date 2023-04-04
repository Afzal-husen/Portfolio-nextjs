import Head from "next/head"
import styles from "@/styles/Navbar.module.css"
import Link from "next/link"

const Navbar = () => {
    return(
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <nav className={styles.container}>
                <div className={styles.wrapper}>
                    <div className="logo-wrapper">
                        <Link href="/Home">
                            <p className={styles.logo}>
                                &#9001; Afzal.Diwan &#9002;
                            </p>
                        </Link>
                    </div>    
                    <div className={styles.pages}>
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