import React from 'react';
import './FormProduto.css';

export const FormProduto = () => {
    return (
        <div className="form-section">
            <h2>Cadastrar Produto</h2>
            <form action="" method="post">
                <input type="text" name="nome" placeholder="Nome do Produto" required /><br />
                <input type="number" name="preco" placeholder="Preço do Produto" required /><br />
                <input type="text" name="distribuidora" placeholder="Distribuidora" required /><br />
                <input type="text" name="validade" placeholder="Validade" required /><br />
                <input type="text" name="descricao" placeholder="Descrição" required /><br />
                <button type="submit">Adicionar Produto</button>
            </form>
        </div>
    );
}
