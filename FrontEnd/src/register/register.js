import notify from "../notify/Notify"
import rota from "../rotaBackEnd.js"


class Register {

    constructor(){}

    login () {
        return window.location.href = `${window.location.origin}/login`
    }

    async registrar () {

        const user = document.getElementById("user").value
        const senha = document.getElementById("senha").value
        const confirmar_senha = document.getElementById("confirmar_senha").value
        
        const todasVerificacoes = this.#verificarUserSenha(user, senha, confirmar_senha)

        if ( !todasVerificacoes ) {
            return
        }

        return window.location.href = `${window.location.origin}/`

    }

    async #verificarUserSenha(user, senha, senha2) {

        if ( user.length === 0 || senha.length === 0 ) {
            return notify.error("Preencha todos os campos")
        }

        if ( user.length < 6 ) {
            return notify.error("Seu nome deve ter ao menos 6 caracteres")
        }

        if ( !this.#verifyStringCompatible(user) ) {
            return notify.error("Seu nome só pode ter letras e underline ( _ )")
        }

        if ( senha < 7 ) {
            return notify.error("Sua senha tem que ter pelo menos 8 caracteres")
        }

        if ( !( senha === senha2 ) ) {
            return notify.error("As senhas não correspondem")
        }

        const register = await this.#verifyRegister(user, senha)

        if ( !register ) {
            return notify.error("Conta já existe")
        }

        return true

    }

    async #verifyRegister (user, senha) {

        const response = await fetch(`${rota}/register`, {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({user : user, senha : senha})
        }) 

        if ( !response.ok ) {
            return notify.error("Erro no servidor, tente novamente mais tarde.")
        }

        const data = await response.json()

        return data.data

    }

    #verifyStringCompatible ( str ) {

        const regex = /^[a-zA-Z_]+$/;

        return regex.test(str);

    }

}


const reg = new Register()

export default reg