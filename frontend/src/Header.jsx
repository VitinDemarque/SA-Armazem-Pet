import React from 'react';
import './styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>S/A Armazém Pet</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#sobre">Sobre Nós</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Buscar..." />
          <button>Pesquisar</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
