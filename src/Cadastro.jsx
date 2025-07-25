import './App.css'
import { Link } from 'react-router-dom'

function Cadastro(){
    return(
        <form>
            <h2>Cadastro</h2>
            <input className='input-campo' type="text" placeholder='User'/>
            <input className='input-campo' type="email" placeholder='E-mail'/>
            <input className='input-campo' type="pasword" placeholder='Password'/>
            <button>Cadastre-se</button>
            <p>Já tem cadastro? <Link to="/login"> Faça login</Link></p>

        </form>
    )
}
export default Cadastro