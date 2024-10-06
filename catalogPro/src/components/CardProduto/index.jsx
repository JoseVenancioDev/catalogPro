import React, { useEffect, useState } from 'react';
import './CardProduto.css';

const CardProduto = ({ produto }) => {
    return (
        <div className="card-produto">
            <h4>{produto.nome_produto}</h4>
            {produto.foto_produto && <img src={`${produto.foto_produto}`} alt={produto.nome}  />}
            <p>Preço: R$ {produto.preco_produto}</p>
            <p>Distribuidora: {produto.distribuidora}</p>
            <p>Validade: {produto.data_validade}</p>
            <p>Descrição: {produto.descricao_produto}</p>
           
        </div>
    );
};

const ProdutoLista = () => {
    const [produtos, setProdutos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost/catalogPro/server/getProdutos.php');
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                const data = await response.json();
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setError(`Não foi possível carregar os produtos: ${error.message}`);
            }
        };

        fetchProdutos();
    }, []);

    return (
        <div>
            {error && <p>{error}</p>}
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

export default ProdutoLista;
