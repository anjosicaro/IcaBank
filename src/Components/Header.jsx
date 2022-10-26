import { Link } from "react-router-dom";
import styles from "../css/Header.module.css";
import logo from "../images/logo (1).png";

function Header() {
  return (
    <>
    <header>
    
    <img src={logo} alt="logoIca" className={styles.logo} />
   
      <nav className={styles.menu}>
        <ul>
          <Link to='/'>
            <li>Pagina Inicial</li>
          </Link>

          <Link to='/SejaCliente'>
            <li>Seja um cliente</li>
          </Link>
          <Link to='/Vantagens'>
            <li>Vantagens</li>
          </Link>
          <Link to ='/Icard'>
            <li>Icard</li>
          </Link>
          <Link to='/Contatos'>
            <li>Contatos</li>
          </Link>
          <Link to='/Login'>
          <button className={styles.btn}>Entrar</button>
          </Link>
        </ul>
      </nav>
    </header>
   

    </>
  );
}
export default Header;
