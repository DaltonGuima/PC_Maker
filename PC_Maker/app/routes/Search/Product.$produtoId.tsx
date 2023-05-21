import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useParams } from "@remix-run/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHydrated } from "remix-utils";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import search from "~/styles/search.css"
import { getUser } from "~/utils/session.server";
import type { Produto } from "../Dashboard/__localVenda/LocaisVendas.$produtoId";
import { SideComponent } from "~/components/SideComponent";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: search },
    ];
};

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};

export const meta: MetaFunction = () => {
    return ({
        title: "Componente"
    })
}

function Product() {
    const params = useParams();
    const changeTheme = useHookstate(themePage);
    const [produto, setProduto] = useState<Produto>()

    const [hide, setHide] = useState(false);

    function sidebarCollapse() {
        setHide(!hide)
        console.log(hide)
    }

    // eu tenho que botar local venda aqui
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/produtos/${params.produtoId}`)
            .catch(() => { return null })
            .then(response => setProduto(response?.data))

    }, [params.produtoId])

    const hydrated = useHydrated();
    function AlguemMeAjuda() {
        if (hydrated && produto != null) {
            localStorage.setItem(produto?.categoria, produto?.id.toString())
        }
    }

    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app">
                {/* Vou fazer sem estilo pq, quero ir logo pro build */}

                <div id="content">
                    <div className="wrapper">
                        <nav id="sidebar" className={`px-3`}>
                            <div className="col-sm-12 col-md-3 specsBarraLatProduct">
                                <img src="/among_us.jpg" className="col-sm-12" alt="Logo da empresa" style={{ width: '12rem', height: '12rem' }} />
                                <Link to="/Build/Builder">
                                    <Button variant="primary" onClick={AlguemMeAjuda} className="buttonAddNaBuild">
                                        Adicionar {/* Adiciona na Build */}
                                    </Button>
                                </Link>
                            </div>
                            <table>
                                <tr className="specsBarraLatLinha">
                                    <th className="specsBarraLatTh">Lorems</th>
                                    <td className="specsBarraLatTd">Ipsum</td>
                                </tr>
                                <tr className="specsBarraLatLinha">
                                    <th className="specsBarraLatTh">Lorem</th>
                                    <td className="specsBarraLatTd">Ipsum</td>
                                </tr>
                                <tr className="specsBarraLatLinha">
                                    <th className="specsBarraLatTh">Lorem</th>
                                    <td className="specsBarraLatTd">Ipsum</td>
                                </tr>
                                <tr className="specsBarraLatLinha">
                                    <th className="specsBarraLatTh">Lorem</th>
                                    <td className="specsBarraLatTd">Ipsum</td>
                                </tr>
                                <tr className="specsBarraLatLinha">
                                    <th className="specsBarraLatTh">Lorem</th>
                                    <td className="specsBarraLatTd">Ipsum</td>
                                </tr>
                                <tr className="specsBarraLatLinha">
                                    <th className="specsBarraLatTh">Lorem</th>
                                    <td className="specsBarraLatTd">Ipsum</td>
                                </tr>
                            </table>

                        </nav>

                        <div id="content" className="w-100 d-block">
                            <div className="container-fluid">
                                <div className="row border-bottom border-secondary-subtle pb-3">
                                    <div className="col text-white fs-4 text-start">Preços</div>

                                    {/* Adcionar algum estilo aqui */}
                                    <div className="col d-flex justify-content-end"></div>
                                </div>

                                <table className="table-search text-light mt-5 w-100">
                                    <thead>
                                        <tr className="p-2">
                                            <th className="col-md-7 pb-3">Nome</th>
                                            <th className="col-md-2">Disponibilidade</th>
                                            <th className="col-md-1">Preço</th>
                                            <th className="col-md-1">Frete</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="mt-2 my-3">
                                            <th className="py-3">
                                                <img
                                                    src="/among_us2.png"
                                                    className="img-fluid"
                                                    alt="Imagem responsiva"
                                                    style={{ width: "100px", height: "100px" }}
                                                />

                                            </th>
                                            <th className="col-md-2">
                                                Disponível
                                            </th>
                                            <th>R$ 150</th>
                                            <th>R$ 5</th>
                                            <th>
                                                <Link to="#">
                                                    <button className="btn-details rounded p-2">
                                                        <i className="fa-sharp fa-solid fa-plus mx-1"></i>{" "}
                                                        Comprar {/* Redireciona para a Loja Externa */}
                                                    </button>
                                                </Link>
                                            </th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}


export default Product;
