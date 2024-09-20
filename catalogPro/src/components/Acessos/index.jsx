import React from 'react';
import { FiHome, FiBarChart2, FiShoppingCart } from 'react-icons/fi';
import './Acessos.css'; // Certifique-se de criar este arquivo CSS

export const Acessos = () => {
    // Função para lidar com o clique no link "Principal"
    const handleExitClick = (e) => {
        e.preventDefault(); // Evita que o link seja seguido imediatamente
        const userConfirmed = window.confirm('Você deseja sair?');
        if (userConfirmed) {
            // Lógica para sair, redirecionar ou realizar qualquer ação necessária
            window.location.href = '/'; // Redireciona para a página inicial, ou ajuste conforme necessário
        }
    };

    return (
        <div className="sidebar">
            <button className="btn-mobile" aria-label="Toggle Sidebar">
                ☰ {/* Ou use um ícone de menu */}
            </button>
            <div className="sidebar-content">
                <div className="avatar-container">
                    <img 
                        className="avatar" 
                        src="https://via.placeholder.com/150" 
                        alt="Admin" 
                    />
                    <p className="username">Admin</p>
                </div>
                <div className="divider"></div>

                

                <a href="../produtos" className="sidebar-link">
                    <FiShoppingCart className="icon" />
                    Cadastrar Produtos
                </a>
                <a href="../relatorio" className="sidebar-link">
                    <FiBarChart2 className="icon" />
                    Relatório
                </a>
                <a href="#" onClick={handleExitClick} className="sidebar-link">
                    <FiHome className="icon" />
                    Home
                </a>
            </div>
            <p className="copyright">Copyright © 2020 - Todos os direitos reservados.</p>
        </div>
    );
};
