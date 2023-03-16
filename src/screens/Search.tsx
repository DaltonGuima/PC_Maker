import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useHookstate } from "@hookstate/core";
import { themePage } from "../script/changeTheme";
import useDocumentTitle from "../script/useDocumentTitle";
import { useState } from "react";

function Search() {
    const changeTheme = useHookstate(themePage);
    useDocumentTitle("Home");

    const [hide, setHide] = useState(false);

    function sidebarCollapse() {
        setHide(!hide)
    }

    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app">
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
                            <li className="active">
                                <h3 data-toggle="collapse" aria-expanded="false">Preço</h3>
                                <form>
                                    <div className="form-group" id="ml-2">
                                        <label htmlFor="formControlRange">R$ 0&emsp;&emsp;&emsp;R$ 10.000,00</label>
                                        <input type="range" className="form-control-range col-8" id="formControlRange" />
                                    </div>
                                </form>
                            </li>



                            <li>
                                <h3 className="text-white mt-5 ml-9">Fabricante</h3>
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
                            </li>




                            <li>
                                <h3 className="text-white">Avaliação</h3>
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
                                <ul>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            Não Informado
                                        </label>
                                    </div>
                                </ul>
                            </li>
                            <li>
                                <h3 className="text-white mt-5 ml-9">Vendedor</h3>
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
                            </li>
                        </ul>

                    </nav>
                    <div id="content">
                        <h1>teste</h1>
                    </div>
                </div>





            </main>
            <Footer />
        </div>
    );
}

export default Search;
