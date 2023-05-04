
import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import guias from '../../styles/guias.css'
import guiaConteudo from '../../styles/guiaConteudo.css'
import type { MetaFunction } from '@remix-run/node';


export const meta: MetaFunction = () => ({
    title: "Placa de Vídeo"
});


function PlacaDeVideo() {

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
                                    <h1 className="fw-bolder mb-1">Placa de Vídeo</h1>
                                    <div className="text-muted fst-italic mb-2">Postado no dia 1 de Janeiro, 2023 pelo Time Junta Peça</div>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Hardware</a>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Newbies</a>
                                </header>
                                <figure className="mb-4"><img className="img-fluid rounded" src="/gpu_generic.jpg" alt="..." /></figure>
                                <section className="mb-5">
                                    <p className="fs-5 mb-4">A placa de vídeo decide qual será a qualidade da imagem que vai para a tela. Ela trabalha como um computador próprio, com processador e memória, sendo responsável pelo processamento gráfico completo. É seguro falar que quanto mais potente a placa de vídeo, mais fps (ou frames por segundo) poderão ser vistos em maiores resoluções.</p>
                                    <h2 className="fw-bolder mb-4 mt-5">Placa integrada ou dedicada? Qual é a melhor?</h2>
                                    <p className="fs-5 mb-4">Uma placa de vídeo integrada utiliza a memória RAM do computador para executar suas tarefas. Sendo assim, ela é projetada para notebooks mais básicos que não fazem uso intensivo de recursos gráficos. Ou seja, ela consome mais memória e pode deixar o computador mais lento quando a placa de vídeo for muito requisitada, como em jogos ou programas de edição de imagem, porém é mais econômica, além de reduzir o consumo de energia e a emissão de ruídos.</p>
                                    <p className="fs-5 mb-4">A placa de vídeo dedicada conta com uma memória própria para tarefas, deixando a memória RAM livre para outras ações, acelerando a performance gráfica da sua máquina para visualizar imagens mais vívidas e menos pixeladas. Ela é projetada para quem quer assistir filmes em alta definição, aplicativos que fazem uso intenso de vídeo, uso de softwares gráficos e para jogos mais poderosos.</p>
                                </section>
                            </article>

                            {/* <div className="headline text">
                                <a className="text-justify py-2 px-5 guiaFonte" href="https://www.dell.com/pt-br/lp/o-que-e-uma-placa-de-video#:~:text=Para%20o%20que%20serve%20uma%20placa%20de%20v%C3%ADdeo%3F,-Como%20escolher%20uma&text=A%20placa%20de%20v%C3%ADdeo%20decide,respons%C3%A1vel%20pelo%20processamento%20gr%C3%A1fico%20completo.">Fonte</a>
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
 */}


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

export default PlacaDeVideo;