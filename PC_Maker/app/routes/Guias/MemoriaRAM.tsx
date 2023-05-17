import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import guias from '../../styles/guias.css'
import guiaConteudo from '../../styles/guiaConteudo.css'

import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUser } from "~/utils/session.server";


export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};

export const meta: MetaFunction = () => ({
    title: "Memória RAM"
});



function MemoriaRAM() {

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
                                    <h1 className="fw-bolder mb-1">Memória RAM</h1>
                                    <div className="text-muted fst-italic mb-2">Postado no dia 1 de Janeiro, 2023 pelo Time Junta Peça</div>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Hardware</a>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Newbies</a>
                                </header>
                                <figure className="mb-4"><img className="img-fluid rounded" src="/ram_generica.png" alt="..." /></figure>
                                <section className="mb-5">
                                    <p className="fs-5 mb-4">A memória RAM é uma tecnologia que permite o acesso aos arquivos armazenados no celular, PC ou notebook. Diferentemente da memória do HD, a RAM não armazena conteúdos permanentemente. O componente é responsável pela leitura dos conteúdos quando requeridos.</p>
                                    <p className="fs-5 mb-4">Para simplificar a lógica por trás da função da memória RAM, é possível fazer uma analogia com uma mesa de estudos. Nela, há todo o material necessário para realizar os deveres de casa, como canetas, lápis, caderno e livros. Os materiais seriam os arquivos, enquanto a memória RAM seria a mesa, onde tudo se reúne e o trabalho é feito.</p>
                                    <p className="fs-5 mb-4">Sendo assim, a memória RAM pode ser entendida como um espaço temporário de trabalho, pois, após a tarefa ser realizada, os arquivos (material de estudos) são retirados da memória (mesa) e mantidos no HD (armário).</p>
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

export default MemoriaRAM;