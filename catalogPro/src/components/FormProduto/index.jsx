import React, { useState } from 'react';
import './FormProduto.css';

export const FormProduto = ({ adicionarProduto }) => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [distribuidora, setDistribuidora] = useState('');
    const [validade, setValidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!foto) {
            alert('Por favor, adicione uma foto do produto.');
            return;
        }

        const formData = new FormData();
        formData.append('nome_produto', nome);
        formData.append('descricao_produto', descricao);
        formData.append('preco_produto', preco);
        formData.append('data_validade', validade);
        formData.append('foto_produto', foto);

        const response = await fetch('cadastrar_produto.php', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            alert(data.message); // Mensagem do PHP
            // Limpar o formulário após o envio
            setNome('');
            setPreco('');
            setDistribuidora('');
            setValidade('');
            setDescricao('');
            setFoto(null);
            adicionarProduto(); // Atualizar a lista de produtos, se necessário
        } else {
            alert('Erro ao cadastrar o produto.');
        }
    };

    return (
        <div className="form-section">
            <h2>Cadastrar Produto</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="file" 
                    name="fotoProduto" 
                    required 
                    onChange={(e) => setFoto(e.target.files[0])}
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
                    placeholder="Validade" 
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
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
};
