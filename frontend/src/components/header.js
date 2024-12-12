import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => { 
  const phoneNumber = "5532988532033"; // Substitua pelo número do WhatsApp (formato: país + DDD + número)
  const message = "Olá, gostaria de saber mais sobre os produtos!"; // Mensagem padrão
  const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <header className="header">
      <div className="container">
        {/* Substitua o texto pela logo da loja */}
        <div className="logo">
          <Link to="/">
            <img
              src={require("../assets/logoHeader.png")}
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
        <div className="whatsapp-button">
          <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
            <img
              src={require("../assets/wpp.png")}
              alt="WhatsApp"
              className="whatsapp-img"
            />
          </a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Buscar produtos..." />
          <button>Buscar</button>
        </div>
        <div className="cart-icon">
          <Link to="/carrinho">
            <img
              src={require("../assets/carrinho1.png")}
              alt="Carrinho de Compras"
              className="cart-img"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

