import { useHookstate } from "@hookstate/core"
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"
import { CardBuild } from "~/components/CardBuild"
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header"
import { themePage } from "~/script/changeTheme"
import quemsomos from "~/styles/quemsomos.css"

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: quemsomos },
    ];

};



function QuemSomos() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid texto">
                <div className="container cards">
                    <h1 className="text-center">Quem Somos?</h1>
                    <div className="col-md-8 col-lg-7 d-none d-md-block">


                        <div className="pic-ctn">
                            <img src="https://picsum.photos/200/300?t=1" alt="" className="pic" />
                            <img src="https://picsum.photos/200/300?t=2" alt="" className="pic" />
                            <img src="https://picsum.photos/200/300?t=3" alt="" className="pic" />
                            <img src="https://picsum.photos/200/300?t=4" alt="" className="pic" />
                            <img src="https://picsum.photos/200/300?t=5" alt="" className="pic" />
                        </div>
                    </div>


                </div>

                <div className="container cards">
                    <div className="row pt-2 m-auto">
                    </div>
                </div>

            </main >
            <Footer />
        </div>
    );
}

export default QuemSomos;