import { useHookstate } from "@hookstate/core"
import type { LinksFunction } from "@remix-run/node";
import { useParams } from "@remix-run/react"
import { CardBuild } from "~/components/CardBuild"
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header"
import { themePage } from "~/script/changeTheme"
import recomendacao from "~/styles/recomendacao.css"

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: recomendacao },
    ];
};


function RecPadrao() {
    const params = useParams();
    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid texto">
                <div className="container cards">
                    <h1 className="text-center">{params.index}</h1>
                    <h3 className="text-center title">Notebook</h3>
                    <div className="row pt-2 m-auto">

                        <CardBuild
                            title='Asus AMD Ryzen'
                            Itens={['AMD Ryzen 5 3500U', '8GB RAM', 'SSD 256GB']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_1.png'
                            criador='Kabum'
                        />

                        <CardBuild
                            title='IdeaPad 3i'
                            Itens={['Intel Core i3-1115G4', 'Linux', 'SSD 128GB']}
                            perfilImg='/among_us2.png'
                            buildImg='/Build_2.png'
                            criador='Lenovo'
                        />
                        <CardBuild
                            title='Inspiron 15 3000'
                            Itens={['11ª geração Intel Core i3-1115G4', '8GB DDR4', 'SSD 512GB']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_3.png'
                            criador='Dell'
                        />
                    </div>
                </div>

                <div className="container cards">
                    <h3 className="text-center title pb-1">PCs</h3>
                    <div className="row pt-2 m-auto">

                        <CardBuild
                            title='Família'
                            Itens={['Intel I5-8500', 'RADEON RX 550 4GB', 'SSD 240GB']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_1.png'
                            criador='Dominic Toretto'
                        />
                        <CardBuild
                            title='Build 2'
                            Itens={['Intel Core I5-8500T', '8GB RAM', 'SSD 240GB']}
                            perfilImg='/among_us2.png'
                            buildImg='/Build_2.png'
                            criador='Neymar Junior Junior'
                        />
                        <CardBuild
                            title='É o Naldo'
                            Itens={['Intel Core I5-10400F', '16GB RAM', 'HD 2TB + SSD 240GB']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_3.png'
                            criador='Naldo'
                        />
                    </div>
                </div>

            </main >
            <Footer />
        </div>
    );
}

export default RecPadrao;