import React, { useState, useEffect } from 'react';
import CardProduto from '../CardProduto';
import './VerProduto.css';

export const VerProduto = ({ produtos = [] }) => {
    const [produtosExibidos, setProdutosExibidos] = useState([]);
    const [produtoEditando, setProdutoEditando] = useState(null);
    const [produtoAtualizado, setProdutoAtualizado] = useState({
        nome: '',
        preco: '',
        distribuidora: '',
        validade: '',
        descricao: '',
        foto: null,
    });
// Exemplo para listar produtos
useEffect(() => {
    fetch('listar-produtos.php')
        .then(response => response.json())
        .then(data => setProdutosExibidos(data));
}, []);

// Exemplo para adicionar um produto
const adicionarProduto = async (novoProduto) => {
    await fetch('create.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(novoProduto),
    });
    // Atualizar a lista de produtos
    // ...
};

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
