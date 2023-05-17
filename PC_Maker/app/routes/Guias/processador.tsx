import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import guias from '../../styles/guias.css'
import guiaConteudo from '../../styles/guiaConteudo.css'

import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUser } from "~/utils/session.server";


export const meta: MetaFunction = () => ({
    title: "Processador"
});

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};


function Processador() {

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
                                    <h1 className="fw-bolder mb-1">Processador</h1>
                                    <div className="text-muted fst-italic mb-2">Postado no dia 1 de Janeiro, 2023 pelo Time Junta Peça</div>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Hardware</a>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Newbies</a>
                                </header>
                                <figure className="mb-4"><img className="img-fluid rounded" src="/cpu_generic.jpg" alt="..." /></figure>
                                <section className="mb-5">
                                    <p className="fs-5 mb-4">O processador é a unidade central de processamento de um computador (CPU), que funciona como o cérebro do computador, pois interage e faz as conexões necessárias entre todos os programas instalados. Neste processo, ele também interpreta as informações enviadas pelos programas, realiza diversas operações, inclusive gerando a interface que nós interagimos quando usamos um computador. Os processadores são colocados na Placa-Mãe, por soquetes, e sua estrutura é composta por bilhões de transistores.</p>
                                    <h2 className="fw-bolder mb-4 mt-5">O que são esses Núcleos?</h2>
                                    <p className="fs-5 mb-4">Em tempos mais antigos, processadores contavam apenas com um núcleo, contudo, atualmente um processador pode ter vários núcleos para conseguir trabalhar melhor com uma grande variedade de informações recebidas simultaneamente. Por essa razão, vemos nomenclaturas como “Dual-Core” (2 núcleos), Quad-core (4 núcleos), podendo chegar em até 32 núcleos nos computadores de alta performance. Dessa forma, um computador consegue executar várias tarefas de uma vez, por isso você consegue abrir um texto em um programa, enquanto escuta música em outro e navega na internet. Isso para não citar as tarefas menores que são executadas e nós não vemos.</p>
                                </section>
                            </article>

                            {/* <div className="headline text">
                                <a className="text-justify py-2 px-5 guiaFonte" href="https://tecnoblog.net/responde/o-que-e-um-processador/">Fonte</a>
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

export default Processador;