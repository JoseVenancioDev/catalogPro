import React, {useState} from 'react';
import './css/TelaProdutos.css';
import { FormProduto } from '../components/FormProduto';
import { VerProduto } from '../components/VerProduto';
import { Acessos } from '../components/Acessos';

export const TelaProdutos = () => {
    const [produtos, setProdutos] = useState([]);

    const adicionarProduto = (produto) => {
        setProdutos([...produtos, produto]);
    };

    return (


        <div className="main-container">
            <Acessos />
            
            <div className="content">
                <FormProduto adicionarProduto={adicionarProduto}/>
                <VerProduto produtos={produtos}/>
            </div>
        </div>
        // <Acessos />
        // <div className="App">
            
        //     <FormProduto adicionarProduto={adicionarProduto} />
        //     <VerProduto produtos={produtos} />
        // </div>
    );
};