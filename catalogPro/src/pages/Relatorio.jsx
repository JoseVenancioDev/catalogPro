import React, { useState, useEffect } from 'react';
import { Acessos } from '../components/Acessos';
import './css/RelatorioProdutos.css';

export const Relatorio = () => {
    const [produtos, setProdutos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formValues, setFormValues] = useState({
        id_produto: '', // Inclui o ID do produto
        nome: '',
        preco: '',
        descricao: '',
        validade: '',
        foto_produto: '',
        distribuidora: '',
    });
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

    const iniciarEdicao = (index) => {
        const produtoSelecionado = produtos[index];
        setEditIndex(index);
        setFormValues({
            id_produto: produtoSelecionado.id_produto, // Define o ID do produto
            nome: produtoSelecionado.nome_produto || '',
            preco: produtoSelecionado.preco_produto || '',
            distribuidora: produtoSelecionado.distribuidora || '',
            validade: produtoSelecionado.data_validade || '',
            descricao: produtoSelecionado.descricao_produto || '',
            foto_produto: produtoSelecionado.foto_produto || '',
        });
    };

    const salvarEdicao = async () => {
        try {
            const response = await fetch('http://localhost/catalogPro/server/updateProduto.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formValues), // Envia os valores do formulário
            });

            if (!response.ok) {
                throw new Error('Erro ao salvar produto');
            }

            const result = await response.json();
            console.log(result); // Log para verificar a resposta do servidor

            // Atualiza a lista de produtos após a edição
            setProdutos(produtos.map((p, index) => (index === editIndex ? { ...p, ...formValues } : p)));
            setEditIndex(null);
            setFormValues({ // Limpa o formulário após salvar
                id_produto: '',
                nome: '',
                preco: '',
                descricao: '',
                validade: '',
                foto_produto: '',
                distribuidora: '',
            });
        } catch (error) {
            console.error('Erro ao salvar produto:', error);
            setError(`Erro ao salvar o produto: ${error.message}`);
        }
    };

    const cancelarEdicao = () => {
        setEditIndex(null);
        setFormValues({
            id_produto: '', // Reseta o ID
            nome: '',
            preco: '',
            descricao: '',
            validade: '',
            foto_produto: '',
            distribuidora: '',
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({
            ...prevValues,
            [name]: value || '',
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormValues({
            ...formValues,
            foto_produto: file ? URL.createObjectURL(file) : '', // Use a URL da imagem
        });
    };

    const excluirProduto = async (index) => {
        const produtoId = produtos[index].id_produto;
        try {
            const response = await fetch('http://localhost/catalogPro/server/deleteProduto.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ deleteId: produtoId }),
            });

            if (!response.ok) {
                throw new Error('Erro ao deletar produto');
            }

            setProdutos(produtos.filter((_, i) => i !== index));
        } catch (error) {
            console.error(error);
            setError('Erro ao excluir o produto.');
        }
    };

    return (
        <div className="relatorio">
            <Acessos />
            <div className="relatorio-produtos">
                <h3>Relatório de Produtos</h3>
                {error && <p className="error">{error}</p>}

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
                                <tr key={produto.id_produto}>
                                    {editIndex === index ? (
                                        <>
                                            <td>
                                                <input name="nome" value={formValues.nome} onChange={handleChange} />
                                            </td>
                                            <td>
                                                <input name="preco" value={formValues.preco} onChange={handleChange} />
                                            </td>
                                            <td>
                                                <input name="distribuidora" value={formValues.distribuidora} onChange={handleChange} />
                                            </td>
                                            <td>
                                                <input name="validade" value={formValues.validade} onChange={handleChange} />
                                            </td>
                                            <td>
                                                <input name="descricao" value={formValues.descricao} onChange={handleChange} />
                                            </td>
                                            <td>
                                                <input type="file" onChange={handleImageChange} />
                                                {formValues.foto_produto && <img src={formValues.foto_produto} alt="Produto" width="50" />}
                                            </td>
                                            <td>
                                                <button onClick={salvarEdicao}>Salvar</button>
                                                <button onClick={cancelarEdicao}>Cancelar</button>
                                            </td>
                                        </>
                                    ) : (
                                        <>
                                            <td>{produto.nome_produto}</td>
                                            <td>{produto.preco_produto}</td>
                                            <td>{produto.distribuidora}</td>
                                            <td>{produto.data_validade}</td>
                                            <td>{produto.descricao_produto}</td>
                                            <td>
                                                {produto.foto_produto && <img src={produto.foto_produto} alt="Produto" width="50" />}
                                            </td>
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
    );
};
