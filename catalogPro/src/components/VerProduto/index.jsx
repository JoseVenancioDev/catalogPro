import React from 'react';
import './VerProduto.css';

export const VerProduto = () => {
    return (
        <div className='produtos-recentes'>
            <h3>Produtos Recentes</h3>
            <div className="lista-recentes">
                <p>Não há produtos!</p>
                {/* Tabela de produtos pode ser adicionada aqui */}
            </div>
        </div>
    );
}
