import Head from "next/head"
import Image from "next/image"
import DarkThemeLayout from "@/components/DarkThemeLayout"
import Details from "@/components/Details"
import styles from "../styles/Home.module.css"
import { GitHub, Twitter, LinkedIn, Google, Instagram } from "@mui/icons-material"

const Home = () => {
  return (
    <>
    <DarkThemeLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div>
              <h2 className={styles.name}>Hello I Am <span>Afzal Diwan</span></h2>
              <h2 className={styles.name}>A <span>MERN</span> Stack Developer</h2>
              <h2 className={styles.name}>A <span>Learning</span> Enthusiast</h2>
              <div className={styles.btn}>
                {/* social handles */}
                <div className={styles.icons}>
                  <GitHub />
                  <Twitter />
                  <LinkedIn />
                  <Google />
                  <Instagram />
                </div>
                <button >
                  Contact Me 
                </button>
              </div>
            </div>
          </div>
          <div className={styles.image}>
              <Image
              src="/images/dev.png"
              width={500}
              height={500}
              quality={100}
              alt="Work illustrations by Storyset"
              />
          </div>
        </div>
          <Details />
      </div>
    </DarkThemeLayout>
    </>
  )
}

export default Home

