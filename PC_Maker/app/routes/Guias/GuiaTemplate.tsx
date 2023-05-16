
import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUser } from "~/utils/session.server";

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};


function GuiaTemplate() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid texto">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <article>
                                <header className="mb-4">
                                    <h1 className="fw-bolder mb-1">Welcome to Blog Post!</h1>
                                    <div className="text-muted fst-italic mb-2">Postado no dia 1 de Janeiro, 2023 pelo Time Junta Peça</div>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Hardware</a>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Newbies</a>
                                </header>
                                <figure className="mb-4"><img className="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                                <section className="mb-5">
                                    <p className="fs-5 mb-4"></p>
                                    <h2 className="fw-bolder mb-4 mt-5"></h2>
                                    <p className="fs-5 mb-4"></p>
                                </section>
                            </article>

                            <div className="headline text">
                                <a className="text-justify py-2 px-5 guiaFonte" href="">Fonte</a>
                            </div>

                            <br />
                            <br />

                            <div className="container col-md-10 mt-2 col">
                                <table className="table table-borderless text-light py-2 ">
                                    <tbody>
                                        <tr className="mt-1 pt-3">
                                            <td>
                                                <button className="btn btn-secondary mx-2 p-2 px-4 rounded"><a className="nav-link" href="../Guias">Voltar</a></button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>



                        </div>

                        <div className="col-lg-4">

                            {/* <div className="card mb-4 cardLateral">
                                    <div className="card-header">Categories</div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="list-unstyled mb-0">
                                                    <li><a href="#!">Web Design</a></li>
                                                    <li><a href="#!">HTML</a></li>
                                                    <li><a href="#!">Freebies</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="list-unstyled mb-0">
                                                    <li><a href="#!">JavaScript</a></li>
                                                    <li><a href="#!">CSS</a></li>
                                                    <li><a href="#!">Tutorials</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                            </div> */}


                        </div>
                    </div>
                </div>


            </main >
            <Footer />
        </div>
    );
}

export default GuiaTemplate;