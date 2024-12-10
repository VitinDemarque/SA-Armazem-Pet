import React from 'react';
import '../styles.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-info">
          <p>© 2024 S/A Armazém Pet. Todos os direitos reservados.</p>
          <p>Endereço: Avenida Constantino Pinto, 265 - Muriaé-MG</p>
        </div>
        <div className="footer-links">
          <a href="politica">Política de Privacidade</a>
          <a href="termos">Termos de Uso</a>
          <a href="ajuda">Ajuda</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
