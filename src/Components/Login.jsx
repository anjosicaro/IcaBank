import { Link } from 'react-router-dom'
import styles from  '../css/Login.module.css'
import imagem1 from '../images/cofrinho.svg'
import imagem2 from    '../images/pintora.svg'
function Login(){
    return(
        <section className={styles.login}>
            <div>
                <img src={imagem1} alt="" />
            </div>
<div className={styles.container}>
    <h1 className={styles.texto}>Faça seu Login</h1>

    <form>
        <input type="text" placeholder='CPF'required maxLength={10} className={styles.cpf} />
        <input type="password" placeholder='Senha'  maxLength={10} className={styles.cpf}/>
       <Link to='/'>
       <button type="text" name="Continuar" placeholder='Continuar' className={styles.bnt}>Continuar</button>
       </Link>
    </form>
</div>
{/* <div>
    <img src={imagem2} alt="" />
</div> */}

        </section>
    )
}
export default Login