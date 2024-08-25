import database from "./database.js"


class Register {

    constructor(){}

    async verifyRegister (user, senha) {

        const accountExists = await this.#verifyUserExistis(user)

        if ( accountExists ) {
            return false
        }

        await database.createAccount(user, senha)

        return true

    }

    async #verifyUserExistis (user) {

        const rows = await database.readAllAccounts()


        for ( let users of rows ) {

            if ( users.user == user ) {
                return true
            }

        }

        return false
        
    }

}

const reg = new Register()

export default reg