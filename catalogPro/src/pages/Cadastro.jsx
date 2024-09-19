import React, { useState } from 'react';
import './css/Cadastro.css';

export function Cadastro() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Validação de senha
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            setSuccessMessage('');
            return;
        }
    
        const userData = {
            fullname,
            email,
            username,
            password,
            confirmPassword // Certifique-se de que esta chave corresponde ao que o PHP espera
        };
    
        try {
            const response = await fetch('http://localhost/catalogPro/server/cadastro.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setSuccessMessage(data.message);
                setError('');
                // Redirecionar ou exibir mensagem de sucesso
                // Exemplo: navigate('/login');
            } else {
                setError(data.message || 'Erro ao cadastrar.');
                setSuccessMessage('');
            }
        } catch (error) {
            setError('Erro ao se conectar com o servidor.');
            console.error('Erro de cadastro:', error);
        }
    };

    return (
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
                    required 
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
                    name="confirm_password" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required 
                />

                <button type="submit">Cadastrar</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <a href="/login" className="login-link">Já tem uma conta? Faça login</a>
        </div>
    );
}
