import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Build from "../screens/Build";
import Perfil from "../screens/Perfil";
import Dashboard from "../screens/Dashboard";
import MainDashboard from "../screens/DashboardElements/MainDashboard";
import DashboardComponents from "../screens/DashboardElements/DashboardComponents";
import DashboardInsercao from "../screens/DashboardElements/DashboardInsercao";
import DashboardInsercaoProcessador from "../components/InsertData/InsertProcessador";
import DashboardInsercaoArmazenamento from "../components/InsertData/InsertArmazenamento";
import DashboardInsercaoGpu from "../components/InsertData/InsertGpu";
import DashboardInsercaoRam from "../components/InsertData/InsertRam";
import DashboardInsercaoMobo from "../components/InsertData/InsertMobo";
import DashboardInsercaoPsu from "../components/InsertData/InsertPsu";
import DashboardInsercaoPlacaCaptura from "../components/InsertData/InsertPlacaCaptura";
import DashboardInsercaoGabinete from "../components/InsertData/InsertGabinete";
import DashboardFeedback from "../screens/DashboardElements/DashboardFeedback";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/cadastro",
        element: <Cadastro />
    },
    {
        path: "/build",
        element: <Build />
    },
    {
        path: "/perfil",
        element: <Perfil />
    },

    /* Dashboards */
    {
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <MainDashboard />,
            },
            {
                path: '/componentes',
                children:[
                    {
                        path: 'insercao',
                        element: <DashboardInsercao />,
                        children: [
                            {
                                path: 'processador',
                                element: <DashboardInsercaoProcessador />
                            },
                            {
                                path: 'armazenamento',
                                element: <DashboardInsercaoArmazenamento />
                            },
                            {
                                path: 'placadevideo',
                                element: <DashboardInsercaoGpu />
                            },
                            {
                                path: 'memoriaram',
                                element: <DashboardInsercaoRam />,
                            },
                            {
                                path: 'placamae',
                                element: <DashboardInsercaoMobo />,
                            },
                            {
                                path: 'fontedealimentacao',
                                element: <DashboardInsercaoPsu />,
                            },
                            {
                                path: 'placacaptura',
                                element: <DashboardInsercaoPlacaCaptura />,
                            },
                            {
                                path: 'gabinete',
                                element: <DashboardInsercaoGabinete />,
                            },
                        ]
                    },
                    {
                        path: 'tabelas',
                        element: <DashboardComponents />,
                    }
                ]
            },
            {
                path: '/feedback',
                element: <DashboardFeedback />,
            },
           
        ]
    }
]);
