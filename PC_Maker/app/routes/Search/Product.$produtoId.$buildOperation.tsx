import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
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
            if (params.buildOperation == "new")
                localStorage.setItem(produto?.categoria, localVendaId.toString())
            else
                localStorage.setItem(`edit${produto?.categoria}`, localVendaId.toString())
        }
        return navigate(`/Build/Builder/${params.buildOperation}`)
    }


    // eu tenho que botar local venda aqui
    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/produtos/${params.produtoId}`)
            .catch(() => { return null })
            .then(response => setProduto(response?.data))

    }, [params.produtoId])


    const categoriaProduto =
        [
            "Processador", "Armazenamento", "Placa de Vídeo",
            "Memória RAM", "Placa-Mãe", "Fonte de Alimentação",
            "Gabinete"
        ]
    function AddBuildButton(props: { categoria: string | undefined, id: number }) {

        if (props.categoria?.valueOf != undefined && categoriaProduto.includes(props.categoria)) {
            return (
                <td>
                    <button className="btn-details rounded p-2" onClick={() => addBuild(props.id)}>
                        <i className="fa-sharp fa-solid fa-plus mx-1"></i>
                        Adicionar na Build {/* Redireciona para a Loja Externa */}
                    </button>
                </td>
            )
        } else {
            return null
        }
    }

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
                                <thead>
                                    <tr>
                                        <th className="specsBarraLatTh">Especificação</th>
                                        <th className="specsBarraLatTd">Valor</th>
                                    </tr>
                                </thead>
                                <tbody>


                                    <TableProduct
                                        key={produto?.id}
                                        produto={produto}
                                    />

                                </tbody>
                            </table>

                        </nav>

                        <div id="content" className="w-100 d-block">
                            <div className="container-fluid">
                                <div className="row border-bottom border-secondary-subtle pb-3">
                                    <div className="col textoCor fs-4 text-start">Preços</div>

                                    {/* Adcionar algum estilo aqui */}
                                    <div className="col d-flex justify-content-end"></div>
                                </div>

                                <table className="table-search text-light mt-5 w-100">
                                    <thead>
                                        <tr className="p-2">
                                            <th className="col-md-7 pb-3">Nome</th>
                                            <th className="col-md-3">Link do Produto</th>
                                            <th className="col-md-2">Disponibilidade</th>
                                            <th className="col-md-1">Preço</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {produto?.locaisVendas?.map(localVenda => {
                                            return (
                                                <tr className="mt-2 my-3" key={localVenda.id}>
                                                    <td className="py-3">
                                                        {localVenda.vendedor}
                                                    </td>
                                                    <td><a href={localVenda.linkProduto}>Link da loja</a></td>
                                                    <td className="col-md-2">
                                                        Disponível
                                                    </td>
                                                    <td>R$ {localVenda.preco}</td>
                                                    <AddBuildButton
                                                        id={localVenda.id}
                                                        categoria={produto.categoria}
                                                    />
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
