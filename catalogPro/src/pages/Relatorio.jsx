import React, { useState, useEffect } from 'react';
import { Acessos } from '../components/Acessos';
import './css/RelatorioProdutos.css';

export const Relatorio = () => {
    const [produtos, setProdutos] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [formValues, setFormValues] = useState({});
    const [error, setError] = useState(null); // Para lidar com erros

    useEffect(() => {
        const fetchProdutos = async () => {
            try {
                const response = await fetch('http://localhost/catalogPro/server/getProdutos');
                if (!response.ok) {
                    throw new Error(`Erro na resposta do servidor: ${response.status}`);
                }
                const text = await response.text(); 
                console.log('Resposta do servidor:', text); 
                const data = JSON.parse(text); 
                setProdutos(data);
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
                setError('Não foi possível carregar os produtos.'); // Defina uma mensagem de erro
            }
        };

        fetchProdutos();
    }, []);

    const iniciarEdicao = (index) => {
        setEditIndex(index);
        setFormValues(produtos[index]);
    };

    const salvarEdicao = () => {
        const produtoAtualizado = { ...formValues };
        setProdutos(produtos.map((p, index) => (index === editIndex ? produtoAtualizado : p)));
        setEditIndex(null);
    };

    const cancelarEdicao = () => {
        setEditIndex(null);
        setFormValues({});
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setFormValues({
            ...formValues,
            foto: file ? URL.createObjectURL(file) : null
        });
    };

    const excluirProduto = (index) => {
        setProdutos(produtos.filter((_, i) => i !== index));
    };

    return (
        <div className="relatorio">
            <Acessos />
            <div className='relatorio-produtos'>
                <h3>Relatório de Produtos</h3>
                {error && <p className="error">{error}</p>} {/* Exibe mensagem de erro */}

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
                                <tr key={produto.id}> {/* Chave única para cada linha */}
                                    {editIndex === index ? (
                                        <>
                                            <td><input name='nome' value={formValues.nome} onChange={handleChange} /></td>
                                            <td><input name='preco' value={formValues.preco} onChange={handleChange} /></td>
                                            <td><input name='distribuidora' value={formValues.distribuidora} onChange={handleChange} /></td>
                                            <td><input name='validade' value={formValues.validade} onChange={handleChange} /></td>
                                            <td><input name='descricao' value={formValues.descricao} onChange={handleChange} /></td>
                                            <td>
                                                <input type="file" onChange={handleImageChange} />
                                                {formValues.foto && (
                                                    <img
                                                        src={formValues.foto}
                                                        alt={formValues.nome}
                                                        width="100"
                                                    />
                                                )}
                                            </td>
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
                                            <td>
                                                {produto.foto ? (
                                                    <img
                                                        src={produto.foto}
                                                        alt={produto.nome}
                                                        width="100"
                                                    />
                                                ) : 'Sem imagem'}
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
