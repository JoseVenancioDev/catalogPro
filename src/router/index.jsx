import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PagInicial } from '../pages/PagInicial';
import { Login } from '../components/Login/Login';
import { Cadastro } from '../components/Cadastro/Cadastro';
import { Home } from '../pages/Home';

export const RouteAsRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PagInicial />} />
                <Route path="/bemvindo" element={<Cadastro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="*" element={<h1>Página não encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    );
}