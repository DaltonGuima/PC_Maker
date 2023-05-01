import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import type { LinksFunction, MetaFunction } from '@remix-run/node';

function Armazenamento() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid">
                <div className="headline text text-white">
                    <h1 className="text-center py-2 px-4">Armazenamento</h1>
                </div>

                <div className="headline text text-white">
                    <h5 className="text-justify py-2 px-5">Quando você comprar o seu PC, irá baixar diversos programas
                    e aplicativos, no entanto, você precisará armazenar esses softwares em algum lugar. Atualmente, os
                    dois dispositivos de armazenamento mais famosos são: o HD e o SSD.</h5>
                </div>

                <br />

                <div className="headline text text-white">
                    <h2 className="text-center py-2 px-4">HD</h2>
                    <h5 className="text-center py-2 px-5">Uma HD é um dispositivo de armazenamento tradicional que usa 
                    pratos giratórios mecânicos e um cabeçote móvel de leitura/gravação para acessar dados.</h5>
                </div>

                <br />

                <div className="headline text text-white">
                    <h2 className="text-center py-2 px-4">SSD</h2>
                    <h5 className="text-center py-2 px-5">SSDs são unidades mais recentes e rápidas que armazenam dados em chips 
                    de memória acessíveis instantaneamente.</h5>
                </div>

                <div className="headline text text-white">
                    <h2 className="text-center py-4 px-4">Diferenças entre o HD e o SSD</h2>
                    <h5 className="text-justify py-2 px-5">Enquanto os discos rígidos (Hard Disk Drive, ou HDD) são formados por partes 
                    móveis e mecânicas, os SSDs (Solid State Drives) funcionam com componentes eletrônicos, o que os deixa menores e menos 
                    exigentes de energia. Além disso, os HDs são mais frágeis: uma pancada pode tirar as partes móveis do lugar e danificar 
                    permanentemente o drive.</h5>
                    <h5 className="text-justify py-2 px-5">Mas a principal vantagem do SSD sobre os HDDs tradicionais é mesmo a velocidade em guardar e acessar arquivos em sua memória, 
                        o que ocorre de forma praticamente instantânea.
                    </h5>
                    <h5 className="text-justify py-2 px-5">Um disco rígido novo tem velocidades de leitura e gravação em torno de 150 a 200 MB/s, enquanto um SSD mais básico pode operar 
                    em torno de 500 MB/s, mas as taxas podem ultrapassar 7.000 MB/s nos modelos mais modernos e eficientes. Em outras palavras, uma unidade de estado sólido pode ler até
                    10 vezes mais rápido e gravar dados até 20 vezes mais rápido do que uma unidade de disco rígido, segundo fabricantes.
                    </h5>
                </div>

                <br />

                <div className="headline text text-white">
                    <a className="text-justify py-2 px-5 " href="https://www.avast.com/pt-br/c-ssd-vs-hdd#:~:text=Uma%20HDD%20%C3%A9%20um%20dispositivo,chips%20de%20mem%C3%B3ria%20acess%C3%ADveis%20instantaneamente.">Créditos</a>
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


                <div className="row">
                  <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-2"></div>
                  <p className="obsComp col my-2"></p>
                </div>



            </main >
            <Footer />
        </div>
    );
}

export default Armazenamento;