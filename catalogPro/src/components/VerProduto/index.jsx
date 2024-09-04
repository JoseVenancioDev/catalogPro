import React, { useState, useEffect } from 'react';
import './VerProduto.css';

export const VerProduto = ({ produtos = [] }) => {
    const [produtosExibidos, setProdutosExibidos] = useState([]);

    useEffect(() => {
        if (produtos.length > 0) {
            setProdutosExibidos(prevProdutos => {
                // Se a lista já tem 5 produtos, remove o primeiro
                const produtosAtualizados = prevProdutos.length === 5
                    ? [...prevProdutos.slice(1), produtos[produtos.length - 1]]
                    : [...prevProdutos, produtos[produtos.length - 1]];

                return produtosAtualizados;
            });
        }
    }, [produtos]);

    return (
        <div className='produtos-recentes'>
            <h3>Produtos Recentes</h3>
            <div className="lista-recentes">
                {produtosExibidos.length === 0 ? (
                    <p>Não há produtos!</p>
                ) : (
                    <ul>
                        {produtosExibidos.map((produto, index) => (
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
