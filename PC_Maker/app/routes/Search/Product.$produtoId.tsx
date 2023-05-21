import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useNavigate, useParams } from "@remix-run/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useHydrated } from "remix-utils";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import search from "~/styles/search.css"
import { getUser } from "~/utils/session.server";
import type { Componente } from "~/Interface/ComponenteInterface";
import TableProduct from "~/components/TableProduct";



export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: search },
    ];
};
export const meta: MetaFunction = () => {
    return ({
        title: "Componente"
    })
}

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};


function Product() {
    const params = useParams();
    const changeTheme = useHookstate(themePage);
    const [produto, setProduto] = useState<Componente>()
    const hydrated = useHydrated();
    const navigate = useNavigate();

    function addBuild(localVendaId: number) {
        if (hydrated && produto != null && produto.categoria != null) {
            localStorage.setItem(produto?.categoria, localVendaId.toString())
        }
        console.log(produto)
        return navigate("/Build/Builder")
    }


    // eu tenho que botar local venda aqui
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/produtos/${params.produtoId}`)
            .catch(() => { return null })
            .then(response => setProduto(response?.data))

    }, [params.produtoId])


    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app">

                <div id="content">
                    <div className="wrapper">
                        <nav id="sidebar" className="px-3">
                            <div className="specsBarraLatProduct">
                                <div className="col"><img src="/among_us.jpg" alt="Logo da empresa" style={{ width: '12rem', height: '12rem' }} /></div>
                                <h5 className="pt-2">{produto?.nome}</h5>

                            </div>
                            <table>
                                <tbody>

                                    <tr className="specsBarraLatLinha">
                                        <TableProduct
                                            key={produto?.id}
                                            produto={produto}
                                        />
                                    </tr>

                                </tbody>
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
                                            {/* Precisa? tipo não está adicionado no banco de dados isso */}
                                            <th className="col-md-1">Frete</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {produto?.locaisVendas?.map(localVenda => {
                                            return (
                                                <tr className="mt-2 my-3" key={localVenda.id}>
                                                    <th className="py-3">
                                                        <img
                                                            src="/among_us2.png"
                                                            className="img-fluid"
                                                            alt="Imagem responsiva"
                                                            style={{ width: "100px", height: "100px" }}
                                                        />
                                                        &emsp;{localVenda.vendedor}
                                                    </th>
                                                    <th className="col-md-2">
                                                        Disponível
                                                    </th>
                                                    <th>R$ {localVenda.preco}</th>
                                                    <th>R$ 5</th>
                                                    <th>
                                                        {/* Adicionar uma verificação se o componente é algum que compoê a build */}

                                                        <button className="btn-details rounded p-2" onClick={() => addBuild(localVenda.id)}>
                                                            <i className="fa-sharp fa-solid fa-plus mx-1"></i>
                                                            Adicionar na Build {/* Redireciona para a Loja Externa */}
                                                        </button>

                                                        {/* vc pode fazer outra coluna para ir comprar direto na loja */}
                                                    </th>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </div >
    );
}


export default Product;
