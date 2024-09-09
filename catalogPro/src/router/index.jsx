import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PagInicial } from '../pages/PagInicial';
import { Login } from '../pages/Login';
import { TelaProdutos } from '../pages/TelaProdutos';
import { RelatorioProdutos} from '../pages/Relatorio';

export const RouteAsRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagInicial />} />
                <Route path="/bemvindo" element={<Login />} />
                <Route path="/produtos" element={<TelaProdutos />} />
                <Route path="/relatorio" element={<RelatorioProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}
