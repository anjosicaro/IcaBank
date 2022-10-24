import styles from "../css/Footer.module.css";
function Footer() {
  return (
    <footer>
        <div className={styles.footer}>
           <div className={styles.contatos}>
           <h1>Contatos</h1>
            <p>(11) 98306-7403</p>
            <p>anjosicarosilva@gmail.com</p>
           </div>

        </div>
        <div className={styles.footer}>
            <div>
                <h1>Redes Sociais</h1>
                <div>ints</div>
                <div>figma</div>
                <div>github</div>
            </div>
        </div>
        <div className={styles.footer}>logo</div>
    </footer>
  );
}
export default Footer;
