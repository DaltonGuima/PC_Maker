export function Header() {
    return (
        <header>
            <div id="acessibilidade" className="container-fluid bg-dark border-bottom py-2 border-secondary">
                <div className="row">
                    <div className="d-md-inline-flex col-md">
                        <ul id="atalhos" className="atalhos list-group list-group-horizontal d-none d-md-flex">
                            <li>
                                <a href="#conteudo" accessKey="1" title="Ir para o conteúdo da página">
                                    Ir para conteúdo [1]
                                </a>
                            </li>
                            <li>
                                <a href="#menu" accessKey="2" title="Ir para o menu da navegação">
                                    Ir para menu [2]
                                </a>
                            </li>
                            <li>
                                <a href="#rodape" accessKey="3" title="Ir para o rodapé">
                                    Ir para rodapé [3]
                                </a>
                            </li>
                        </ul>

                        <div className="d-md-inline-flex col-md Funcoes">
                            <ul className="atalhos list-group list-group-horizontal">
                                <li id="pgacess"><a href="acessibilidade.html"><i className="fa-solid fa-circle-info"></i></a></li>
                                <li className="contraste"><a href="" id="contraste"><i className="fa-solid fa-circle-half-stroke"></i></a></li>
                                <li className="contraste"><a href="" id="semcontraste"><i className="fa-solid fa-circle-stop"></i></a></li>
                                <li className="fonte"><a href="" id="aumentar"><i className="fa-solid fa-arrow-up-a-z"></i></a></li>
                                <li className="fonte"><a href="" id="diminuir"><i className="fa-solid fa-arrow-down-z-a"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="topo">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src="/Logo.png" alt="Logo da Empresa" style={{ width: '150px', height: '80px', }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Monte seu Computador</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Builds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Guias</a>
                            </li>
                        </ul>
                        <div className="search-button col-md-4">
                            <form className="d-flex" id="barraPesquisa">

                                <input className="form-control-plaintext" type="text" placeholder="Search" id="itemPesquisa" name='' />
                                <label id="search-field" htmlFor='itemPesquisa'>
                                    <a className='text-white'>
                                        <i className="fa fa-search"></i>
                                    </a>
                                </label>

                            </form>
                        </div>
                        <div className="profile">

                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropleft" href="#" role="button" data-bs-toggle="dropdown">
                                        <img src="/among_us.jpg" alt="Foto de Perfil" />Perfil
                                    </a>
                                    <div className="dropdown-menu  dropdown-menu-end bg-dark">
                                        <button className="dropdown-item disabled bg-dark">
                                            <i className="fa fa-user-o"></i> Perfil
                                        </button>
                                        <a className="dropdown-item text-light" href="../Views/profile.html">Meu Perfil</a>
                                        <a className="dropdown-item text-light"><i className="fa fa-question" aria-hidden="true"></i> Ajuda</a>
                                        <a className="dropdown-item text-light"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}