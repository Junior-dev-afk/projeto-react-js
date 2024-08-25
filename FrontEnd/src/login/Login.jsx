import styles from "./login.module.css"
import funcao from "./login.js"



function Login() {
    return (
        <div id="container" className={styles.container}>
            <div className={styles.login}>
                <input type="text" placeholder="User" id="user" />
                <input type="text" placeholder="Senha" id="senha" />
                <button onClick={() => funcao.logar()}>Logar</button>
                <button onClick={() => funcao.registrar()} >Registrar</button>
            </div>
        </div>
    )
}



export default Login