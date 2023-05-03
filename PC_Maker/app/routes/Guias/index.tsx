import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import guias from '../../styles/guias.css'
import type { LinksFunction, MetaFunction } from '@remix-run/node';


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: guias },
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



        <ul className="cards">
          <li>
            <a href="../Guias/armazenamento" className="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Armazenamento</h3>
                  </div>
                </div>
                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/RAM" className="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Memória RAM</h3>
                  </div>
                </div>
                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/placadevideo" className="card">
              <img src="https://i.imgur.com/oYiTqum.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Placa de Vídeo</h3>
                    {/* <span className="card__tagline">Lorem ipsum dolor sit amet consectetur</span> */}
                  </div>
                </div>
                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/placamae" className="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Placa Mãe</h3>
                  </div>
                </div>
                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
              </div>
            </a>
          </li>
          <li>
            <a href="../Guias/processador" className="card">
              <img src="https://i.imgur.com/2DhmtJ4.jpg" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
                  <div className="card__header-text">
                    <h3 className="card__title">Processador</h3>
                  </div>
                </div>
                <p className="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
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