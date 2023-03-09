import { CardBuild } from '../components/CardBuild'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import '../styles/home.css'
import '../styles/main.css'
import useLocalStorage from 'use-local-storage'


//Importa titulo
import useDocumentTitle from '../script/useDocumentTitle'
//import './App.css'

function Home() {

    //Importar titulo
    useDocumentTitle('Home')
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    return (
        <div>
            <span></span>
        </div>
    )
}

export default Home
