import Head from "next/head";
import styles from "@/styles/Navbar.module.css";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Navbar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={styles.container}>
        <div className={styles.wrapper}>
          <Logo />
          <NavLinks isOpen={isOpen} setIsOpen={setIsOpen} />
          <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
