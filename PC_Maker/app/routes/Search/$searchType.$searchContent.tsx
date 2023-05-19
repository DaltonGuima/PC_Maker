import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import { useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { SideComponent } from "~/components/SideComponent";
import { themePage } from "~/script/changeTheme";
import search from "~/styles/search.css"
import { getUser } from "~/utils/session.server";

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
    if (params.searchType?.valueOf != undefined && searchType.includes("CategoriaProduto"))
        if (params.searchContent?.valueOf != undefined && !categoriaProduto.includes(params.searchContent?.toString()))
            throw new Error("Componente Inexistente");

    const changeTheme = useHookstate(themePage);

    const [hide, setHide] = useState(false);

    function sidebarCollapse() {
        setHide(!hide)
        console.log(hide)
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
                                <div className="col text-white fs-4 text-start">986 Resultados Encontrados</div>
                                {/* não sei a utilidade dessa barra 
                                <div className="col search-button">
                                    <form className="d-flex" id="barraPesquisa">
                                        <input className="form-control-plaintext" type="text" placeholder="Search" id="itemPesquisa" name='' />
                                        <label id="search-field" htmlFor='itemPesquisa'>
                                            <a className='text-white'>
                                                <i className="fa-solid fa-search"></i>
                                            </a>
                                        </label>
                                    </form>
                                </div> */}
                            </div>




                            <table className="table-search text-light mt-5 w-100">
                                <thead>
                                    <tr className="p-2">
                                        <th className="col-md-8 pb-3">Nome</th>
                                        <th className="col-md-2">Avaliação</th>
                                        <th className="col-md-1">Preço</th>
                                    </tr>
                                </thead>


                                <tbody>
                                    <tr className="mt-2 my-3">
                                        <th className="col-md-8 py-3" >
                                            <img src="/among_us2.png" className="img-fluid" alt="Imagem responsiva" style={{ width: '100px', height: '100px', }} />
                                            Asus TUF GAMING X570 </th>
                                        <th className="col-md-2">
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-muted" htmlFor="defaultCheck1"></label>
                                        </th>
                                        <th className="col-md-1">R$ 989,75</th>
                                    </tr>
                                    <tr className="mt-2">

                                        <th className="col-md-8">
                                            <img src="/among_us2.png" className="img-fluid" alt="Imagem responsiva" style={{ width: '100px', height: '100px', }} />
                                            Ryzen 5 5600 3.7GHz 6 Núcleos </th>
                                        <th className="col-md-2">
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-muted" htmlFor="defaultCheck1"></label>
                                        </th>
                                        <th className="col-md-1">R$ 1200,60</th>
                                    </tr>


                                    <tr className="mt-2">

                                        <th className="col-md-8">
                                            <img src="/among_us2.png" className="img-fluid" alt="Imagem responsiva" style={{ width: '100px', height: '100px', }} />
                                            Ryzen 5 5700 3.4GHz (4.6GHz Max Turbo) </th>
                                        <th className="col-md-2">
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                        </th>
                                        <th className="col-md-1">R$ 2971,2</th>
                                    </tr>

                                    <tr className="mt-2">

                                        <th className="col-md-8">
                                            <img src="/among_us2.png" className="img-fluid" alt="Imagem responsiva" style={{ width: '100px', height: '100px', }} />
                                            GYGABYTE B550 DS3H</th>
                                        <th className="col-md-2">
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-muted" htmlFor="defaultCheck1"></label>
                                        </th>
                                        <th className="col-md-1">R$ 635,00</th>
                                    </tr>



                                    <tr className="mt-2">

                                        <th className="col-md-8">
                                            <img src="/among_us2.png" className="img-fluid" alt="Imagem responsiva" style={{ width: '100px', height: '100px', }} />
                                            ASRock B450M Steel Legend </th>
                                        <th className="col-md-2">
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                        </th>
                                        <th className="col-md-1">R$ 527,80</th>
                                    </tr>



                                    <tr className="mt-2">

                                        <th className="col-md-8">
                                            <img src="/among_us2.png" className="img-fluid" alt="Imagem responsiva" style={{ width: '100px', height: '100px', }} />
                                            Asus Prime B450M-A/CSM </th>
                                        <th className="col-md-2">
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-warning" htmlFor="defaultCheck1"></label>
                                            <label className="form-check-label fa fa-star text-muted" htmlFor="defaultCheck1"></label>
                                        </th>
                                        <th className="col-md-1">R$ 499,99</th>
                                    </tr>

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
