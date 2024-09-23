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
        if (produtos.length > 0) {
            setProdutosExibidos(prevProdutos => {
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
                    {(produtosExibidos.map((produto, index) => (
                        <CardProduto
                            key={index}
                            produto={produto}

                        />
                    ))
                )}
            </div>
        </div>
    );
};
