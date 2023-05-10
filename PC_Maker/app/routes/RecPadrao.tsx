import { useHookstate } from "@hookstate/core"
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"
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

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid texto">
                <div className="container cards">
                    <h1 className="text-center">Básicas</h1>
                    <h3 className="text-center title">Notebook</h3>
                    <div className="row pt-2 m-auto">

                        <CardBuild
                            title='Build 1'
                            Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_1.png'
                            criador='Zezão extreme'
                        />
                        <CardBuild
                            title='Build 2'
                            Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
                            perfilImg='/among_us2.png'
                            buildImg='./Build_2.png'
                            criador='xxx_EnzoG4mer_xxx'
                        />
                        <CardBuild
                            title='Build 3'
                            Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_3.png'
                            criador='Zezão extreme'
                        />
                    </div>
                </div>

                <div className="container cards">
                    <h3 className="text-center title pb-1">PCs</h3>
                    <div className="row pt-2 m-auto">

                        <CardBuild
                            title='Build 1'
                            Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_1.png'
                            criador='Zezão extreme'
                        />
                        <CardBuild
                            title='Build 2'
                            Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
                            perfilImg='/among_us2.png'
                            buildImg='./Build_2.png'
                            criador='xxx_EnzoG4mer_xxx'
                        />
                        <CardBuild
                            title='Build 3'
                            Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
                            perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
                            buildImg='/Build_3.png'
                            criador='Zezão extreme'
                        />
                    </div>
                </div>

            </main >
            <Footer />
        </div>
    );
}

export default RecPadrao;