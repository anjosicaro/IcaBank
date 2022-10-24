import styles from "../css/Vantagens.module.css";
import banda from '../images/banda.svg'
import estudio from  '../images/estudio.svg'
import pintora from '../images/pintora.svg'
import cinema from  '../images/cinema.svg'
import Vantagens2 from "./Vantagens2";
function Vantagens() {
  return (
    <>
    <section className={styles.Vantagens}>
      <div className={styles.esquerda}>
        <div className={styles.circuloCima}>
          <div>
            <div className={styles.circulo}>
                <img src={banda} alt="" />
            </div>
            <p>Finaciamento para projetos coletivos</p>
          </div>
          <div>
            <div className={styles.circulo}>
                <img src={estudio} alt="" />
            </div>
            <p>Descontos em estudios de gravação</p>
          </div>
        </div>
        <div className={styles.circuloBaixo}>
          <div>
            <div className={styles.circulo}>
                <img src={pintora} alt="" />
            </div>
            <p>Emprestimos para compra de materiais</p>
          </div>
          <div >
            <div className={styles.circulo}>
                <img src={cinema} alt="" />
            </div>
            <p>Patrocionio para curta- metragens</p>
          </div>
        </div>
      </div>
      <div className={styles.direita}>
    <div className={styles.texto}>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aperiam, ipsam similique error perspiciatis fuga, molestiae cupiditate repudiandae odit minus voluptatum sunt excepturi necessitatibus laborum maiores rem, quisquam quod dolore.</h1>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem saepe, dolor tempore error in inventore? Illo quibusdam animi ipsum, neque iste pariatur! Porro eveniet inventore ducimus dolor veritatis laudantium.</h3>
    </div>
      </div>
    </section>

    <Vantagens2 />
    </>
  );
}
export default Vantagens;
