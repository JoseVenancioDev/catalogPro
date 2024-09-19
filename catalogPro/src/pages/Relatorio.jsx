import React, { useState } from 'react';
import { Acessos } from '../components/Acessos';
import './css/RelatorioProdutos.css';

export const Relatorio = () => {
    // Dados de teste
    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Produto A',
            preco: 'R$ 15,00',
            distribuidora: 'Distribuidora X',
            validade: '01/2025',
            descricao: 'Descrição do Produto A',
            foto: null // Adicione um URL ou um Blob se desejar uma foto
        },
        {
            id: 2,
            nome: 'Produto B',
            preco: 'R$ 20,00',
            distribuidora: 'Distribuidora Y',
            validade: '03/2024',
            descricao: 'Descrição do Produto B',
            foto: null // Adicione um URL ou um Blob se desejar uma foto
        },
        {
            id: 3,
            nome: 'Produto C',
            preco: 'R$ 25,00',
            distribuidora: 'Distribuidora Z',
            validade: '12/2023',
            descricao: 'Descrição do Produto C',
            foto: null // Adicione um URL ou um Blob se desejar uma foto
        }
    ]);

    // Estado para controlar a edição em linha
    const [editIndex, setEditIndex] = useState(null);
    const [formValues, setFormValues] = useState({});

    // Função para iniciar a edição de um produto
    const iniciarEdicao = (index) => {
        setEditIndex(index);
        setFormValues(produtos[index]);
    };

    // Função para salvar a edição
    const salvarEdicao = () => {
        const produtoAtualizado = formValues;
        setProdutos(produtos.map((p, index) => (index === editIndex ? produtoAtualizado : p)));
        setEditIndex(null);
    };

    // Função para cancelar a edição
    const cancelarEdicao = () => {
        setEditIndex(null);
        setFormValues({});
    };

    // Função para lidar com mudanças no formulário
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    // Função para excluir um produto
    const excluirProduto = (index) => {
        setProdutos(produtos.filter((_, i) => i !== index));
    };

    return (
        <>
        <div className="relatorio">
        <Acessos/>
        <div className='relatorio-produtos'>
            <h3>Relatório de Produtos</h3>

            {/* Tabela de produtos */}
            {produtos.length === 0 ? (
                <p>Não há produtos para exibir!</p>
            ) : (
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th>Distribuidora</th>
                            <th>Validade</th>
                            <th>Descrição</th>
                            <th>Foto</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((produto, index) => (
                            <tr key={produto.id}>
                                {editIndex === index ? (
                                    <>
                                        <td><input name='nome' value={formValues.nome} onChange={handleChange} /></td>
                                        <td><input name='preco' value={formValues.preco} onChange={handleChange} /></td>
                                        <td><input name='distribuidora' value={formValues.distribuidora} onChange={handleChange} /></td>
                                        <td><input name='validade' value={formValues.validade} onChange={handleChange} /></td>
                                        <td><input name='descricao' value={formValues.descricao} onChange={handleChange} /></td>
                                        <td>{produto.foto ? (
                                            <img
                                                src={URL.createObjectURL(produto.foto)}
                                                alt={produto.nome}
                                                width="100"
                                            />
                                        ) : 'Sem imagem'}</td>
                                        <td>
                                            <button onClick={salvarEdicao}>Salvar</button>
                                            <button onClick={cancelarEdicao}>Cancelar</button>
                                        </td>
                                    </>
                                ) : (
                                    <>
                                        <td>{produto.nome}</td>
                                        <td>{produto.preco}</td>
                                        <td>{produto.distribuidora}</td>
                                        <td>{produto.validade}</td>
                                        <td>{produto.descricao}</td>
                                        <td>{produto.foto ? (
                                            <img
                                                src={URL.createObjectURL(produto.foto)}
                                                alt={produto.nome}
                                                width="100"
                                            />
                                        ) : 'Sem imagem'}</td>
                                        <td>
                                            <button onClick={() => iniciarEdicao(index)}>Editar</button>
                                            <button onClick={() => excluirProduto(index)}>Excluir</button>
                                        </td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
        </div>
        </>
        );
}
