import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./home/Home"
import Login from "./login/Login"
import Register from "./register/Register"


function App () {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element ={ <Home/> } />
                    <Route path="/home" element ={ <Home/> } />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


export default App