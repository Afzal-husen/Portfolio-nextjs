import Navbar from "./Navbar"
import Head from "next/head"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"


const Layout = (props) => {
  return (
    <div>
    <Head>
      <title>Afzal Diwan</title>
    </Head>
    <Navbar />
    {props.children}
    <Footer />
    </div>
  )
}

export default Layout