import React from 'react';
import './css/TelaProdutos.css';
import { FormProduto } from '../components/FormProduto';
import { VerProduto } from '../components/VerProduto';
import { Acessos } from '../components/Acessos';

export const TelaProdutos = () => {
    
    return (
        <div className="main-container">
            <Acessos />
            
            <div className="content">
                <FormProduto />
                <VerProduto />
            </div>
        </div>
    );
}
