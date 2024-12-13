import React from "react";
import { useNavigate } from "react-router-dom";

const Carrinho = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/produtos");
  };

  const goToCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="pagcenter">
      <h1>CARRINHO</h1>
      <p>Encontre os produtos adicionados no carrinho!</p>
      <div className="button-group">
        <button onClick={goToProducts} className="btn-go-products"> Continuar Comprando </button>
        <button onClick={goToCheckout} className="btn-go-checkout"> Finalizar Compra </button>
      </div>
    </div>
  );
};

export default Carrinho;
