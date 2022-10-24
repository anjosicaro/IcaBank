import { Link } from 'react-router-dom'
import styles from  '../css/Login.module.css'
function Login(){
    return(
        <section className={styles.login}>
<div className={styles.container}>
    <h1>Faça seu Login</h1>

    <form>
        <input type="text" placeholder='CPF'required maxLength={10} className={styles.cpf} />
        <input type="password" placeholder='Senha'  maxLength={10} className={styles.cpf}/>
       <Link to='/'>
       <button type="text" name="Continuar" placeholder='Continuar' className={styles.bnt}>Continuar</button>
       </Link>
    </form>

</div>
        </section>
    )
}
export default Login