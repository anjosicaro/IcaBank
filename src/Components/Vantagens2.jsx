import styles from "../css/Vantagens.module.css";
import qr from '../images/QRCode.svg'
import cofre from  '../images/cofrinho.svg'
import cofrinho2 from '../images/cofrinho2.svg'
import maquina from  '../images/maquinacartao.svg'
function Vantagens2() {
  return (
    <section className={styles.Vantagens}>
      <div className={styles.direita}>
    <div className={styles.texto}>
    <h1>Aqui seu Icash é valorizado de verdade</h1>
        <h3>Se você procura um banco que valoriza seu dinheiro e a sua arte, esse banco é o Icard</h3>
    </div>
      </div>
      <div className={styles.esquerda}>
        <div className={styles.circuloCima}>
          <div>
            <div className={styles.circulo}>
                <img src={qr} alt="" />
            </div>
            <p>Finaciamento para projetos coletivos</p>
          </div>
          <div>
            <div className={styles.circulo}>
                <img src={cofre} alt="" />
            </div>
            <p>Descontos em estudios de gravação</p>
          </div>
        </div>
        <div className={styles.circuloBaixo}>
          <div>
            <div className={styles.circulo}>
                <img src={cofrinho2} alt="" />
            </div>
            <p>Emprestimos para compra de materiais</p>
          </div>
          <div >
            <div className={styles.circulo}>
                <img src={maquina} alt="" />
            </div>
            <p>Patrocionio para curta- metragens</p>
          </div>
        </div>
      </div>
      
    </section>
  );
}
export default Vantagens2;
