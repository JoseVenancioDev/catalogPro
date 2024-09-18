import React from 'react';
import './css/PagInicial.css';

// Importando diretamente as imagens da pasta src/assets/img
import avatar from '../assets/img/avataaars.svg';
import cabin from '../assets/img/portfolio/cabin.png';
import cake from '../assets/img/portfolio/cake.png';
import circus from '../assets/img/portfolio/circus.png';
import game from '../assets/img/portfolio/game.png';
import safe from '../assets/img/portfolio/safe.png';
import submarine from '../assets/img/portfolio/submarine.png';

export function PagInicial() {
  return (
    <>
      <header>
        <nav>
            <div className="nav-container">
                <a href="#" className="logo">CATALOGPRO</a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
                <div className="nav-buttons">
                    <a href="#register">Cadastro</a>
                    <a href="#login">Login</a>
                </div>
            </div>
        </nav>
        <div className="hero">
            <img src={avatar} alt="Avatar" className="avatar" />
            <h1>CATALOGPRO</h1>
            <p>Site para Catálogo de Produtos</p>
        </div>
      </header>

      <section id="products">
        <h2 id="h2-produto">PRODUTOS</h2>
        <div className="products-grid">
          <div className="product-item">
            <img src={cabin} alt="Cabin" />
          </div>
          <div className="product-item">
            <img src={cake} alt="Cake" />
          </div>
          <div className="product-item">
            <img src={circus} alt="Circus" />
          </div>
          <div className="product-item">
            <img src={game} alt="Game" />
          </div>
          <div className="product-item">
            <img src={safe} alt="Safe" />
          </div>
          <div className="product-item">
            <img src={submarine} alt="Submarine" />
          </div>
        </div>
      </section>

      <section id="button">
        <div className="button">
            <button>Conhecer Mais</button>
        </div>
      </section>

      <section id="about">
        <h2>ABOUT</h2>
        <p>Com o CatalogPro, você poderá catalogar seus produtos de maneira simples e eficiente.</p>
      </section>
    </>
  );
}

