import styles from "../styles/Footer.module.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLogo}>
        <img
          src="/caminho-para-sua-logo.png"
          alt="Logo"
          className={styles.logo}
        />
        <div className={styles.socialIcons}>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className={styles.footerContacts}>
        <h3>Contatos</h3>
        <p>exemplo@gmail.com</p>
        <p>Rua Fictícia, 123 - Centro, Cidade/Estado</p>
        <p>(00) 1234-5678</p>
      </div>

      <div className={styles.footerNewsletter}>
        <h3>SE INSCREVA</h3>
        <p>
          Cadastre seu e-mail e seja notificado de novos lançamentos e promoções
        </p>
        <form className={styles.newsletterForm}>
          <input type="email" placeholder="Seu e-mail" required />
          <button type="submit">
            <FaEnvelope />
          </button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
