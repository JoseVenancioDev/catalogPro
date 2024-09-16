import React from 'react';
import './css/PagInicial.css';

export function PagInicial() {
  return (
    <>
      <div id="page-top">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand" href="#page-top">CatalogPro</a>
            <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1">
                  <a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        
        {/* Masthead */}
        <header className="masthead bg-primary text-white text-center">
          <div className="container d-flex align-items-center flex-column">
            {/* Masthead Avatar Image */}
            <img className="masthead-avatar mb-5" src="src/assets/img/avataaars.svg" alt="Avatar" />
            {/* Masthead Heading */}
            <h1 className="masthead-heading text-uppercase mb-0">CatalogPro</h1>
            {/* Icon Divider */}
            <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
            </div>
            {/* Masthead Subheading */}
            <p className="masthead-subheading font-weight-light mb-0">Site para Cadastro de Produtos</p>
          </div>
        </header>
      </div>

      {/* Portfolio Section */}
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
          {/* Portfolio Section Heading */}
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Produtos</h2>
          
          {/* Icon Divider */}
          <div className="divider-custom">
            <div className="divider-custom-line"></div>
            <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
            <div className="divider-custom-line"></div>
          </div>
          
          {/* Portfolio Grid Items */}
          <div className="row justify-content-center">
            {/* Portfolio Item 1 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/assets/img/portfolio/cabin.png" alt="Portfolio Item 1" />
              </div>
            </div>
            
            {/* Portfolio Item 2 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/assets/img/portfolio/cake.png" alt="Portfolio Item 2" />
              </div>
            </div>
            
            {/* Portfolio Item 3 */}
            <div className="col-md-6 col-lg-4 mb-5">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/assets/img/portfolio/circus.png" alt="Portfolio Item 3" />
              </div>
            </div>
            
            {/* Portfolio Item 4 */}
            <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/assets/img/portfolio/game.png" alt="Portfolio Item 4" />
              </div>
            </div>
            
            {/* Portfolio Item 5 */}
            <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/assets/img/portfolio/safe.png" alt="Portfolio Item 5" />
              </div>
            </div>
            
            {/* Portfolio Item 6 */}
            <div className="col-md-6 col-lg-4">
              <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                  <div className="portfolio-item-caption-content text-center text-white">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid" src="src/assets/img/portfolio/submarine.png" alt="Portfolio Item 6" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">Sobre</h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              Descubra a maneira mais fácil e eficiente de gerenciar seu inventário com o CatalogPro! Com nossa plataforma intuitiva, você pode cadastrar e organizar seus produtos em poucos cliques. Acesse relatórios detalhados, atualize informações em tempo real e mantenha seu estoque sempre otimizado. Não perca mais tempo com processos manuais – experimente o CatalogPro hoje mesmo e veja como é simples elevar seu gerenciamento de produtos a um novo patamar!
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              Com o CatalogPro, cadastrar seus produtos nunca foi tão fácil! Nossa plataforma oferece uma solução completa para adicionar, editar e gerenciar seu inventário com agilidade e precisão. Aproveite funcionalidades avançadas, como categorias personalizadas e busca rápida, para manter seu catálogo sempre atualizado e organizado. Diga adeus ao caos e olá à eficiência – inscreva-se no CatalogPro e descubra a diferença que uma gestão eficaz pode fazer!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="page-section" id="contact">
      <div className="container">
        {/* Heading da Seção de Contato */}
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contato</h2>
        {/* Divisor de Ícone */}
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
          <div className="divider-custom-line"></div>
        </div>
        {/* Formulário de Contato */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-xl-7">
            {/* Formulário de Contato SB Forms */}
            {/* Este formulário está pré-integrado com SB Forms */}
            {/* Para tornar este formulário funcional, inscreva-se em */}
            {/* https://startbootstrap.com/solution/contact-forms */}
            {/* para obter um token da API! */}
            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
              {/* Campo de Nome */}
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="name" 
                  type="text" 
                  placeholder="Digite seu nome..." 
                  required 
                />
                <label htmlFor="name">Nome completo</label>
                <div className="invalid-feedback">Um nome é obrigatório.</div>
              </div>
              {/* Campo de Email */}
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="email" 
                  type="email" 
                  placeholder="nome@exemplo.com" 
                  required 
                />
                <label htmlFor="email">Endereço de email</label>
                <div className="invalid-feedback">Um email é obrigatório.</div>
                <div className="invalid-feedback">O email não é válido.</div>
              </div>
              {/* Campo de Telefone */}
              <div className="form-floating mb-3">
                <input 
                  className="form-control" 
                  id="phone" 
                  type="tel" 
                  placeholder="(123) 456-7890" 
                  required 
                />
                <label htmlFor="phone">Número de telefone</label>
                <div className="invalid-feedback">Um número de telefone é obrigatório.</div>
              </div>
              {/* Campo de Mensagem */}
              <div className="form-floating mb-3">
                <textarea 
                  className="form-control" 
                  id="message" 
                  placeholder="Digite sua mensagem aqui..." 
                  style={{ height: '10rem' }} 
                  required 
                ></textarea>
                <label htmlFor="message">Mensagem</label>
                <div className="invalid-feedback">Uma mensagem é obrigatória.</div>
              </div>
              {/* Mensagem de Sucesso do Envio */}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center mb-3">
                  <div className="fw-bolder">Envio do formulário bem-sucedido!</div>
                  Para ativar este formulário, inscreva-se em
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms" target="_blank" rel="noopener noreferrer">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* Mensagem de Erro do Envio */}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">Erro ao enviar a mensagem!</div>
              </div>
              {/* Botão de Enviar */}
              <button 
                className="btn btn-primary btn-xl disabled" 
                id="submitButton" 
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
        <footer className="footer text-center">
      <div className="container">
        <div className="row">
          {/* Localização do Rodapé */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Localização</h4>
            <p className="lead mb-0">
              2215 John Daniel Drive
              <br />
              Clark, MO 65243
            </p>
          </div>
          {/* Ícones Sociais do Rodapé */}
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Redes Sociais</h4>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-facebook-f"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-twitter"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
            <a className="btn btn-outline-light btn-social mx-1" href="#!">
              <i className="fab fa-fw fa-dribbble"></i>
            </a>
          </div>
          {/* Texto Sobre o Rodapé */}
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">Sobre o Freelancer</h4>
            <p className="lead mb-0">
              Freelancer é um tema Bootstrap gratuito e licenciado pelo MIT criado por
              <a href="http://startbootstrap.com" target="_blank" rel="noopener noreferrer">
                Start Bootstrap
              </a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
