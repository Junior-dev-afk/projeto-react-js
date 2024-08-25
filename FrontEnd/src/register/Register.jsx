import style from "./register.module.css"
import funcoes from "./register.js"


function Register () {
    return (
        <div id="container" className={style.container}>
            <div className={style.register}>
                <input id="user" placeholder="user" type="text" />
                <input id="senha" placeholder="senha" type="text" />
                <input id="confirmar_senha" placeholder="confirmar senha" type="text" />
                <button onClick={() => funcoes.registrar()}>Registrar</button>
                <button onClick={() => funcoes.login()}>Logar</button>
            </div>
        </div>
    )
}


export default Register