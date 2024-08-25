import notify from "../notify/Notify"
import rota from "../rotaBackEnd.js"


class Login {

    constructor(){}

    registrar() {
        return window.location.href = `${window.location.origin}/register`;
    }

    async logar() {

        const user = document.getElementById("user").value
        const senha = document.getElementById("senha").value

        if ( !this.#isPrenchido(user, senha) ) {
            return notify.error("Preencha todos os campos");
        }

        const very = await this.#verificarSenha(user, senha)

        if ( very ) {
            return window.location.href = `${window.location.origin}/`;
        }

        return notify.error("Usuario e/ou senha incorretos");

    }
    
    #isPrenchido(user, senha) {
        
    
        if (user.length === 0 || senha.length === 0) {
            return false;
        }
    
        return true;
    }

    async #verificarSenha (user, senha) {
        
        const response = await fetch(`${rota}/verifyLogin`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({user : user, senha : senha})
        })

        if ( !response.ok ) {
            notify.info("Erro no servidor, tente novamente mais tarde.")
        }

        const data = await response.json()

        return data.data

    }

}

const lg = new Login();

export default lg;
