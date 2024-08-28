import React from 'react';

export function CadProdutos() {
    function formatarValor() {
        const valorInput = document.getElementById('valor').value;
        const valor = parseFloat(valorInput);
        if (!isNaN(valor)) {
            const formatador = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            });
            document.getElementById('resultado').textContent = formatador.format(valor);
        } else {
            document.getElementById('resultado').textContent = 'Valor inválido';
        }
    }
    return (
        <div className="conteudo">
            <form action="" method="post">
                <input type="file" name="fotoProduto" id="fotoProduto" />
                <br />
                <input type="text" name="produto" placeholder="Nome do produto"/>
            </form>
        </div>
    );
}
