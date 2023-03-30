import styles from "@/styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div>
        <p className={styles.name}>
          Made with
          <span className={styles.heart}>&#10084;</span>
          By Afzal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
