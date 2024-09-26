import React, { useState } from 'react';
import axios from 'axios';
import './css/Login.css';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost/catalogPro/server/login.php', {
                email_usuario: email,
                senha_usuario: password,
            });

            if (response.data.success) {
                window.location.href = '/produtos';
            } else {
                setError(response.data.message);
            }
        } catch (err) {
            setError('Erro ao fazer login. Verifique suas credenciais.');
        }
    };

    return (
        <div className="allLogin">
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            {error && <p className="error-message">{error}</p>}
            <a href="/cadastro" className="register-link">Não tem uma conta? Cadastre-se</a>
        </div>
        </div>
    );
}

