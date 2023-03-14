
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { useHookstate } from '@hookstate/core'
import { themePage } from '../script/changeTheme'
import useDocumentTitle from '../script/useDocumentTitle'



function Search() {
    const changeTheme = useHookstate(themePage)
    useDocumentTitle('Home')

    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app">


            </main>
            <Footer />
        </div>
    )
}

export default Search
