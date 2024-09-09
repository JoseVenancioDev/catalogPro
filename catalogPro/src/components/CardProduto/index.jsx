import React from 'react';
import './CardProduto.css';

const CardProduto = ({ produto, onEdit, onRemove }) => {
    return (
        <div className="card-produto">
            <h4>{produto.nome}</h4>
            {produto.foto && (
                <img 
                    src={URL.createObjectURL(produto.foto)} 
                    alt={produto.nome} 
                    width="100"
                />
            )}
            <p>Preço: {produto.preco}</p>
            <p>Distribuidora: {produto.distribuidora}</p>
            <p>Validade: {produto.validade}</p>
            <p>Descrição: {produto.descricao}</p>
        </div>
    );
};

export default CardProduto;
