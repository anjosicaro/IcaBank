import { Link } from "react-router-dom";
import styles from "../css/Footer.module.css";
import whats from "../images/whatsapp.png";
import email from "../images/email.png";
import github from  '../images/github.png'
import insta from '../images/instagram.png'
import figma from   '../images/figma.png'
function Footer() {
  return (
    <footer>
      <div className={styles.caixa1}>
        <h1>Icabank</h1>
        <Link to="/">
          <p>Pagina Inicial</p>
        </Link>
        <Link to="/SejaCliente">
          <p>
            Seja um dos <br /> nosso cliente
          </p>
        </Link>
        <Link to="/Vantagens">
          <p>Nossas vantagens</p>
        </Link>
        <Link to="/Icard">
          <p>Seja Icard</p>
        </Link>
      </div>
      <div className={styles.caixa2}>
        <h1>Contatos</h1>
        <p>
          Entre em contato <br /> atráves dos canais
        </p>

        <div className={styles.containerIcone}>
          <div className={styles.icone}>
            <img src={whats} alt="" />
          </div>
          <p>(11) 9 8306-7403</p>
        </div>
        <div className={styles.containerIcone}>
          <div className={styles.icone}>
            <img src={email} alt="" />
          </div>
          <p>anjosicarosilva@gmail.com</p>
        </div>
      </div>
      <div className={styles.caixa3}>
        <h1>Redes Sociais</h1>
        <p>Nos siga nas <br /> redes sociais</p>
        <div className={styles.containerIcone}>
          <div className={styles.icone}>
            <img src={github} alt="" />
          </div>
          <p>(11) 9 8306-7403</p>
        </div>
        <div className={styles.containerIcone}>
          <div className={styles.icone}>
            <img src={insta} alt="" />
          </div>
          <p>(11) 9 8306-7403</p>
        </div>
        <div className={styles.containerIcone}>
          <div className={styles.icone}>
            <img src={figma} alt="" />
          </div>
          <p>(11) 9 8306-7403</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
