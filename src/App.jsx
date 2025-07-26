import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Cafeteria from "./Cafeteria";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/cafeteria" element={<Cafeteria/>}>
      </Routes>
    </Router>
  )
}

export default App