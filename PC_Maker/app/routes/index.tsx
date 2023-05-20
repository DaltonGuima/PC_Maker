import { useHookstate } from "@hookstate/core"
import { LinksFunction, LoaderArgs, MetaFunction, json } from "@remix-run/node";
import { Link } from "@remix-run/react"
import { CardBuild } from "~/components/CardBuild"
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header"
import { themePage } from "~/script/changeTheme"
//css
import home from "~/styles/home.css"

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getUser } from "~/utils/session.server";
import useLocalStorage from "use-local-storage";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: home },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Home"
});

export const loader = async ({ request }: LoaderArgs) => {

  const user = await getUser(request);

  return json({ user })
};


export default function Home() {

  // const [teste, setTeste] = useLocalStorage('teste', ['a', 'b']);
  const changeTheme = useHookstate(themePage)
  /*   const teste = useLoaderData<typeof loader>(); */

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div data-theme={changeTheme.get()}>

      <Header />
      <main id="conteudo" className="app texto">
        <div className="banner banner1">
          <div className="row-fluid rounded">
            <div className="cardbanner">
              <div className="card-body-h">
                <h2 className="card-title text-light text-bold">Monte seu Computador</h2>
                <p className="card-text text-light">Utilize nossas mais recentes ferramentas para
                  montar o seu PC do seu jeito.</p>
                {/* <Link to="#" className="btn text-light montarButton" >Montar</Link> */}
                <Button className="btn text-light montarButton" variant="primary" onClick={handleShow}>Montar</Button>
              </div>
            </div>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} data-theme={changeTheme.get()}>
          <Modal.Header closeButton className="modal-exp-header">
            <Modal.Title>Precisa de ajuda?</Modal.Title>
          </Modal.Header>
          <Modal.Body>Quanto de experiência você tem montando computadores?</Modal.Body>
          <Modal.Footer className="modal-exp-footer">
            <Button href="../Questionario" variant="primary" className="btn-modal-primary" onClick={handleClose}>
              Pouca experiência
            </Button>

            <Button variant="secondary" className="btn-modal-secondary" href="/Build/Builder" onClick={handleClose}>
              Alguma experiência
            </Button>
          </Modal.Footer>
        </Modal>



        <div className="container cards">
          <h1 className="text-center title">Builds mais votadas</h1>
          <div className="row pt-2 m-auto">

            <CardBuild
              title='Build 1'
              Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
              perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
              buildImg='/Build_1.png'
              criador='Zezão extreme'
            />
            <CardBuild
              title='Build 2'
              Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
              perfilImg='/among_us2.png'
              buildImg='./Build_2.png'
              criador='xxx_EnzoG4mer_xxx'
            />
            <CardBuild
              title='Build 3'
              Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
              perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
              buildImg='/Build_3.png'
              criador='Zezão extreme'
            />

          </div>
        </div>

        <Link to="/Guias">
          <div className="banner banner2">
            <h1 className="text-center text-light" id="GuiaBlocoCentral">Guias</h1>
          </div>
        </Link>

      </main>
      <Footer />
    </div>
  )
}

