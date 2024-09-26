import React, { useState, useEffect } from 'react';
import CardProduto from '../CardProduto';
import './VerProduto.css';

export const VerProduto = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost/obter_produto.php');
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        };
        fetchProdutos();
    }, []);

    return (
        <div className="produtos-recentes">
            <h3>Produtos Recentes</h3>
            <div className="lista-recentes">
                {produtos.map((produto, index) => (
                    <CardProduto key={index} produto={produto} />
                ))}
            </div>
        </div>
    );
};
