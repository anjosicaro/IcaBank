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
           <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam animi sunt quaerat saepe harum ipsam quo perferendis, quidem nisi eveniet ex dolor possimus corporis maiores aliquid esse natus beatae inventore.</h1>
            <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores eligendi voluptas deserunt dolor esse ratione odit qui quibusdam, iste officiis facere est, consequatur iure! Quae, quidem? Nemo nam nulla fuga!</h3>
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