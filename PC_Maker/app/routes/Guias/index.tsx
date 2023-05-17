import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import guias from '../../styles/guias.css';

import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { getUser } from "~/utils/session.server";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: guias },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Guias"
});

export const loader = async ({ request }: LoaderArgs) => {

  const user = await getUser(request);

  return json({ user })
};


function Guias() {

  const changeTheme = useHookstate(themePage)

  return (
    <div data-theme={changeTheme.get()}>
      <Header />
      <main id="conteudo" className="container-fluid texto">
        <div className="headline text">
          <h2 className="text-center py-3">Guia</h2>
          <h3 className="text-center pt-1">O seu PC em pedaços!</h3>
        </div>

        <div>
          <h4 className="text-center py-3">
            Quer conhecer um pouco mais sobre as peças que compõem o seu PC?
          </h4>
          <h5 className="text-center pb-2 informativoTopo">
            Clique nos botões abaixo e descubra a funcionalidade de cada peça.
          </h5>
        </div>



        <ul className="cards">
          <li>
            <a href="../Guias/armazenamento" className="card">
              <img src="/hdd_ssd_generic2.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Armazenamento</h3>
                  </div>
                </div>
                <p className="card__description">O componente do seu computador que permite que você armazene e acesse dados no longo prazo</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/MemoriaRAM" className="card">
              <img src="/ram_generic2.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Memória RAM</h3>
                  </div>
                </div>
                <p className="card__description">O componente responsável por dar mais agilidade e velocidade no funcionamento geral do sistema</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/PlacaDeVideo" className="card">
              <img src="/gpu_generic2.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Placa de Vídeo</h3>
                    {/* <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span> */}
                  </div>
                </div>
                <p className="card__description">O componente responsável por exibir imagens na tela.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/PlacaMae" className="card">
              <img src="/mobo_generic2.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Placa Mãe</h3>
                  </div>
                </div>
                <p className="card__description">O componente central responsável por conectar e interligar todos os componentes.</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/Processador" className="card">
              <img src="/cpu_generic2.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Processador</h3>
                  </div>
                </div>
                <p className="card__description">O componente com a função é acelerar, endereçar, resolver ou preparar dados.</p>
              </div>
            </a>
          </li>
        </ul>


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