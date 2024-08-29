import React from 'react';
import './VerProduto.css';

export const VerProduto = () => {
    return (
        <div className="sidebar">
            <h3>Produtos Recentes</h3>
            <div className="recent-contacts">
                <p>Não há produtos!</p>
                {/* Tabela de produtos pode ser adicionada aqui */}
            </div>
        </div>
    );
}
