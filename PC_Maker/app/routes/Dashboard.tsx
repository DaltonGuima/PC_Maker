import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react"
import theme from '../styles/theme.css'

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: theme },
        { rel: "stylesheet", href: "/vendor/mdi-font/css/material-design-iconic-font.min.css", media: "all" },
        { rel: "stylesheet", href: "/vendor/font-awesome-5/css/fontawesome-all.min.css", media: "all" },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Dashboard"
});
//import './App.css'
function Dashboard() {

    return (
        <div className="animsition" >
            <div className="page-wrapper">
                {/* <!-- HEADER MOBILE--> */}
                <header className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile-inner">
                                <Link className="logo" to="/dashboard">
                                    <img src="/Logo.png" alt="CoolAdmin" className='logo' />
                                </Link>
                                <div className='navbar-nav bg-dark'>
                                    <div className="hamburger hamburger--slider dropdown nav-item">
                                        {/* Precisa arrumar essa parte */}
                                        <a className="dropleft" role="button" data-bs-toggle="dropdown">
                                            <span className="hamburger-box">
                                                <span className="hamburger-inner bg-dark"></span>
                                            </span>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-end bg-dark">
                                            <Link to="/Dashboard" className='dropdown-item text-light'>
                                                <i className="fas fa-chart-bar"></i> Dashboard
                                            </Link>
                                            <Link to="/Dashboard/DashboardFeedback" className='dropdown-item text-light'>
                                                <i className="fa-solid fa-comment-dots"></i> Feedback
                                            </Link>
                                            <Link to="/Dashboard/DashboardComponents" className='dropdown-item text-light'>
                                                <i className="fa-solid fa-puzzle-piece"></i> Componentes
                                            </Link>
                                            <Link to="/Dashboard/DashBoardPerguntas" className='dropdown-item text-light'>
                                                <i className="fa-solid fa-question"></i> Perguntas para Build
                                            </Link>
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
                            <img src="/logoJuntaPecaRoxoV2.png" alt="Cool Admin" className='logo' />
                        </a>
                    </div>
                    <div className="menu-sidebar__content js-scrollbar1">
                        <nav className="navbar-sidebar">
                            <ul className="list-unstyled navbar__list">
                                <li>
                                    <Link to="/Dashboard">
                                        <i className="fas fa-chart-bar"></i>Dashboard
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/Dashboard/DashboardFeedback">
                                        <i className="fa-solid fa-comment-dots text-light"></i>Feedback
                                    </Link>
                                </li>
                                <li className="has-sub my-2">
                                    <button className="js-arrow text-decoration-underline" data-bs-toggle="collapse" data-bs-target="#componentes" aria-expanded="false" aria-controls="componentes">
                                        <i className="fa-solid fa-puzzle-piece me-3"></i>Componentes</button>
                                    <ul className="list-unstyled navbar__sub-list js-sub-list collapse" id="componentes">
                                        <li>
                                            <Link to="/Dashboard/DashboardComponents"><i className="fas fa-table"></i>Tabelas</Link>
                                        </li>
                                        <li>
                                            <Link to="/Dashboard/DashboardInsercao"><i className="fa-solid fa-circle-plus"></i>Inserção</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-sub my-2 mt-4">
                                    <button className="js-arrow text-decoration-underline" data-bs-toggle="collapse" data-bs-target="#perguntas" aria-expanded="false" aria-controls="perguntas">
                                        <i className="fa-solid fa-question me-4"></i>Perguntas</button>
                                    <ul className="navbar__sub-list js-sub-list collapse" id="perguntas">
                                        <li>
                                            <Link to="/Dashboard/DashboardPerguntas"><i className="fas fa-table"></i>Tabelas</Link>
                                        </li>
                                        <li>
                                            <Link to="/Dashboard/DashboardInsercaoPerguntas"><i className="fa-solid fa-circle-plus"></i>Inserção</Link>
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
                                <p>Copyright © 2022 PC_MAKER. All rights reserved.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div >



        </div >

    )
}

export default Dashboard