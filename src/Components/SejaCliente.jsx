import { Link } from "react-router-dom";
import styles from "../css/SejaCliente.module.css";
import celular from "../images/celular.png";

function SejaCliente() {
  return (
    <section className={styles.corpo}>
      <div className={styles.celular}>
        <img src={celular} alt="celular" />
      </div>
      <div className={styles.login}>
        <h1 className={styles.titulo}>Seja um cliente <span>Icabank</span></h1>
        <form>
          <input type="text" placeholder="CPF" required maxLength={10} className={styles.cpf} />
          <button className={styles.btn}>
           <Link to='/Cadastro'>
            continuar
           </Link>
          </button>
        </form>
      </div>
    </section>
  );
}
export default SejaCliente;
