import styles from "../styles/Contact.module.css";
import Image from "next/image";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <section>
        <h1>Contact for Commissions</h1>
        <p>Please feel free to send in commission requests at:</p>
        <a href="mailto:enigm.artek@gmail.com" target="_blank" rel="noreferrer">
          <p>enigm.artek@gmail.com</p>
        </a>
        <a
          href="https://www.instagram.com/en_igm.artek/"
          target="_blank"
          rel="noreferrer"
        >
          <p>
            en_igm.artek <AiOutlineInstagram />
          </p>
        </a>
      </section>
      <div className={styles.contact_image}>
        <Image
          src="/static/contact.jpg"
          width={1080}
          height={1080}
          layout="responsive"
          objectFit="contain"
          alt="Now You See Me"
        />
      </div>
    </div>
  );
}
