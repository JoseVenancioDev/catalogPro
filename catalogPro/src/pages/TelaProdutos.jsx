import React, { useState } from 'react';
import './css/TelaProdutos.css';
import { FormProduto } from '../components/FormProduto';
import { VerProduto } from '../components/VerProduto';
import { Acessos } from '../components/Acessos';

export const TelaProdutos = () => {
    const [produtos, setProdutos] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(false);

    const adicionarProduto = (produto) => {
        setProdutos([...produtos, produto]);
    };

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`main-container ${isCollapsed ? 'collapsed' : ''}`}>
            <Acessos />
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
                {isCollapsed ? '>' : '<'}
            </button>
            <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
                <FormProduto adicionarProduto={adicionarProduto} />
                <VerProduto produtos={produtos} />
            </div>
        </div>
    );
};
