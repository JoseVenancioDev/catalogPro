import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Cadastro.css';

export function Cadastro() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password.trim() !== confirmPassword.trim()) {
            console.log('As senhas não conferem.');
            setError('As senhas não conferem.');
            setSuccess('');
            return;
        }

        const formData = new FormData();
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        console.log('FormData:', Array.from(formData.entries())); // Debug: Verifique os dados

        try {
            const response = await axios.post('http://localhost/catalogPro/server/cadastro.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Corrigido a condição de sucesso
            if (response.data.success) {
                setSuccess('Cadastro realizado com sucesso!');
                setError('');
                // Limpar campos após sucesso
                setFullname('');
                setEmail('');
                setUsername('');
                setPassword('');
                setConfirmPassword('');

                // Redireciona após 5 segundos
                setTimeout(() => {
                    setRedirect(true);
                }, 5000);
            } else {
                setError(response.data.message);
                setSuccess('');
            }
            
        } catch (err) {
            console.error('Erro ao enviar o formulário:', err);
            if (err.response) {
                setError(err.response.data.message || 'Ocorreu um erro ao enviar o formulário.');
            } else {
                setError('Erro de rede. Tente novamente.');
            }
            setSuccess('');
        }
    };

    useEffect(() => {
        if (redirect) {
            window.location.href = '/login'; // Redireciona para a página de login
        }
    }, [redirect]);

    return (
        <div className="allCadastro">
            <div className="signup-container">
                <h2>Cadastro</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fullname">Nome Completo:</label>
                    <input 
                        type="text" 
                        id="fullname" 
                        name="fullname" 
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />

                    <label htmlFor="username">Usuário:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />

                    <label htmlFor="password">Senha:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />

                    <label htmlFor="confirm_password">Confirme a Senha:</label>
                    <input 
                        type="password" 
                        id="confirm_password" 
                        name="confirmPassword" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required 
                    />

                    <button type="submit">Cadastrar</button>
                </form>
                {error && <p className="error-message">{error}</p>}
                {success && <p className="success-message">{success}</p>}
                <a href="/login" className="login-link">Já tem uma conta? Faça login</a>
            </div>
        </div>
    );
}
