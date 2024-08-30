import React from 'react';
import { FiHome, FiBarChart2 } from 'react-icons/fi';
import './Acessos.css'; // Certifique-se de criar este arquivo CSS

export const Acessos = () => {
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

                <a href="#" className="sidebar-link">
                    <FiHome className="icon" />
                    Principal
                </a>

                <a href="#" className="sidebar-link">
                    <FiBarChart2 className="icon" />
                    Relatório
                </a>
            </div>
            <p className="copyright">Copyright © 2020 - Todos os direitos reservados.</p>
        </div>
    );
};
