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
              Thank you for your interest in reaching out to me. If you have any questions or feedback, please feel free to get in touch with me through the below social media handles below. I'll do my best to get back to you as soon as possible.
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
