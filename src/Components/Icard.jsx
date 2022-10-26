import { Link } from 'react-router-dom'
import styles  from '../css/Icard.module.css'
import cartoes from '../images/cartoes.png'
function Icard(){
    return(
        <section className={styles.icard}>
            <div className={styles.texto}>
                <h1 className={styles.h1}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam vel officia quis ullam quod atque nesciunt a esse est facere! Tempora, commodi expedita? Libero temporibus sed illum at vitae neque.</h1>
                <h3 className={styles.h3}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, similique, dolorem asperiores tempore aspernatur itaque consequuntur reiciendis laborum suscipit est repellendus enim aperiam nobis? Molestias expedita quod dolorem aliquid optio?</h3>
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