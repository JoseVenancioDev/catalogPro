import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Certifique-se de que você está usando react-router-dom para roteamento
import './css/Login.css';

export function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (username && password) {
            console.log('Usuário:', username);
            console.log('Senha:', password);
            navigate('/bemvindo');
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Entrar</button>
            </form>
            <a href="/bemvindo" className="register-link">Não tem uma conta? Cadastre-se</a>
        </div>
    );
}
