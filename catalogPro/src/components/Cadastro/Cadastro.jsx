import React, { useState } from 'react';
import axios from 'axios';
import './Cadastro.css';

export function Cadastro() {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photo, setPhoto] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Formulário enviado');

        if (password !== confirmPassword) {
            setError('As senhas não conferem.');
            return;
        }

        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('username', username);
        formData.append('password', password);
        formData.append('confirm_password', confirmPassword);

        try {
            const response = await axios.post('http://localhost/catalogPro/server/cadastro.php', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log('Resposta do servidor:', response.data);

            if (response.data.success) {
                setSuccess('Cadastro realizado com sucesso!');
                setError('');
            } else {
                setError(response.data.message);
                setSuccess('');
            }
        } catch (err) {
            console.error('Erro ao enviar o formulário:', err);
            setError('Ocorreu um erro ao enviar o formulário.');
            setSuccess('');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullname">Nome Completo:</label>
                <input
                    type="text"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="username">Nome de Usuário:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <label htmlFor="confirm-password">Confirmar Senha:</label>
                <input
                    type="password"
                    id="confirm-password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />

                <label htmlFor="photo">Foto:</label>
                <input
                    type="file"
                    id="photo"
                    onChange={handleFileChange}
                />

                <button type="submit">Cadastrar</button>
            </form>
            {error && <p className="error-message">{error}</p>}
            {success && <p className="success-message">{success}</p>}
            <a href="/login" className="login-link">Já tem uma conta? Faça login</a>
        </div>
    );
}
