import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

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
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} autoComplete="on">
                <label htmlFor="email_usuario">Email:</label>
                <input
                    type="email"
                    id="email_usuario"
                    name="email_usuario"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="senha_usuario">Senha:</label>
                <input
                    type="password"
                    id="senha_usuario"
                    name="senha_usuario"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Entrar</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            <a href="/bemvindo" className="signup-link">Não tem uma conta? Cadastre-se</a>
        </div>
    );
}
