import Head from "next/head"
import Image from "next/image"
import DarkThemeLayout from "@/components/DarkThemeLayout"
import Details from "@/components/Details"
import styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <>
    <DarkThemeLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div>
              <h1>Hi I Am Afzal Diwan</h1>
              <button>Contact Me</button>
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

