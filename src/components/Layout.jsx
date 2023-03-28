import Navbar from "./Navbar"
import Head from "next/head"
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <>
    <Head>
      <title>Afzal Diwan</title>
    </Head>
    <Navbar />
    {props.children}
    <Footer />
    </>
  )
}

export default Layout