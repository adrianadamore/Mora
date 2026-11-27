import { useEffect, useState } from 'react';
import '../styles/header.css';
import '../styles/global.css';
import logoBranco from '../assets/brand/logomorabranco.png';
import ThemeToggle from './ThemeToggle';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <a href="#" className="logo" aria-label="Mora - Início">
          <img src={logoBranco} alt="Mora" className="logo-img logo-light" />
        </a>

        {/* Menu de navegação */}
        <nav className="nav" aria-label="Menu principal">
          <a href="#">Início</a>
          <a href="#">Como funciona</a>
          <a href="#">Contato</a>
        </nav>

        {/* Botões de conta */}
        <div className="header-actions">
          <button type="button" className="btn btn-ghost">Entrar</button>
          <button type="button" className="btn btn-primary">Cadastrar</button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default Header;