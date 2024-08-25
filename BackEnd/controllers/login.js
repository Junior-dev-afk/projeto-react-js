import app from "../app.js"
import login from "../models/login.js"

class Login {

    constructor () {
        this.init()
    }

    init () {

        app.post("/verifyLogin", async (req, res) => {

            const data = req.body

            const user = data.user
            const senha = data.senha

            const verify = await login.verify(user, senha)

            res.json({data : verify})

        })

    }

}


const lg = new Login()
export default lg