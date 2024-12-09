import React from 'react';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      {/* Aqui você pode colocar o conteúdo principal */}
      <main>
        <h2>Bem-vindo ao S/A Armazém Pet!</h2>
        <p>Encontre os melhores produtos para o seu pet.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
