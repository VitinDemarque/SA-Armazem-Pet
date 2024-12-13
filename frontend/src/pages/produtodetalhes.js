import React from "react";
import { useParams } from "react-router-dom";

const ProdutoDetalhes = () => {
  const { id } = useParams(); // Obtém o id do produto da URL

  return (
    <div className="pagcenter">
      <h2>Detalhes do Produto {id}</h2>
      <p>Informações detalhadas sobre o produto {id}...</p>
      {/* Aqui você pode exibir as informações completas do produto */}
    </div>
  );
};

export default ProdutoDetalhes;
