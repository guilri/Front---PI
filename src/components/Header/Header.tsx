import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../assets/logo.png'

function Header({ itens }) {
  return (
    <header className="header">
      <div className="header-box">
        <Link to="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
          <img src={logo}></img>
        </Link>

        <nav className="nav">
          <a href="#cardapio">Cardápio</a>
          <Link to="/login">Entrar / Criar conta</Link>
          <button>Carrinho · {itens}</button>
        </nav>
      </div>
    </header>
  )
}

export default Header
