import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import type { LinksFunction, MetaFunction } from '@remix-run/node';

function RAM() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid">
                <div className="headline text text-white">
                    <h1 className="text-center py-2 px-4">Memória RAM</h1>
                </div>

                <div className="headline text text-white">
                    <h5 className="text-justify py-2 px-5">A memória RAM é uma tecnologia que permite o acesso 
                    aos arquivos armazenados no celular, PC ou notebook. Diferentemente da memória do HD, a 
                    RAM não armazena conteúdos permanentemente. O componente é responsável pela leitura dos 
                    conteúdos quando requeridos.</h5>
                </div>


                <div className="headline text text-white">
                    <h5 className="text-justify py-2 px-5">Para simplificar a lógica por trás da função da memória
                     RAM, é possível fazer uma analogia com uma mesa de estudos. Nela, há todo o material necessário 
                     para realizar os deveres de casa, como canetas, lápis, caderno e livros. Os materiais seriam os 
                     arquivos, enquanto a memória RAM seria a mesa, onde tudo se reúne e o trabalho é feito.</h5>

                     <h5 className="text-justify py-2 px-5">Sendo assim, a memória RAM pode ser entendida como um 
                     espaço temporário de trabalho, pois, após a tarefa ser realizada, os arquivos (material de 
                     estudos) são retirados da memória (mesa) e mantidos no HD (armário).</h5>
                </div>


                <br />


                <div className="headline text text-white">
                    <h5 className="text-center py-2 px-5"></h5>
                </div>

                <br />

                <div className="headline text text-white">
                    <a className="text-justify py-2 px-5 " href="https://www.techtudo.com.br/noticias/2022/11/o-que-e-memoria-ram-descubra-qual-e-a-sua-funcao.ghtml">Créditos</a>
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

export default RAM;