import app from "../app.js"
import register from "../models/register.js"

class Register {

    constructor(){
        this.init()
    }

    init () {

        app.post("/register", async (req, res) => {

            const {user, senha} = req.body

            const verify = await register.verifyRegister(user, senha)

            res.json({data : verify})

        })

    }

}

const reg = new Register()

export default reg