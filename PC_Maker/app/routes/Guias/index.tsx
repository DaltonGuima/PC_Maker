import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import type { LinksFunction, MetaFunction } from '@remix-run/node';


export const links: LinksFunction = () => {
    return [
    ];
};

export const meta: MetaFunction = () => ({
    title: "Guias"
});

function Guias() {

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid">
                <div className="headline text text-white">
                    <h2 className="text-center py-3">Guia</h2>
                    <h3 className="text-center pt-1">O seu PC em pedaços!</h3>
                </div>

                <div>
                    <h4 className="text-center py-3 text-white">
                        Quer conhecer um pouco mais sobre as peças que compõem o seu PC?
                    </h4>           
                    <h5 className="text-center pb-2 text-info">
                        Clique nos botões abaixo e descubra a funcionalidade de cada peça.
                    </h5>
                </div>

                <div className="container-fluid mt-2 ">
                    <table className="table table-borderless text-light py-2 ">
                        <tbody>
                            <tr className="mt-1 pt-3">
                                <td>
                                    <button className="btn btn-secondary mx-2 p-2 px-4 rounded"><a className="nav-link" href="../Guias/processador">Processador</a></button>
                                </td>
                            </tr>
                            <tr className="mt-1">
                                <td>
                                    <button className="btn btn-secondary mx-2 p-2 px-4 rounded"><a className="nav-link" href="../Guias/placamae">Placa Mãe</a></button>
                                </td>
                            </tr>
                            <tr className="mt-1">
                                <td>
                                    <button className="btn btn-secondary mx-2 p-2 px-4 rounded"><a className="nav-link" href="../Guias/RAM">Memória RAM</a></button>
                                </td>
                            </tr>
                            <tr className="mt-1">
                                <td>
                                    <button className="btn btn-secondary mx-2 p-2 px-4 rounded"><a className="nav-link" href="../Guias/placadevideo">Placa de Vídeo</a></button>
                                </td>
                            </tr>
                            <tr className="mt-1">
                                <td>
                                    <button className="btn btn-secondary mx-2 p-2 px-4 rounded"><a className="nav-link" href="../Guias/armazenamento">Armazenamento</a></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="row">
            <div>
              <div className="my-2">

                <div className="row">
                  <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-2"></div>
                  <p className="obsComp col my-2"></p>
                </div>
              </div>
              <div className="my-2">

                <div className="row">
                  <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-2"></div>
                  <p className="obsComp col my-2"></p>
                </div>

              </div>
            </div>
          </div>
            </main >
            <Footer />
        </div>
    );
}

export default Guias;