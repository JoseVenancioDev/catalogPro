import React, { useState } from 'react';
import './FormProduto.css';

export const FormProduto = ({ adicionarProduto }) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [distribuidora, setDistribuidora] = useState('');
    const [validade, setValidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState(null);
    const [loading, setLoading] = useState(false);
    const [contagemSelecoes, setContagemSelecoes] = useState(0); // Contagem de seleções de foto

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('distribuidora', distribuidora);
        formData.append('validade', validade);
        formData.append('descricao', descricao);
        formData.append('foto', foto);

        try {
            const response = await fetch('http://localhost/catalogPro/server/create.php', {
                method: 'POST',
                body: formData,
            });

            const text = await response.text();
            console.log(text);

            if (response.ok) {
                const data = JSON.parse(text);
                alert(data.mensagem || 'Produto cadastrado com sucesso!');

                adicionarProduto({ nome, preco, distribuidora, validade, descricao, foto });

                // Limpa os campos do formulário
                setNome('');
                setPreco('');
                setDistribuidora('');
                setValidade('');
                setDescricao('');
                setFoto(null);
            } else {
                const errorData = JSON.parse(text);
                alert(errorData.erro || 'Falha ao cadastrar produto.');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Erro ao enviar o formulário, tente novamente.');
        } finally {
            setLoading(false);
        }
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFoto(file); // Define a foto selecionada
            setContagemSelecoes(prevCount => {
                const newCount = prevCount + 1;
                // Atualiza a página se a contagem for par
                if (newCount % 2 === 0) {
                    window.location.reload();
                }
                return newCount;
            });
        }
    };

    return (
        <div className="form-section">
            <h2>Cadastrar Produto</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="file" 
                    name="foto"
                    required 
                    onChange={handleFileChange}
                /><br />
                <input 
                    type="text" 
                    name="nome" 
                    placeholder="Nome do Produto" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required 
                /><br />
                <input 
                    type="number" 
                    name="preco" 
                    placeholder="Preço do Produto" 
                    value={preco}
                    step="0.01"
                    onChange={(e) => setPreco(e.target.value)}
                    required 
                /><br />
                <input 
                    type="text" 
                    name="distribuidora" 
                    placeholder="Distribuidora" 
                    value={distribuidora}
                    onChange={(e) => setDistribuidora(e.target.value)}
                    required 
                /><br />
                <input 
                    type="date" 
                    name="validade" 
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                    required 
                /><br />
                <textarea 
                    name="descricao" 
                    placeholder="Descrição" 
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required 
                /><br />
                <button type="submit" disabled={loading}>
                    {loading ? 'Adicionando...' : 'Adicionar Produto'}
                </button>
            </form>
        </div>
    );
};
