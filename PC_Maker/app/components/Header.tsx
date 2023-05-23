import { useHookstate } from '@hookstate/core';
import { FormEvent, useEffect } from 'react';
import useLocalStorage from 'use-local-storage';
import { themePage } from '../script/changeTheme';
import { Link, useLoaderData, useNavigate } from "@remix-run/react"
import type { loader } from '~/routes';
import { categoriaProduto } from '~/routes/Search/$searchType.$searchContent';


export function Header() {
    const data = useLoaderData<typeof loader>();

    const changeTheme = useHookstate(themePage)
    const [theme, setTheme] = useLocalStorage('theme', changeTheme.get());
    const navigate = useNavigate();
    

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    const switchContraste = () => {
        const newTheme = theme === 'contraOn' ? 'contraOff' : 'contraOn';
        setTheme(newTheme)
    }

    const changeFontSize = () => {
        
    }

    useEffect(() => {
        changeTheme.set(theme)
    }, [changeTheme, theme]);

    function search(event: FormEvent) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)

        navigate(`Search/Componente/${formData.get("itemPesquisa")}`)
    }

    return (
        <header data-theme={changeTheme.get()}>
            <div id="acessibilidade" className="container-fluid border-bottom py-2 border-secondary">
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
                                <li id="pgacess"><a href="../Acessibilidade"><i className="fa-solid fa-circle-info"></i></a></li>
                                <li className="tema" id="temaSwitcher" onClick={switchTheme}><a><i className="fa-solid fa-sun"></i></a></li>
                                <li className="contraste" onClick={switchContraste}><a href="" id="contraste"><i className="fa-solid fa-circle-half-stroke"></i></a></li>
                                {/* <li className="contraste"><a href="" id="semcontraste"><i className="fa-solid fa-circle-stop"></i></a></li> */}
                                <li className="fonte"><a onClick={changeFontSize} id="aumentar" ><i className="fa-solid fa-arrow-up-a-z"></i></a></li>
                                <li className="fonte"><a onClick={changeFontSize} id="diminuir" ><i className="fa-solid fa-arrow-down-z-a"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <nav className="navbar navbar-expand-sm navbar-dark" id="topo">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img src={`/${changeTheme.get() == "dark" || changeTheme.get() == "contraOn"  ? "logoJuntaPecaRosaV1" : "logoJuntaPecaRosaV3"}.png`} alt="Logo JuntaPeça" style={{ width: '15rem', height: '5rem' }} />
                        {/* <img src="/logoJuntaPecaRoxoV2.png" alt="Logo da Empresa" style={{ width: '15rem', height: '5rem', }} /> */}
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                                <a className="nav-link">Builds</a>
                            </li>
                            <div className="dropdown-navbar">
                                <ul className="navbar-nav">
                                    <div className="nav-item dropdown">
                                        <button className="nav-link dropleft dropdown-toggle" data-bs-toggle="dropdown">
                                            Componentes
                                        </button>
                                        <div className="dropdown-menu dropdown-menu perfilDropdown">
                                            {categoriaProduto.map(categoria => {
                                                return (
                                                    <Link className="dropdown-item" key={categoria} to={`/Search/CategoriaProduto/${categoria}`}>{categoria}</Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </ul>
                            </div>




                            {/* <li className="nav-item">
                                <Link className="nav-link" to="/Guias">Guias</Link>
                            </li> */}
                        </ul>
                        <div className="search-button col-md-4">
                            <form className="d-flex" id="barraPesquisa" onSubmit={search}>

                                <input className="form-control-plaintext" type="text" placeholder="Search" id="itemPesquisa" name='itemPesquisa' />
                                <label id="search-field" htmlFor='itemPesquisa'>
                                    <button type='submit' className='text-white submitButtonSearch'>
                                        <i className="fa-solid fa-search"></i>
                                    </button>
                                </label>

                            </form>
                        </div>

                        <div className="profile">
                            {data.user ?
                                <ul className="navbar-nav">
                                    <div className="nav-item dropdown">

                                        <button className="nav-link dropleft dropdown-toggle" data-bs-toggle="dropdown">
                                            <img src="/among_us.jpg" alt="Foto de Perfil" className="imagemPerfil" /> {data.user?.nome}
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end perfilDropdown">
                                            <Link className="dropdown-item" to="/perfil"><i className="fa fa-user-o"></i>  Meu Perfil</Link>  {/* vou ter que parametizar depois */}
                                            <Link className="dropdown-item" to="/builds"><i className="fa-solid fa-wrench"></i> Minhas Builds</Link>  {/* vou ter que parametizar depois */}
                                            {/* pode colocar um builds salvas aqui */}
                                            <form action="/logout" method="post">
                                                <button className="dropdown-item">
                                                    <i className="fa fa-sign-out" aria-hidden="true"></i> Logout
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </ul>
                                :
                                <div>

                                    <Link to="/Login"><button className="btn text-light loginButton">Entrar</button></Link>

                                    <Link to="/Cadastro"><button className="btn text-light cadButton" >Cadastre-se</button></Link>

                                </div>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}