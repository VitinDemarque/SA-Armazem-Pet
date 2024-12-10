import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import RoutesConfig from './routes';
import "./styles.css";

const App = () => {
  return (
    <Router>
      <Header />
      <RoutesConfig/>
      <Footer />
    </Router>
  );
};

export default App;
