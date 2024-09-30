import React from 'react';
import './CardProduto.css';

const CardProduto = ({ produto }) => {
    return (
        <div className="card-produto">
            <h4>{produto.nome}</h4>
            <p>Preço: R$ {produto.preco}</p>
            <p>Distribuidora: {produto.distribuidora}</p>
            <p>Validade: {produto.validade}</p>
            <p>Descrição: {produto.descricao}</p>
            {produto.foto && <img src={`http://localhost/catalogPro/server/img/img/${produto.foto}`} alt={produto.nome} />}
        </div>
    );
};

export default CardProduto;
