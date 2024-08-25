import database from "./database.js"


class Login {

    constructor () {}

    async verify (user, senha) {

        const rows = await database.readAllAccounts()

        for ( let users of rows ) {

            if ( users.user == user && users.senha == senha ) {
                return true
            }

        }

        return false

    }

}


const login = new Login()

export default login