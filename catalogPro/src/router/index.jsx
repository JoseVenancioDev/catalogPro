import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PagInicial } from '../pages/PagInicial';
import { Login } from '../components/Login/Login';
import { CadProdutos } from '../pages/CadProdutos';
import { Cadastro } from '../components/Cadastro/Cadastro';
import { Cadastro } from '../pages/Cadastro';

export const RouteAsRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagInicial />} />
                <Route path="/bemvindo" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produtos" element={<CadProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}
