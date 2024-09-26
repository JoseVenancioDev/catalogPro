import React, { useState, useEffect } from 'react';
import CardProduto from '../CardProduto';
import './VerProduto.css';

export const VerProduto = () => {
    const [produtosExibidos, setProdutosExibidos] = useState([]);
    const [erro, setErro] = useState(null); // Para tratar erros

    // Função para buscar produtos
    const fetchProdutos = async () => {
        try {
            const response = await fetch('http://localhost/catalogPro/server/obter_produto.php');
            console.log('Response Status:', response.status); // Mostra o status da resposta

            if (!response.ok) {
                throw new Error('Erro ao buscar produtos: ' + response.statusText);
            }

            const data = await response.json(); // Isso pode lançar um erro se não for JSON válido
            console.log('Data Received:', data); // Mostra os dados recebidos

            if (Array.isArray(data)) {
                setProdutosExibidos(data);
            } else {
                throw new Error('Formato de dados inválido');
            }
        } catch (error) {
            console.error('Error fetching products:', error);
            setErro(error.message); // Armazena a mensagem de erro
        }
    };

    useEffect(() => {
        fetchProdutos();
    }, []);

    // Função para adicionar um produto
    const adicionarProduto = async (novoProduto) => {
        try {
            await fetch('create.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(novoProduto),
            });
            // Atualiza a lista de produtos após a adição
            await fetchProdutos();
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            setErro('Erro ao adicionar produto'); // Mensagem de erro ao adicionar
        }
    };

    return (
        <div className="produtos-recentes">
            <h3>Produtos Recentes</h3>
            {erro && <div className="erro">{erro}</div>} {/* Exibe mensagem de erro */}
            <div className="lista-recentes">
                {produtosExibidos.length > 0 ? (
                    produtosExibidos.map((produto, index) => (
                        <CardProduto key={index} produto={produto} />
                    ))
                ) : (
                    <p>Nenhum produto encontrado.</p>
                )}
            </div>
        </div>
    );
};
