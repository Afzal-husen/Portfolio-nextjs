import Head from "next/head"
import Image from "next/image"
import DarkThemeLayout from "@/components/DarkThemeLayout"
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <>
    <DarkThemeLayout>
      <div className={styles.container}>
        <div className={styles.heading}>
          <div>
            <h1>Hi I Am Afzal Diwan</h1>
            <h1>MERN Stack Developer...</h1>
            <h1>Learning Enthusiast...</h1>
            <button>Contact Me</button>
          </div>
        </div>
        <div className={styles.image}>
          <a href="https://storyset.com/work">
            <Image
            src="/images/Developer activity-bro.png"
            width={500}
            height={500}
            quality={100}
            alt="Work illustrations by Storyset"
            />
          </a>
        </div>
      </div>
      </DarkThemeLayout>
    </>
  )
}

export default Home

