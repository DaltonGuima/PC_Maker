import { Outlet } from 'react-router'
import '../styles/theme.css'
import useDocumentTitle from '../utils/useDocumentTitle'

//import './App.css'
function Dashboard() {
    useDocumentTitle('Dashboard')
    return (
        <div className="animsition" >
            <div className="page-wrapper">
                {/* <!-- HEADER MOBILE--> */}
                <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <a className="logo" href="/dashboard">
                                    <img src="/Logo.png" alt="CoolAdmin" className='logo' />
                                </a>
                                <div className='navbar-nav bg-dark'>
                                    <div className="hamburger hamburger--slider dropdown nav-item">
                                        <a className="dropleft" href="#" role="button" data-bs-toggle="dropdown">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner bg-dark"></span>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end bg-dark">
                                            <a href="/Dashboard" className='dropdown-item text-light'>
                                                <i className="fas fa-chart-bar"></i> Dashboard
                                            </a>
                                            <a href="/feedback" className='dropdown-item text-light'>
                                                <i className="fa-solid fa-comment-dots"></i> Feedback
                                            </a>
                                            <a href="/componentes" className='dropdown-item text-light'>
                                                <i className="fa-solid fa-puzzle-piece"></i> Componentes
                                            </a>
                                            <a href="/perguntas-para-build" className='dropdown-item text-light'>
                                                <i className="fa-solid fa-question"></i> Perguntas para Build
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* <!-- END HEADER MOBILE-->

        <!-- MENU SIDEBAR--> */}
                <aside className="menu-sidebar d-none d-lg-block">
                    <div className="logo">
                        <a href="/Dashboard">
                            <img src="/logo.png" alt="Cool Admin" className='logo' />
                        </a>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                <li>
                                    <a href="/Dashboard">
                                        <i className="fas fa-chart-bar"></i>Dashboard
                                    </a>
                                </li>
                                <li>
                                    <a href="/feedback">
                                        <i className="fa-solid fa-comment-dots"></i>Feedback
                                    </a>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" data-bs-toggle="collapse" data-bs-target="#componentes" role="button" aria-expanded="false" aria-controls="componentes">
                                        <i className="fa-solid fa-puzzle-piece"></i>Componentes</a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list collapse" id="componentes">
                                        <li>
                                            <a href="/componentes"><i className="fas fa-table"></i>Tabelas</a>
                                        </li>
                                        <li>
                                            <a href="/componentes/insercao"><i className="fa-solid fa-circle-plus"></i>Inserção</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub">
                                    <a className="js-arrow" data-bs-toggle="collapse" data-bs-target="#perguntas" role="button" aria-expanded="false" aria-controls="componentes">
                                        <i className="fa-solid fa-question"></i>Perguntas</a>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list collapse" id="perguntas">
                                        <li>
                                            <a href="/perguntas-para-build"><i className="fas fa-table"></i>Tabelas</a>
                                        </li>
                                        <li>
                                            <a href="/perguntas-para-build/insercao"><i className="fa-solid fa-circle-plus"></i>Inserção</a>
                                        </li>
                                    </ul>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </aside>
                {/* <!-- END MENU SIDEBAR--> */}

                {/* <!-- PAGE CONTAINER--> */}
                <div className="page-container">
                    {/* <!-- HEADER DESKTOP--> */}
                    <header className="header-desktop">

                    </header>

                    {/* <!-- MAIN CONTENT--> */}
                    <Outlet />
                    {/* <!-- END MAIN CONTENT-->*/}
                    <div className="row foot">
                        <div className="col-md-12">
                            <div className="copyright">
                                <p>Copyright © 2022 PC_MAKER. All rights reserved. Template by <a href="">PC_MAKER</a>.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div >



        </div >

    )
}

export default Dashboard