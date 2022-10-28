import { Link } from 'react-router-dom'
import styles  from '../css/Icard.module.css'
import cartoes from '../images/cartoes.png'
function Icard(){
    return(
        <section className={styles.icard}>
            <div className={styles.texto}>
                <h1 className={styles.h1}>Conheça o cartão Icard e todas as suas vantagens </h1>
                <h3 className={styles.h3}>Facilite suas compras e ainda ganhe premios com o uso do cartão fisíco e também o cartão digital</h3>
            <Link to='/Login'>
            <button className={styles.btn}>
                Entrar
               </button>
            </Link>
            </div>
            <div className={styles.imagem}>
                <img src={cartoes} alt="" />
            </div>

        </section>
    )
}
export default Icard