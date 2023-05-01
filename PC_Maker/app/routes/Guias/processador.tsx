import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import type { LinksFunction, MetaFunction } from '@remix-run/node';


function Processador() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid">
                <div className="headline text text-white">
                    <h1 className="text-center py-2 px-4">Processador</h1>
                </div>

                <div className="headline text text-white">
                    <h5 className="text-justify py-2 px-5">O processador é a unidade central de processamento de um computador 
                    (CPU), que funciona como o cérebro do computador, pois interage e faz as conexões necessárias entre todos 
                    os programas instalados. Neste processo, ele também interpreta as informações enviadas pelos programas, 
                    realiza diversas operações, inclusive gerando a interface que nós interagimos quando usamos um computador.
                    Os processadores são colocados na Placa-Mãe, por soquetes, e sua estrutura é composta por bilhões de transistores.</h5>
                </div>



                <div className="headline text text-white">
                    <h2 className="text-center py-4 px-4 text-danger">O que são esses Núcleos?</h2>
                    <h5 className="text-justify py-2 px-5">Em tempos mais antigos, processadores contavam apenas com um núcleo,
                     contudo, atualmente um processador pode ter vários núcleos para conseguir trabalhar melhor com uma grande
                      variedade de informações recebidas simultaneamente. Por essa razão, vemos nomenclaturas como “Dual-Core” 
                      (2 núcleos), Quad-core (4 núcleos), podendo chegar em até 32 núcleos nos computadores de alta performance.
                      Dessa forma, um computador consegue executar várias tarefas de uma vez, por isso você consegue abrir um texto 
                      em um programa, enquanto escuta música em outro e navega na internet. Isso para não citar as tarefas menores que 
                      são executadas e nós não vemos.</h5>
                </div>



                <br />


                <div className="headline text text-white">
                    <h5 className="text-center py-2 px-5"></h5>
                </div>

                <br />

                <div className="headline text text-white">
                    <a className="text-justify py-2 px-5 " href="https://tecnoblog.net/responde/o-que-e-um-processador/">Créditos</a>
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

export default Processador;