import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Cadastro from "../screens/Cadastro";
import Build from "../screens/Build";
import Perfil from "../screens/Perfil";
import Dashboard from "../screens/Dashboard";

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
    {
        path: "/dashboard",
        element: <Dashboard/> 
    },
]);
