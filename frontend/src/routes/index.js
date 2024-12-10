import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../pages/home";
import Racoes from "../pages/racoes";
import Brinquedos from "../pages/brinquedos";
import Acessorios from "../pages/acessorios";
import ProdutoDetalhes from "../pages/produtodetalhes";
import Ajuda from '../pages/ajuda';
import Termos from '../pages/termos';
import Politica from '../pages/politica';
import Produtos from '../pages/produtos';
import Contato from '../pages/contato';
import Sobre from '../pages/sobre';
import NotFound from "../pages/notfound";


const RoutesConfig = () => {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/racoes" element={<Racoes />} />
      <Route path="/brinquedos" element={<Brinquedos />} />
      <Route path="/acessorios" element={<Acessorios />} />
      <Route path="/produtos/:id" element={<ProdutoDetalhes />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/ajuda" element={<Ajuda />} />
      <Route path="/termos" element={<Termos />} />
      <Route path="/politica" element={<Politica />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
    </>
  );
};

export default RoutesConfig;

