import '../styles/header.css'
import '../styles/global.css'
import logoAzul from '../assets/brand/mora-logo-azul.png'
import logoRosa from '../assets/brand/mora-logo-rosa.png'
import ThemeToggle from './ThemeToggle'

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <a href="#" className="logo">
  <img src={logoAzul} alt="Mora" className="logo-img logo-light" />
  <img src={logoRosa} alt="" className="logo-img logo-dark" />
</a>

        {/* Menu de navegação */}
        <nav className="nav" aria-label="Menu principal">
          <a href="#">Início</a>
          <a href="#">Como funciona</a>
          <a href="#">Contato</a>

        </nav>

        {/* Botões de conta */}
        <div className="header-actions">
  <ThemeToggle />
  <button className="btn btn-ghost">Entrar</button>
  <button className="btn btn-primary">Cadastrar</button>
</div>
      </div>
    </header>
  )
}

export default Header