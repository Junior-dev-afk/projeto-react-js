import express from "express"
import cors from "cors"


const port = 8080
const app = express()
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:5173', 
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type'
};

app.use(cors(corsOptions));

app.listen(port, ()=>{
    console.log(`server rodando em http://localhost:${port}`);
})


export default app