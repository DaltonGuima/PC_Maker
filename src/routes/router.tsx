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
import { DashboardFeedback } from "../screens/DashboardElements/DashboardFeedback";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/> 
    },
    {
        path: "/login",
        element: <Login/> 
    },
    {
        path: "/cadastro",
        element: <Cadastro/> 
    },
    {
        path: "/build",
        element: <Build/> 
    },
    {
        path: "/perfil",
        element: <Perfil/> 
    },

    /* Dashboards */
    {
        element: <Dashboard/>,
        children:[
            {
                path: '/dashboard',
                element: <MainDashboard/>,
            },
            {
                path: '/componentes',
                element: <DashboardComponents/>,
            },
            {
                path: '/feedback',
                element: <DashboardFeedback/>,
            },
            {
                path: '/insercao',
                element: <DashboardInsercao/>,
                children:[
                    {
                        path: 'processador',
                        element: <DashboardInsercaoProcessador/>
                    }
                ]
            }
        ]
    }
]);
