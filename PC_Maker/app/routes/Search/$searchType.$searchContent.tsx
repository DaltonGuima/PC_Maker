import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import axios from "axios";
import { JSXElementConstructor, Key, ReactElement, ReactFragment, useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { SideComponent } from "~/components/SideComponent";
import { themePage } from "~/script/changeTheme";
import search from "~/styles/search.css"
import { getUser } from "~/utils/session.server";
import type { Produto } from "../Dashboard/__localVenda/LocaisVendas.$produtoId";
import useTable from "~/script/useTable";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: search },
    ];
};

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};

function Search() {

    const params = useParams();
    const searchType = ["Componente", "CategoriaProduto"]


    if (params.searchType?.valueOf != undefined && !searchType.includes(params.searchType?.toString()))
        throw new Error("Tipo de pesquisa inválido");

    const categoriaProduto =
        [
            "Placa-Mãe", "Memória RAM", "Armazenamento",
            "Placa de Vídeo", "Gabinete", "Fonte de Alimentação"
        ]
    if (params.searchType?.valueOf != undefined && params.searchType == "CategoriaProduto")
        if (params.searchContent?.valueOf != undefined && !categoriaProduto.includes(params.searchContent?.toString()))
            throw new Error("Componente Inexistente");

    const changeTheme = useHookstate(themePage);

    const [hide, setHide] = useState(false);

    function sidebarCollapse() {
        setHide(!hide)
        console.log(hide)
    }




    const [produtos, setProdutos] = useState<Produto[]>([])
    useEffect(() => {
        axios("http://127.0.0.1:8080/api/v1/produtos")
            .catch(error => { throw new Error(error.message) })
            .then(response => setProdutos(response.data))
    }, [])



    const FilterSearch = () => {
        let filter = produtos

        if (params.searchType == "CategoriaProduto") {
            filter = produtos.filter(categoriaProduto => categoriaProduto.categoria == params.searchContent?.toString())
        }

        if (params.searchType == "Componente" && params.searchContent?.valueOf != undefined) {
            filter = produtos.filter(categoriaProduto => categoriaProduto.nome.includes(params.searchContent ? params.searchContent : ""))
        }

        return (
            filter.map(componente => {

                function getLowest() {
                    if (componente.locaisVendas.length >= 1)
                        return componente.locaisVendas.reduce((previous, current) => { return current.preco < previous.preco ? current : previous })
                    else
                        return null
                }

                const menorPreco = getLowest()
                return (
                    <tr className="mt-2 my-3" key={componente.id}>
                        <th className="py-3" >
                            <img src="/among_us2.png" className="img-fluid" alt="Imagem responsiva" style={{ width: '100px', height: '100px', }} />
                            &emsp;{componente.nome}
                        </th>
                        <th className="col-md-2">
                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                            <label className="form-check-label fa fa-star text-muted" htmlFor="defaultCheck1"></label>
                        </th>
                        <th>R$ {menorPreco?.preco}</th>
                        <th>{menorPreco?.vendedor}</th>
                        <th>
                            <button className="btn-details rounded p-2"><i className="fa-sharp fa-solid fa-plus mx-1"></i> Ver mais detalhes</button>
                        </th>

                    </tr>
                )
            }))
    }

    function getCountResult(data: JSX.Element[]) {
        return data.length
    }

    // paginação
    const [page, setPage] = useState(1);
    const { slice, range } = useTable(FilterSearch(), page, 5);

    function Paginacao(event: React.ChangeEvent<HTMLSelectElement>) {
        const value = event.target.value;
        setPage(parseInt(value))
    }

    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app" >
                <div className="headline text text-white">
                    <h2 className="text-center py-3 pt-4">
                        {params.searchType == "CategoriaProduto" ?
                            `Escolha 👉 ${params.searchContent}` : "Pesquisar"
                        }
                    </h2>
                    <button type="button" id="sidebarCollapse" className="btn btn-info m-0 p-2 d-lg-none" onClick={sidebarCollapse}>
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                </div>

                <div className="wrapper">
                    <nav id="sidebar" className={`px-3 ${hide ? "active" : "disabled"}`}  >
                        <ul className="list-unstyled components">

                            <SideComponent
                                nome="Preco"
                                body={
                                    <div className="form-group" id="ml-2">
                                        <label htmlFor="formControlRange">R$ 0&emsp;&emsp;R$ 10.000,00</label>
                                        <input type="range" className="form-control-range col-8" id="formControlRange" />
                                    </div>
                                }
                            />

                            <SideComponent
                                nome="Fabricante"
                                body={
                                    <div>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Intel
                                                </label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    AMD
                                                </label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Asus
                                                </label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Gigabyte
                                                </label>
                                            </div>
                                        </ul>
                                    </div>
                                }
                            />



                            <SideComponent
                                nome="Avaliação"
                                body={
                                    <>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Todos
                                                </label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                                <label className="form-check-label fa fa-star  text-muted" htmlFor="defaultCheck1"></label>
                                            </div>
                                        </ul>
                                    </>
                                }
                            />




                            <SideComponent
                                nome="Vendedor"
                                body={
                                    <>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Kabum
                                                </label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Pichau
                                                </label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Mercado Livre
                                                </label>
                                            </div>
                                        </ul>
                                        <ul>
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    Amazon
                                                </label>
                                            </div>
                                        </ul>
                                    </>
                                }
                            />

                        </ul>

                    </nav>

                    <div id="content" className="w-100 d-block">
                        <div className="container-fluid">
                            <div className="row border-bottom border-secondary-subtle pb-3">
                                <div className="col text-white fs-4 text-start">{getCountResult(FilterSearch())} Resultados Encontrados</div>
                                {/* Adcionar algum estilo aqui */}
                                <div className="col d-flex justify-content-end bg-dark">

                                    <div className="form-floating text-light col-md-3">
                                        <select onChange={Paginacao} className="form-select form-select-dark bg-transparent text-light py-2" name="property" id='paginas'>
                                            {
                                                range.map((el: number) =>
                                                    (<option key={el} value={el} className="bg-dark text-light">Página {el} </option>))
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>




                            <table className="table-search text-light mt-5 w-100">
                                <thead>
                                    <tr className="p-2">
                                        <th className="col-md-7 pb-3">Nome</th>
                                        <th className="col-md-2">Avaliação</th>
                                        <th className="col-md-1">Menor Preço</th>
                                        <th className="col-md-1">Vendedor</th>
                                    </tr>
                                </thead>


                                <tbody>
                                    {
                                        slice
                                    }
                                </tbody>

                            </table>



                        </div>
                    </div>
                </div>



            </main >
            <Footer />
        </div >
    );
}


export default Search;
