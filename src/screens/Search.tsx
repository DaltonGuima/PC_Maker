import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useHookstate } from "@hookstate/core";
import { themePage } from "../script/changeTheme";
import useDocumentTitle from "../script/useDocumentTitle";
import { useState } from "react";

function Search() {
    const changeTheme = useHookstate(themePage);
    useDocumentTitle("Pesquisa");

    const [idElement, setIdElement] = useState<string>()

    const [hide, setHide] = useState(false);

    function sidebarCollapse() {
        setHide(!hide)
    }


    function openForm(id: string) {
        const localConst = document.getElementById(id) as HTMLElement
        if (localConst.className == "d-none") {
            localConst.className = "d-block"
            setIdElement(id)
        } else {
            localConst.className = "d-none"
            setIdElement("")
        }

    }

    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app" >
                <div className="headline text text-white">
                    <h2 className="text-center py-3 pt-4">Pesquisar</h2>
                    <button type="button" id="sidebarCollapse" className="btn btn-info m-0 p-2 d-lg-none" onClick={sidebarCollapse}>
                        <i className="fas fa-align-left"></i>
                        <span>Toggle Sidebar</span>
                    </button>
                </div>

                <div className="wrapper">
                    <nav id="sidebar" className={`px-3 ${hide ? "active" : "disabled"}`} >
                        <ul className="list-unstyled components">
                            <li className="active" >
                                <div className="row my-3" onClick={() => openForm("preco-side")}>
                                    <div className="col-7">
                                        <h3>Preço</h3>
                                    </div>
                                    <div className="col">
                                        <button>
                                            {
                                                idElement == "preco-side" &&
                                                <i className="fa-solid fa-minus bg-transparent"></i>
                                            }
                                            {
                                                idElement != "preco-side" &&
                                                <i className="fa-solid fa-plus bg-transparent"></i>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <form className="d-none side-component" id="preco-side">
                                    <div className="form-group" id="ml-2">
                                        <label htmlFor="formControlRange">R$ 0&emsp;&emsp;R$ 10.000,00</label>
                                        <input type="range" className="form-control-range col-8" id="formControlRange" />
                                    </div>
                                </form>
                            </li>
                            <li>
                                <div className="row my-3" onClick={() => openForm("fabricante-side")}>
                                    <div className="col-7">
                                        <h3>Fabricante</h3>
                                    </div>
                                    <div className="col">
                                        <button>
                                            {
                                                idElement == "fabricante-side" &&
                                                <i className="fa-solid fa-minus bg-transparent"></i>
                                            }
                                            {
                                                idElement != "fabricante-side" &&
                                                <i className="fa-solid fa-plus bg-transparent"></i>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <form className="d-none side-component" id="fabricante-side">
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

                                </form>

                            </li>
                            <li>
                                <div className="row my-3" onClick={() => openForm("avaliacao-side")}>
                                    <div className="col-7">
                                        <h3>Avaliação</h3>
                                    </div>
                                    <div className="col">
                                        <button>
                                            {
                                                idElement == "avaliacao-side" &&
                                                <i className="fa-solid fa-minus bg-transparent"></i>
                                            }
                                            {
                                                idElement != "avaliacao-side" &&
                                                <i className="fa-solid fa-plus bg-transparent"></i>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <form className="d-none side-component" id="avaliacao-side">
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
                                </form>

                            </li>
                            <li>
                                <div className="row my-3" onClick={() => openForm("vendedor-side")}>
                                    <div className="col-7">
                                        <h3>Vendedor</h3>
                                    </div>
                                    <div className="col">
                                        <button>
                                            {
                                                idElement == "vendedor-side" &&
                                                <i className="fa-solid fa-minus bg-transparent"></i>
                                            }
                                            {
                                                idElement != "vendedor-side" &&
                                                <i className="fa-solid fa-plus bg-transparent"></i>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <form className="d-none side-component" id="vendedor-side">
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
                                </form>
                            </li>
                        </ul>

                    </nav>

                    <div id="content" className="d-block m-9 container-fluid w-100">
                        <table className="table table-borderless text-light text-center py-3 pt-4">
                            <thead>
                                <tr className="mt-3">
                                    <th className="text-white mt-5 fs-4">986 Resultados Encontrados</th>

                                    <div className="search-button  col-md-20">
                                        <form className="d-flex" id="barraPesquisa">
                                            <input className="form-control-plaintext" type="text" placeholder="Search" id="itemPesquisa" name='' />
                                            <label id="search-field" htmlFor='itemPesquisa'>
                                                <a className='text-white'>
                                                    <i className="fa-solid fa-search"></i>
                                                </a>
                                            </label>
                                        </form>
                                    </div>
                                </tr>

                            </thead>
                            <tbody>
                            </tbody>
                        </table>




                        <table className="table table-borderless text-light mt-5 ">
                            <thead>
                                <tr className="mt-2">

                                    <th className="col-md-8">Nome</th>
                                    <th className="col-md-2">Avaliação</th>
                                    <th className="col-md-1">Preço</th>
                                </tr>
                            </thead>
                        </table>



                    </div>
                </div>




            </main>
            <Footer />
        </div>
    );
}

export default Search;
