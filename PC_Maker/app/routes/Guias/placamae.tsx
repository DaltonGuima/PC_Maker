import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import type { LinksFunction, MetaFunction } from '@remix-run/node';

function PlacaMae() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid">
                <div className="headline text text-white">
                    <h1 className="text-center py-2 px-4">Placa Mãe</h1>
                </div>

                <div className="headline text text-white">
                    <h5 className="text-justify py-2 px-5">É uma peça central responsável por conectar e interligar todos os componentes
                     (processador com memória RAM, disco rígido, placa gráfica). A placa une todas as partes do sistema numa só 
                     rede de fios, porque dispõe de caminhos que permitem a troca de informação entre processadores, memórias, 
                     placas e etc.</h5>
                </div>


                <div className="headline text text-white">
                    <h5 className="text-justify py-2 px-5">Além de permitir o tráfego de informação, a placa-mãe serve também 
                    para alimentar alguns periféricos com a energia elétrica que recebe da fonte do gabinete. Todas essas funções 
                    tornam o nome “mãe” algo bem lógico: sem ela, o computador é apenas um amontoado de chips e placas independentes. 
                    É importante ressaltar que, para funcionar adequadamente, os PCs necessitam de uma placa-mãe confiável.</h5>
                </div>

                <div className="headline text text-white">
                    <h2 className="text-center py-4 px-4 text-danger">Sempre atento com o Soquete!</h2>
                    <h5 className="text-justify py-2 px-5">É o slot horizontal onde é instalado o processador de seu sistema. 
                    Evidente que toda placa-mãe possui um. Entretanto, cada geração de processadores, independentemente do 
                    fabricante, exige um tipo específico de soquete. Então, é possível ter uma ideia da capacidade da placa
                     e do seu compasso com as novas tecnologias a partir do tipo de soquete oferecido no modelo.</h5>
                </div>



                <br />


                <div className="headline text text-white">
                    <h5 className="text-center py-2 px-5"></h5>
                </div>

                <br />

                <div className="headline text text-white">
                    <a className="text-justify py-2 px-5 " href="https://www.techtudo.com.br/dicas-e-tutoriais/2023/01/o-que-e-placa-mae-e-qual-sua-funcao.ghtml">Créditos</a>
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

export default PlacaMae;