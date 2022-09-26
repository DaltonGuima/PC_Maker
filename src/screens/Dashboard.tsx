import { Outlet } from 'react-router'
import '../styles/theme.css'
import useDocumentTitle from '../utils/useDocumentTitle'

//import './App.css'

function Dashboard() {
    useDocumentTitle('Dashboard')
return (
    <div className="animsition">
    <div className="page-wrapper">
        {/* <!-- HEADER MOBILE--> */}
        <header className="header-mobile d-block d-lg-none">
            <div className="header-mobile__bar">
                <div className="container-fluid">
                    <div className="header-mobile-inner">
                        <a className="logo" href="dashboard.html">
                            <img src="/icon/logo.png" alt="CoolAdmin" />
                        </a>
                        <div className='navbar-nav bg-dark'>
                            <div className="hamburger hamburger--slider dropdown nav-item">
                                <a className="dropleft" href="#" role="button" data-bs-toggle="dropdown">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner bg-dark"></span>
                                    </span>
                                </a>
                                <div className="dropdown-menu dropdown-menu-end bg-dark">
                                    <a className="dropdown-item text-light" href='#'>Meu Perfil</a>
                                    <a className="dropdown-item text-light"><i className="fa fa-question" aria-hidden="true"></i> Ajuda</a>
                                    <a className="dropdown-item text-light"><i className="fa fa-sign-out" aria-hidden="true"></i> Logout</a>
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
                <a href="#">
                    <img src="/icon/logo.png" alt="Cool Admin" />
                </a>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
                <nav className="navbar-sidebar">
                    <ul className="list-unstyled navbar__list">
                        <li>
                            <a href="/Dashboard">
                                <i className="fas fa-chart-bar"></i>Dashboard</a>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" data-bs-toggle="collapse" data-bs-target="#componentes" role="button" aria-expanded="false" aria-controls="componentes">
                                <i className="fas fa-table"></i>Tabelas</a>
                            <ul className="list-unstyled navbar__sub-list js-sub-list collapse" id="componentes">
                                <li>
                                    <a href="/componentes">Componente</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" data-bs-toggle="collapse" data-bs-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <i className="fas fa-copy"></i>Páginas</a>
                            <ul className="list-unstyled navbar__sub-list js-sub-list collapse" id="collapseExample">
                                <li>
                                    <a href="../login">Login</a>
                                </li>
                                <li>
                                    <a href="../cadastro">Register</a>
                                </li>
                                <li>
                                    <a href="../forget-pass.html">Forget Password (?)</a>
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
            <Outlet/>
            {/* <!-- END MAIN CONTENT-->*/}
            <div className="row foot">
                <div className="col-md-12">
                    <div className="copyright">
                        <p>Copyright © 2018 Colorlib. All rights reserved. Template by <a href="https://colorlib.com">Colorlib</a>.</p>
                    </div>
                </div>
            </div>

        </div>

    </div>



</div>

    )
}

export default Dashboard