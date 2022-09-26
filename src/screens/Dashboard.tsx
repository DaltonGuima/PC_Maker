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
                            <a href="dashboard.html">
                                <i className="fas fa-chart-bar"></i>Dashboard</a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="fas fa-table"></i>Tabelas</a>
                        </li>
    
                        <li>
                            <a href="form.html">
                                <i className="far fa-check-square"></i>Formulário</a>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-copy"></i>Páginas</a>
                            <ul className="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="cadastro.html">Register</a>
                                </li>
                                <li>
                                    <a href="forget-pass.html">Forget Password (?)</a>
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
            {/* <!-- END MAIN CONTENT-->

            <!-- END PAGE CONTAINER--> */}
        </div>

    </div>

    {/* <!-- Vendor JS       --> */}
    <script src="../vendor/slick/slick.min.js">
    </script>
    <script src="../vendor/wow/wow.min.js"></script>
    <script src="../vendor/animsition/animsition.min.js"></script>
    <script src="../vendor/bootstrap-progressbar/bootstrap-progressbar.min.js">
    </script>
    <script src="../vendor/counter-up/jquery.waypoints.min.js"></script>
    <script src="../vendor/counter-up/jquery.counterup.min.js">
    </script>
    <script src="../vendor/circle-progress/circle-progress.min.js"></script>
    <script src="../vendor/perfect-scrollbar/perfect-scrollbar.js"></script>
    <script src="../vendor/chartjs/Chart.bundle.min.js"></script>
    <script src="../vendor/select2/select2.min.js">
    </script>

    {/* <!-- Main JS--> */}
    <script src="../script/main.js"></script>

</div>

    )
}

export default Dashboard