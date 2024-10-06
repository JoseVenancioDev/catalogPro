import React from 'react';
import CardProduto from '../CardProduto';
import './VerProduto.css';

export const VerProduto = ({ produtos }) => {
    return (
        <div className="produtos-recentes">
            <h3>Produtos Recentes</h3>
            <div className="lista-recentes">
                {produtos.length > 0 ? (
                    produtos.map((produto) => (
                        <CardProduto key={produto.id_produto} produto={produto} />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div>
        </div>
    );
};
