
import './App.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <form>
      <h2>Login</h2>
      <input className='input-campo' type="email" placeholder='E-mail'/>
      <input className='input-campo' type="password" placeholder='Password'/>
      <label >
        <input className='input-checkbox' type="checkbox" /> Lembrar Senha
      </label>
      <button type='button' onClick={validar}><Link to="/cafeteria">Login</Link></button>
      <p>Ainda não tem cadastro? <Link to="/cadastro">Cadastre-se</Link></p>
      <h3>&copy;Cristiano Wanzeler 2025</h3>
      <h3>Todos os direitos reservados</h3>
    </form>
  )
}

export default Login
