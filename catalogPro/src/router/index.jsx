import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PagInicial } from '../pages/PagInicial';
import { Login } from '../pages/Login';
import { CadProdutos } from '../pages/CadProdutos';
import { Cadastro } from '../pages/Cadastro';

export const RouteAsRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagInicial />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produtos" element={<CadProdutos />} />
            </Routes>
        </BrowserRouter>
    );
}