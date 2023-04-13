import DarkThemeLayout from "@/components/DarkThemeLayout";
import styles from "../styles/Contact.module.css";
import Image from "next/image";
import SocialHandles from "@/components/SocialHandles";

const Contact = () => {
  return (
    <DarkThemeLayout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.image_container}>
            <Image src={"/images/email.svg"} width={500} height={500} />
          </div>
          <div className={styles.contact_detail}>
            <div className={styles.contact}>
              <h2>Contact</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                aperiam ducimus, maiores aut voluptatibus natus nihil enim
                voluptatem facere quam.
              </p>
            </div>
            <SocialHandles />
          </div>
        </div>
      </div>
    </DarkThemeLayout>
  );
};

export default Contact;
