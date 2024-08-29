import React from 'react';
import './css/CadProdutos.css';
import { FormProduto} from '../components/FormProduto';
import { VerProduto } from '../components/VerProduto';

export const CadProdutos = () => {
    return (
        <div className="container">
            <FormProduto />
            <VerProduto />
        </div>
    );
}
