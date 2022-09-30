import {
    createBrowserRouter, createRoutesFromElements, Route,
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
import DashboardInsercaoPlacaDeVideo from "../components/InsertData/InsertPlacaDeVideo";
import DashboardInsercaoMemoriaRam from "../components/InsertData/InsertMemoriaRam";
import DashboardInsercaoPlacaMae from "../components/InsertData/InsertPlacaMae";
import DashboardInsercaoFonteDeAlimentacao from "../components/InsertData/InsertFonteDeAlimentacao";
import DashboardInsercaoPlacaDeCaptura from "../components/InsertData/InsertPlacaDeCaptura";
import DashboardInsercaoGabinete from "../components/InsertData/InsertGabinete";
import DashboardInsercaoMouse from "../components/InsertData/InsertMouse";
import DashboardInsercaoTeclado from "../components/InsertData/InsertTeclado";
import DashboardInsercaoPlacaDeSom from "../components/InsertData/InsertPlacaDeSom";
import DashboardInsercaoVentoinha from "../components/InsertData/InsertVentoinha";
import DashboardInsercaoCoolerBox from "../components/InsertData/InsertCoolerBox";
import DashboardInsercaoMonitor from "../components/InsertData/InsertMonitor";
import DashboardFeedback from "../screens/DashboardElements/DashboardFeedback";
import DashboardPerguntas from "../screens/DashboardElements/DashboardPerguntas";
import DashboardInsercaoPerguntas from "../screens/DashboardElements/DashboardInsercaoPerguntas";
import ErrorPage from "../screens/ErrorPage";




export const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />
    },
    {
        path: "/PC_Maker",
        children: [{
            path: "login",
            element: <Login />
        },
        {
            path: "cadastro",
            element: <Cadastro />
        },
        {
            path: "build",
            element: <Build />
        },
        {
            path: "perfil",
            element: <Perfil />
        },
        {
            path: '',
            element: <Home />
        },
        {
            element: <Dashboard />,
            children: [
                {
                    path: 'dashboard',
                    element: <MainDashboard />,
                },
            ]
        }
        ]
    }
]);

/* {
    element: <Dashboard />,
    children: [
        {
            path: '/dashboard',
            element: <MainDashboard />,
        },
        {
            path: '/componentes',
            children: [
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
                            path: 'placa-de-video',
                            element: <DashboardInsercaoPlacaDeVideo />
                        },
                        {
                            path: 'memoria-ram',
                            element: <DashboardInsercaoMemoriaRam />,
                        },
                        {
                            path: 'placa-mae',
                            element: <DashboardInsercaoPlacaMae />,
                        },
                        {
                            path: 'fonte-de-alimentacao',
                            element: <DashboardInsercaoFonteDeAlimentacao />,
                        },
                        {
                            path: 'placa-de-captura',
                            element: <DashboardInsercaoPlacaDeCaptura />,
                        },
                        {
                            path: 'gabinete',
                            element: <DashboardInsercaoGabinete />,
                        },
                        {
                            path: 'mouse',
                            element: <DashboardInsercaoMouse />,
                        },
                        {
                            path: 'teclado',
                            element: <DashboardInsercaoTeclado />,
                        },
                        {
                            path: 'placa-de-som',
                            element: <DashboardInsercaoPlacaDeSom />,
                        },
                        {
                            path: 'ventoinha',
                            element: <DashboardInsercaoVentoinha />,
                        },
                        {
                            path: 'cooler-box',
                            element: <DashboardInsercaoCoolerBox />,
                        },
                        {
                            path: 'monitor',
                            element: <DashboardInsercaoMonitor />,
                        },
                    ]
                },
                {
                    path: '',
                    element: <DashboardComponents />,
                }
            ]
        },
        {
            path: '/feedback',
            element: <DashboardFeedback />,
        },
        {
            path: '/perguntas-para-build',
            children: [
                {
                    path: 'insercao',
                    element: <DashboardInsercaoPerguntas />,
                },
                {
                    path: '',
                    element: <DashboardPerguntas />,
                }
            ]
        },

    ]
} */