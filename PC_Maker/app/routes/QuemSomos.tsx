import { useHookstate } from "@hookstate/core"
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header"
import { themePage } from "~/script/changeTheme"
import { getUser } from "~/utils/session.server";

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};

function QuemSomos() {

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
                                    <h1 className="fw-bolder mb-1 text-center">Qual o nosso Propósito?</h1>
                                </header>
                                <figure className="mb-4">
                                    <img className="img-fluid rounded" src="/ram_generica.png" alt="..." />
                                </figure>
                                <section className="mb-5">
                                    <p className="fs-3 mb-4">O JuntaPeca é uma ferramente que visa ajudar o usuário a escolher um computador
                                        (desktop ou notebook) com o maior/melhor custo beneficio. Além disso, os users mais experientes poderão montar
                                        suas próprias Builds e publicar as mesmas no site para que outros usuários possam ver e dar a sua opinião
                                        sobre elas. Ademais, vale ressaltar que o nosso site não venderá nenhum componente, nós apenas iremos redirecionar
                                        para as lojas parceiras.</p>
                                </section>
                            </article>

                            {/* <div className="headline text text-white">
                                <a className="text-justify py-2 px-5 guiaFonte" href="https://www.techtudo.com.br/noticias/2022/11/o-que-e-memoria-ram-descubra-qual-e-a-sua-funcao.ghtml">Créditos</a>
                            </div>

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
                            </div> */}

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

export default QuemSomos;