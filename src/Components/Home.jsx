import styles from '../css/Home.module.css'
import dj from '../images/dj.svg'
import Icard from './Icard'
import SejaCliente from './SejaCliente'
import Vantagens from './Vantagens'
function Home(){
    return(
      <>
        <section className={styles.home}>
           <div className={styles.texto}>
           <h1>Emprestimos para pequenos grandes artistas</h1>
            <h3>se você quer crescer e não sabe como, nós te faremos grande</h3>
           </div>
          
           <div className={styles.imgBg}>
           <img src={dj} alt="dj" />
           </div>
        </section>

        <SejaCliente />
        <Vantagens />
        <Icard />
      </>
    )
}
export default Home