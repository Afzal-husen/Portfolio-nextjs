import Image from "next/image";
import styles from "../styles/Details.module.css";

const Details = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Here's What I Do</h1>
          <div className={styles.detail_container}>
            <div className={styles.img}>
              <Image
                src="/images/Hand.png"
                width={400}
                height={400}
                quality={100}
                loading="lazy"
              />
            </div>
            <div className={styles.head}>
              <h2>Full Stack Development</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
