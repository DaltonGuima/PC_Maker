import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import guias from '../../styles/guias.css'
import guiaConteudo from '../../styles/guiaConteudo.css'


import { getUser } from "~/utils/session.server";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";


export const meta: MetaFunction = () => ({
    title: "Armazenamento"
});

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};


function Armazenamento() {

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
                                    <h1 className="fw-bolder mb-1">Armazenamento</h1>
                                    <div className="text-muted fst-italic mb-2">Postado no dia 1 de Janeiro, 2023 pelo Time Junta Peça</div>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Hardware</a>
                                    <a className="badge bg-secondary text-decoration-none link-light" href="#!">Newbies</a>
                                </header>
                                <figure className="mb-4"><img className="img-fluid rounded" src="/hdd_ssd_generico.jpg" alt="..." /></figure>
                                <section className="mb-5">
                                    <p className="fs-5 mb-4">Quando você comprar o seu PC, irá baixar diversos programas e aplicativos, no entanto, você precisará armazenar esses softwares em algum lugar. Atualmente, os dois dispositivos de armazenamento mais famosos são: o HD e o SSD.</p>
                                    <h2 className="fw-bolder mb-4 mt-5">HDD (Disco Rígido)</h2>
                                    <p className="fs-5 mb-4">Um HDD (também conhecido como HD) é um dispositivo de armazenamento tradicional que usa discos giratórios mecânicos e um cabeçote móvel de leitura/gravação para acessar dados.</p>
                                    <h2 className="fw-bolder mb-4 mt-5">SSD</h2>
                                    <p className="fs-5 mb-4">SSDs são unidades mais recentes e rápidas que armazenam dados em chips de memória acessíveis instantaneamente.</p>
                                    <h2 className="fw-bolder mb-4 mt-5">Diferença entre o HDD e o SSD</h2>
                                    <p className="fs-5 mb-4">Enquanto os discos rígidos (Hard Disk Drive, ou HDD) são formados por partes móveis e mecânicas, os SSDs (Solid State Drives) funcionam com componentes eletrônicos, o que os deixa menores e menos exigentes de energia. Além disso, os HDs são mais frágeis: uma pancada pode tirar as partes móveis do lugar e danificar permanentemente o drive.</p>
                                    <p className="fs-5 mb-4">Mas a principal vantagem do SSD sobre os HDDs tradicionais é mesmo a velocidade em guardar e acessar arquivos em sua memória, o que ocorre de forma praticamente instantânea.</p>
                                    <p className="fs-5 mb-4">Um disco rígido novo tem velocidades de leitura e gravação em torno de 150 a 200 MB/s, enquanto um SSD mais básico pode operar em torno de 500 MB/s, mas as taxas podem ultrapassar 7.000 MB/s nos modelos mais modernos e eficientes. Em outras palavras, uma unidade de estado sólido pode ler até 10 vezes mais rápido e gravar dados até 20 vezes mais rápido do que uma unidade de disco rígido, segundo fabricantes.</p>
                                </section>
                            </article>

                            {/* <div className="headline text">
                                <a className="text-justify py-2 px-5 guiaFonte" href="https://www.avast.com/pt-br/c-ssd-vs-hdd#:~:text=Uma%20HDD%20%C3%A9%20um%20dispositivo,chips%20de%20mem%C3%B3ria%20acess%C3%ADveis%20instantaneamente.">Fonte</a>
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


                            <div className="card mb-4 cardLateral">
                                <div className="card-header">Categorias</div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled mb-0">
                                                <li><a href="../Guias/MemoriaRAM" className="linkCategoria">Memória RAM</a></li>
                                                <li><a href="../Guias/PlacaDeVideo" className="linkCategoria">Placa de Vídeo</a></li>
                                                <li><a href="../Guias/PlacaMae" className="linkCategoria">Placa Mãe</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-6">
                                            <ul className="list-unstyled mb-0">
                                                <li><a href="../Guias/Processador" className="linkCategoria">Processador</a></li>
                                                <li><a href="#!" className="linkCategoria">Lorem</a></li>
                                                <li><a href="#!" className="linkCategoria">Lorem</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </main >
            <Footer />
        </div>
    );
}

export default Armazenamento;