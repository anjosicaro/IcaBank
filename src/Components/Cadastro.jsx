import styles from "../css/Cadastro.module.css";

function Cadastro() {
  return (
    <section className={styles.cadastro}>
      <div className={styles.areaimagem}></div>

      <div className={styles.formulario}>
        <form className={styles.form}>
          <label>Nome Completo</label>
          <input type="text" placeholder="Nome completo" required />
          <label>Celular</label>
          <input type="text" placeholder="(11) 0 000-0000" />
          <label>E-mail</label>
          <input type="text" placeholder="E-mail" />
          <label>Confirme o E-mail</label>
          <input type="text" />
        </form>
      </div>
    </section>
  );
}
export default Cadastro;
