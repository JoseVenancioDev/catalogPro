import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PagInicial } from '../pages/PagInicial';
<<<<<<< HEAD
import { Login } from '../components/Login/Login';
import { CadProdutos } from '../pages/CadProdutos';
import { Cadastro } from '../components/Cadastro/Cadastro';
import { Home } from '../pages/Home';
=======
import { Login } from '../pages/Login';
import { TelaProdutos } from '../pages/TelaProdutos';
import { RelatorioProdutos} from '../pages/Relatorio';
>>>>>>> 374b87093a831a44f3e506db4def3b2fba14dbef

export const RouteAsRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagInicial />} />
<<<<<<< HEAD
                <Route path="/bemvindo" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produtos" element={<CadProdutos />} />
                <Route path="/home" element={<Home />} />
=======
                <Route path="/bemvindo" element={<Login />} />
                <Route path="/produtos" element={<TelaProdutos />} />
                <Route path="/relatorio" element={<RelatorioProdutos />} />
>>>>>>> 374b87093a831a44f3e506db4def3b2fba14dbef
            </Routes>
        </BrowserRouter>
    );
}
