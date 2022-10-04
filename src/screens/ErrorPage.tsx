import '../styles/home.css'
import '../styles/main.css'

//Importa titulo
import useDocumentTitle from '../script/useDocumentTitle'
//import './App.css'

function ErrorPage() {

    //Importar titulo
    useDocumentTitle('Erro')

    return (
        <div id='oopss'>
            <div id='error-text'>
                <span>404</span>
                <p>PAGE NOT FOUND</p>
                <p className='hmpg'><a href='/' className="back">Back To Home</a></p>
            </div>
        </div>
    )
}

export default ErrorPage
