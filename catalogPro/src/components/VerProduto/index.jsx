import React from 'react';
import './VerProduto.css';

export const VerProduto = ({ produtos = [] }) => {
    return (
        <div className='produtos-recentes'>
            <h3>Produtos Recentes</h3>
            <div className="lista-recentes">
                {produtos.length === 0 ? (
                    <p>Não há produtos!</p>
                ) : (
                    <ul>
                        {produtos.map((produto, index) => (
                            <li key={index}>
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
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
