import { useHookstate } from "@hookstate/core";
import useLocalStorage from "use-local-storage";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";



function Processador() {
    const [text, setText] = useLocalStorage<string>("name", "");

    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo" className="container-fluid">
                <div className="headline text text-white">
                    <h1 className="text-center py-3">Processador</h1>
                </div>

                <div id="descricaoSection">
                    <div id="descricaoTitle" className="texto-temoso">
                        <b>Descrição</b>
                    </div>
                    <div className="form-group" >
                        <textarea className="form-control" id="boxDescricao" rows={4}  onChange={(e) => {
          setText(e.target.value);
        }}>
                            {text}
                        </textarea>
                    </div>
                </div>

                <div className="container col-md-10 mt-2 col">
                    <table className="table table-borderless text-light py-2 ">
                        <tbody>
                            <tr className="mt-1 pt-3">
                                <td>
                                    <button className="btn btn-secondary mx-2 p-2 px-4 rounded"><a className="nav-link" href="../Guias/center">Voltar</a></button>
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
        </div >
    );
}

export default Processador;