import Navbar from "./Navbar"
import Head from "next/head"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"
import SideBar from "./Sidebar"
import { useState } from "react"



const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
    <Head>
      <title>Afzal Diwan</title>
    </Head>
    <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
    <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    {props.children}
    <Footer />
    </>
  )
}

export default Layout