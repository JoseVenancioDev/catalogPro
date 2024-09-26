import React, { useState } from 'react';
import './FormProduto.css';

export const FormProduto = () => {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [distribuidora, setDistribuidora] = useState('');
    const [validade, setValidade] = useState('');
    const [descricao, setDescricao] = useState('');
    const [foto, setFoto] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
    
            // Adicione isso para depurar a resposta
            console.log('Response Status:', response.status);
            const text = await response.text(); // Obter a resposta como texto
            console.log('Response Text:', text); // Log da resposta
    
            if (response.ok) {
                const data = JSON.parse(text); // Tente converter o texto em JSON
                alert(data.mensagem || 'Produto cadastrado com sucesso!');
                // Limpar os campos do formulário após o envio bem-sucedido
                setNome('');
                setPreco('');
                setDistribuidora('');
                setValidade('');
                setDescricao('');
                setFoto(null);
            } else {
                const errorData = JSON.parse(text); // Certifique-se de lidar com a resposta de erro
                alert(errorData.erro || 'Falha ao cadastrar produto.');
            }
        } catch (error) {
            console.error('Erro ao enviar o formulário:', error);
            alert('Erro ao enviar o formulário, tente novamente.');
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
