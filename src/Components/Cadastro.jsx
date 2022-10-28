import { Link } from "react-router-dom";
import styles from "../css/Cadastro.module.css";

import foto from "../images/tchelo.svg"
function Cadastro() {
  return (
    <section className={styles.cadastro}>
      <div className={styles.areaimagem}>
       <img src={foto} alt="" />
      </div>

      <div className={styles.FormContainer}>
        <h1 className={styles.titulo}>Complete seu cadatro</h1>
    <form>
      <input type="text" name="name" placeholder="Nome Completo" className={styles.input}/>
      <input type="email" name="email" placeholder="Digite seu Email"className={styles.input} />
      <input type="password" name="password" placeholder="Digite a sua senha" className={styles.input}/>
      <input type="password" name="Confirmpassword" placeholder="Confirme sua senha" className={styles.input}/>
      <Link to='/'>
       <button type="text" name="Continuar" placeholder='Continuar' className={styles.btn}>Continuar</button>
       </Link>

    </form>
      </div>

     
    </section>
  );
}
export default Cadastro;
