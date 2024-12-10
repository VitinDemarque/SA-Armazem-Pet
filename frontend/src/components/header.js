import React from "react";
import { Link } from "react-router-dom"; // Importando o Link do React Router
import "../styles.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* Substitua o texto pela logo da loja */}
        <div className="logo">
          <Link to="/"> {/* O Link redireciona para a página Home */}
            <img 
              src={require('../assets/logoHeader.png')} 
              alt="S/A Armazém Pet" 
              className="logo-img" 
            />
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos..." />
          <button>Buscar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
