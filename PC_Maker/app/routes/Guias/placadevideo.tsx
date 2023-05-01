import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import type { LinksFunction, MetaFunction } from '@remix-run/node';

function PlacadeVideo() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid">
                <div className="headline text text-white">
                    <h1 className="text-center py-2 px-4">Placa de Vídeo</h1>
                </div>

                <div className="headline text text-white">
                    <h5 className="text-justify py-2 px-5">A placa de vídeo decide qual será a qualidade da imagem
                     que vai para a tela. Ela trabalha como um computador próprio, com processador e memória, sendo
                      responsável pelo processamento gráfico completo. É seguro falar que quanto mais potente a 
                      placa de vídeo, mais fps (ou frames por segundo) poderão ser vistos em maiores resoluções.</h5>
                </div>


                <div className="headline text text-white">
                    <h2 className="text-center py-4 px-4">Placa integrada ou dedicada? Qual é a melhor?</h2>
                    <h5 className="text-justify py-2 px-5">Uma placa de vídeo integrada utiliza a memória RAM do computador 
                    para executar suas tarefas. Sendo assim, ela é projetada para notebooks mais básicos que não fazem uso 
                    intensivo de recursos gráficos. Ou seja, ela consome mais memória e pode deixar o computador mais lento 
                    quando a placa de vídeo for muito requisitada, como em jogos ou programas de edição de imagem, porém é 
                    mais econômica, além de reduzir o consumo de energia e a emissão de ruídos.</h5>


                    <h5 className="text-justify py-2 px-5">A placa de vídeo dedicada conta com uma memória própria para tarefas, 
                    deixando a memória RAM livre para outras ações, acelerando a performance gráfica da sua máquina para visualizar 
                    imagens mais vívidas e menos pixeladas. Ela é projetada para quem quer assistir filmes em alta definição, aplicativos 
                    que fazem uso intenso de vídeo, uso de softwares gráficos e para jogos mais poderosos.</h5>
                </div>


                <br />


                <div className="headline text text-white">
                    <h5 className="text-center py-2 px-5"></h5>
                </div>

                <br />

                <div className="headline text text-white">
                    <a className="text-justify py-2 px-5 " href="https://www.dell.com/pt-br/lp/o-que-e-uma-placa-de-video#:~:text=Para%20o%20que%20serve%20uma%20placa%20de%20v%C3%ADdeo%3F,-Como%20escolher%20uma&text=A%20placa%20de%20v%C3%ADdeo%20decide,respons%C3%A1vel%20pelo%20processamento%20gr%C3%A1fico%20completo.">Créditos</a>
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

export default PlacadeVideo;