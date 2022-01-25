import styles from "../styles/Contact.module.css";
import { AiOutlineInstagram } from "react-icons/ai";

export default function Contact() {
  return (
    <div className={styles.contact} id="contact">
      <section>
        <h1>Contact for Commissions</h1>
        <p>Please feel free to send in commission requests at:</p>
        <a href="mailto:enigm.artek@gmail.com" target="_blank">
          <p>enigm.artek@gmail.com</p>
        </a>
        <a href="https://www.instagram.com/en_igm.artek/" target="_blank">
          <p>en_igm.artek <AiOutlineInstagram /></p>          
        </a>
      </section>
      <img src="/static/contact.jpg" alt="contact" />
    </div>
  );
}
