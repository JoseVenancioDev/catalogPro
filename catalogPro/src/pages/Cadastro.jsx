import React, { useState } from 'react';
import './css/Cadastro.css';

export function Cadastro() {
    const [photo, setPhoto] = useState(null);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleFileChange = (event) => {
        setPhoto(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validação de senha
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);

        try {
            const response = await fetch('https://sua-api.com/cadastro', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                // Cadastro bem-sucedido
                console.log('Cadastro bem-sucedido:', data);
                // Redirecionar ou exibir mensagem de sucesso
                // Exemplo: navigate('/login');
            } else {
                setError(data.message || 'Erro ao cadastrar.');
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
                <label htmlFor="photo">Foto de perfil:</label>
                <input 
                    type="file" 
                    id="photo" 
                    name="photo" 
                    accept="image/*" 
                    onChange={handleFileChange} 
                    required 
                />

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
            <a href="/login" className="login-link">Já tem uma conta? Faça login</a>
        </div>
    );
}
