import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import '../styles/profile.css'
import '../styles/main.css'


function Perfil() {
    return (
        <div>
            <title>Home</title>
            <Header />
            <main id="conteudo">

                <div className="container-fluid">

                    <div className="row pt-5">
                        <div className="col-sm-1 profileImg">
                            <img src="/among_us.jpg" alt="Foto do Perfil" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-sm-5 text-light">
                            <h1>Usuario</h1>
                            <p>usuario@email.com</p>
                        </div>
                    </div>

                </div>


                <nav className="navbar-primary col-md-3">
                    <div className="col-md-11 col-sm-1">
                        <button className="dropdown-item text-light" type="button" id="MyAccountBtn" autoFocus>
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i> Minha conta</button>
                        <button className="dropdown-item text-light" type="button" id="UserProfileBtn">
                            <i className="fa fa-pencil" aria-hidden="true"></i> Perfil Usuário</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa fa-lock" aria-hidden="true"></i> Login e Segurança</button>
                        <button className="dropdown-item text-light" id="LastInGroup" type="button">
                            <i className="fa fa-envelope" aria-hidden="true"></i> Preferências de Email</button>

                        <button className="dropdown-item text-light" type="button">
                            <i className="fa fa-microchip" aria-hidden="true"></i> Builds Salvas</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa fa-desktop" aria-hidden="true"></i> Minhas Builds</button>
                    </div>
                </nav>

                <div className="break"> </div>

                <form className="was-validated">
                    <div className="main-container" id="MyAccount">
                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Nome</h3>
                            <input type="text" name="Nome" id="Nome" className="form-control-plaintext text-light FormProfile" placeholder="Usuario" disabled required />
                            <div className="invalid-feedback">Por favor preencha este campo</div>
                            <button className="btn text-light btn-block float-end" type="button" id="NomeBtn">Editar </button>
                        </div>
                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Endereço de email</h3>
                            <input type="text" name="email" id="Email" className="form-control-plaintext FormProfile" placeholder="usuario@email.com" disabled required />
                            <div className="invalid-feedback">Por favor preencha este campo</div>
                            <button className="btn text-light btn-block float-end" type="button" id="EmailBtn">Editar </button>
                        </div>
                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Contas das redes sociais conectadas</h3>
                            <div className="col-xl-6 pt-2">
                                <ul className="social-icons">
                                    <li><a className="google" href="#"><i className="fa fa-google"></i></a></li>
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="apple" href="#"><i className="fa fa-apple"></i></a></li>
                                </ul>
                            </div>
                            <button className="btn text-light btn-block float-end" type="button">Desconectar </button>
                        </div>
                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Acessibilidade</h3>
                            <p className="disabled" >Alto Contraste de Cores</p>
                            <label className="switch float-end">
                                <input type="checkbox" id="AltoContraste" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        <div className="col-md-11 pt-5 mt-4 text-light Validador" id="ValidadorMinhaConta">
                            <button className="btn text-light btn-block" type="reset" title="Limpar"><i className="fa fa-trash" aria-hidden="true"></i>
                                <span className="d-none d-md-inline" > Limpar</span>
                            </button>

                            <div className="float-end d-inline text-light user-select-none">
                                <button className="btn text-light btn-block bg-danger d-none-text mx-2" title="Cancelar" type="button" id="cancel"><i className="fa fa-close" aria-hidden="true"></i>
                                    <span className="d-none d-md-inline" > Cancelar</span>
                                </button>
                                <button className="btn btn-block text-light bg-success mx-2" title="Salvar" type="submit"><i className="fa fa-check" aria-hidden="true"></i>
                                    <span className="d-none d-md-inline" > Salvar</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>

                <br></br>
            </main>
            <Footer />
        </div>
    )
}

export default Perfil;