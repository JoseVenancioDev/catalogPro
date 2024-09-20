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
              <a href="/cadastro" className="button-link">Cadastro</a>
              <a href="/login" className="button-link">Login</a>
            </div>
          </div>
        </nav>
        <div className="hero">
          <img src={avatar} alt="Avatar" className="avatar" />
          <h1>CATALOGPRO</h1>
          <p>Site para Catálogo de Produtos</p>
        </div>
      </header>

      <main className="main-content">
        <section id="products">
          <h2 id="h2-produto">PRODUTOS</h2>
          <div className="products-grid">
            {[
              { src: cabin, alt: "Cabin" },
              { src: cake, alt: "Cake" },
              { src: circus, alt: "Circus" },
              { src: game, alt: "Game" },
              { src: safe, alt: "Safe" },
              { src: submarine, alt: "Submarine" }
            ].map((product, index) => (
              <div className="product-item" key={index}>
                <img src={product.src} alt={product.alt} />
              </div>
            ))}
          </div>
        </section>

        <section id="button" className="button">
          <a href="/cadastro" className="button-link">Conhecer Mais</a>
        </section>

        <section id="about">
          <h2>ABOUT</h2>
          <div>
            <p>
              Descubra a maneira mais fácil e eficiente de gerenciar seu inventário com o CatalogPro! Com nossa plataforma intuitiva, você pode cadastrar e organizar seus produtos em poucos cliques. Acesse relatórios detalhados, atualize informações em tempo real e mantenha seu estoque sempre otimizado. Não perca mais tempo com processos manuais – experimente o CatalogPro hoje mesmo e veja como é simples elevar seu gerenciamento de produtos a um novo patamar!
            </p>
            <p>
              Com o CatalogPro, cadastrar seus produtos nunca foi tão fácil! Nossa plataforma oferece uma solução completa para adicionar, editar e gerenciar seu inventário com agilidade e precisão. Aproveite funcionalidades avançadas, como categorias personalizadas e busca rápida, para manter seu catálogo sempre atualizado e organizado. Diga adeus ao caos e olá à eficiência – inscreva-se no CatalogPro e descubra a diferença que uma gestão eficaz pode fazer!
            </p>
          </div>
        </section>
      </main>

      <footer>
        <h2>Contato</h2>
        <p>Endereço: Rua Exemplo, 123, Cidade - Estado</p>
        <p>Email: <a href="mailto:contato@exemplo.com">contato@exemplo.com</a></p>
        <p>Telefone: <a href="tel:(00)0000-0000">(00) 0000-0000</a></p>
        
        <div className="separator"></div>

        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fab fa-facebook-f"></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="fab fa-twitter"></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fab fa-instagram"></a>
        </div>
      </footer>
    </>
  );
}
