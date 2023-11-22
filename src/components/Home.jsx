import React , {useState} from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "../components/Home.css"
import CheckCaixas from "./Home";
import Line from "../assets/Line.png"
import logo from "../assets/logomarrom2.png"

const Home = () => {

const {
    debitoChecked,
    creditoChecked,
    handleDebitoChange,
    handleCreditoChange,
  } = CheckCaixas();
    return (

        <div className="container" >

            <div id="background">
                <nav className="menu-container" >

                    <div className="itens">

                        <div className="logo">
                            <img src={logo} width={180} alt="" />
                        </div>
                        <div className="busca">

                            <input type="text" id="busca" placeholder="pesquise " />
                            <img src="../src/assets/lupa 3.png" id="lupa" width={30} />
                        </div>

                        <Link id="cursos" to="/cursos"> Cursos</Link>

                        <p id="aulas">Aulas ao vivo</p>
                        <p id="forum">Fórum</p>
                        <p id="plano">ConfeitArt+</p>
                        <p id="login">Login</p>
                        <p id="cadastrar">Cadastre-se</p>
                    </div>

                </nav>
                <section className="matricule-container">
                    <div className="matricule">
                        <p id="txt">Comece AGORA a descobrir</p>
                        <p id="txt2"> o mundo da confeitaria!</p>
                        <button className="bt">Matricule-se</button>
                    </div>
                    <div className="imgCozinheiro">
                        <img width={350} src="../src/assets/rapazcozinhando.png" />
                    </div>
                </section>
            </div>
            <section className="linha-confeitaria">
                <div className="imgLinha">
                    <img width={1200} src={Line} />
                </div>
                <div className="imgConfeitArt"></div>
            </section>

            <h1 className="h1-home">Aqui você encontra cursos desde o básico até o avançado.</h1>

            <section className="curso-container">
                <div className="imgCursoBasico"></div>
            </section>

            <section className="curso-container">
                <div className="imgCursoDecoracao"></div>
            </section>

            <section className="curso-container">
                <div className="imgCurso3D"></div>
            </section>

            <section className="plano-container">
                <div className="plano">
                    <div className="txtPlano">
                        <h1 className="h1-home">ESCOLHA SEU  <span> PLANO </span> </h1>
                    </div>

                    <div className="caixas">
                        <div className="caixaA">
                            <h1 className="h1-home">BÁSICO</h1>
                            <p id="txtCaixaA">Você terá acesso a diversos cursos <span> gratuitamente </span> e
                                com conteúdos produzidos pelos próprios professores da ConfeitArt.</p>
                            <img width={300} src={Line} />
                            <p id="TudoFree">Tudo Grátis!</p>
                            <button>Assinar</button>
                            <br />
                            <img width={300} src={Line} />
                            <h5 ><span id="txtCertificado">Certificado Gratuito! </span><p>Exclusivo da ConfeitArt</p></h5>
                        </div>
                        <div className="caixaB">
                            <h1 className="h1-home">AVANÇADO</h1>
                            <h4 id="confeitArt">ConfeitArt+</h4>
                            <p id="txtCaixaB">
                               
                                Você terá  acesso aos cursos exclusivos para da aquele charme no seu currículo,
                                além de lives com conteúdos produzidos especialmente para você!</p>
                            <img width={300} src={Line} />

                            <label className="check-container">
        <input 
          type="checkbox" 
          id="debito" 
          checked={debitoChecked} 
          onChange={handleDebitoChange} 
        />
        Cartão de débito
      </label>

      <label className="check-container">
        <input 
          type="checkbox" 
          id="credito" 
          checked={creditoChecked} 
          onChange={handleCreditoChange} 
        />
        Cartão de crédito
      </label>
                            <div className="preco-container">
                                <p>por apenas</p>
                                <p>R$<span id="preco">12</span>,50/Mês </p>
                                <button>Assinar</button>
                                <br />
                            </div>
                            <img width={300} src={Line} />

                            <div className="preco2-container">
                                <p id="preco"> R$150,00 por ano </p>
                                <h5 ><span id="txtCertificado">Certificado Gratuito! </span><p>Exclusivo da ConfeitArt</p></h5>
                            </div>


                        </div>

                    </div>

                    <section className="aulas-container">
                        <div className="aulas"></div>
                    </section>
                </div>
            </section>


            <h1 id="frase2" className="h1-home">Na ConfeitArt, você tem tudo isso de graça!</h1>
            <section className="linha-confeitaria">
                <div className="imgLinha">

                </div>
            </section>
            <section className="linha-confeitaria">
                <div className="imgLinha">
                    <img width={1200} src={Line} />
                </div>

            </section>

            <section className="imgDicas-container">
                <div className="dicas">
                    <img src="../src/assets/aprenda.png" width={1000} alt="" />
                </div>
            </section>

            <footer className="footer">
                <div className="footer-container">

                    <h1>ConfeitArt</h1>

                    <div className="institucional">
                        <h4>Institucional</h4>
                        <ul>
                            <li>Sobre nós</li>
                            <li>Trabalhe Conosco</li>
                            <li>Política de Privacidade</li>
                            <li>Compromisso de Integridade</li>
                            <li>Termos de Uso</li>
                        </ul>
                    </div>

                    <div className="sobre">
                        <h4>A ConfeitArt</h4>
                        <ul>
                            <li>Como Funciona</li>
                            <li>Todos os cursos</li>
                            <li>Professores</li>
                        </ul>
                    </div>

                    <div className="contato">
                        <h4>Fale Conosco</h4>
                        <ul><li>Email e Telefone</li></ul>
                    </div>

                    <div className="rede-social">
                        <h4>Nossas Redes Sociais</h4>
                        <ul className="social-list">
                            <li><FaTwitter /></li>
                            <li><FaInstagram /></li>
                            <li><FaYoutube /></li>
                        </ul>
                    </div>
                </div>

            </footer>
        </div>
    )
}
export default Home