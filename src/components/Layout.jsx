import Navbar from "./Navbar"
import Head from "next/head"

const Layout = (props) => {
  return (
    <>
    <Head>
      <title>Afzal Diwan</title>
    </Head>
    <Navbar />
    {props.children}
    </>
  )
}

export default Layout