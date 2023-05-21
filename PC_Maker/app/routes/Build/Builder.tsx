import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';

import build from '../../styles/build.css';
import builder_PC from '../../styles/builder_PC.css';
import { getUser } from "~/utils/session.server";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useHydrated } from "remix-utils";
import { Link } from "@remix-run/react";
import { Produto } from "../Dashboard/__localVenda/LocaisVendas.$produtoId";
import axios from "axios";
import { LocaisVendasProps } from "~/components/TableRead/Datas/LocalVendas";
import { LocaisVendas } from "~/Interface/ComponenteInterface";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: build },
    { rel: "stylesheet", href: builder_PC },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Builder"
});

export const loader = async ({ request }: LoaderArgs) => {

  const user = await getUser(request);

  return json({ user })
};


function Builder() {
  // const [teste, setTeste] = useLocalStorage('teste', ['a', 'b']);
  // console.log(formData.getAll("modelo"))

  const changeTheme = useHookstate(themePage);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const hydrated = useHydrated();

  function TrBuilder(props: { categoryProduct: string }) {
    const [localVenda, setLocalVenda] = useState<LocaisVendas>()


    useEffect(() => {
      if (localStorage.getItem(props.categoryProduct))
        axios.get(`http://127.0.0.1:8080/api/v1/localvendas/${localStorage.getItem(props.categoryProduct)}`)
          .catch(() => { return null })
          .then(response => setLocalVenda(response?.data))
    }, [props.categoryProduct])

    if (hydrated && localStorage.getItem(props.categoryProduct)) {
      return (
        <tr className="mt-2">
          <td>
            <div className="d-sm-inline-flex p-2">
              <button data-bs-toggle="modal" data-bs-target="#ModalFoto" className="btnBuilderImg">
                <p className="d-block d-md-none"><i className="fa fa-image cont"></i> Ver Imagem</p>
                <img className="peca" src="https://via.placeholder.com/50x50/" alt="Foto componente" />
              </button>
            </div>
            <div className="d-sm-inline-flex p-2 text-white">
              <span className="DescricaoProduto p-2 cont">
                <p>{localVenda?.produto.nome}</p>
              </span>
            </div>
          </td>
          {/* Vou ter que alterar aqui dp */}
          <td className="text-success p-sm-2 fw-bold" >R$ {localVenda?.preco}</td>
          <td><input type="number" name="qtdItem" id="qtdItem" className="inputQtdItem" defaultValue={1} /></td>
          <td className="d-flex justify-content-center p-sm-2">
            <p className="d-block cont">{localVenda?.vendedor}</p>
          </td>
        </tr>
      )
    }
    else
      return (
        <tr className="mt-1">
          <td>
            <Link to={`/Search/CategoriaProduto/${props.categoryProduct}`}>
              <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Gabinete</button>
            </Link>
          </td>
        </tr>
      )
  }

  return (
    <div data-theme={changeTheme.get()}>
      <Header />
      <main id="conteudo texto">
        <div className="headline text text-white">
          <h2 className="text-center py-3">Escolha suas peças</h2>
        </div>

        <div className="menu-line col-9 container-fluid my-3 rounded text-white">
          <div className="row">
            <div className="col-6 text-decoration-underline first-column-build py-3 p-3 menu-info-medio">
              <i className="fa-solid fa-link mx-1"></i>
              https://pcmaker.com.br/lista/dpGwc
            </div>

            <div className="col-sm-2 py-3">
              <button className="btn-menu-line menu-info-medio" onClick={handleShow}>
                <i className="fa-solid fa-floppy-disk mx-1" ></i>Salvar
              </button>
            </div>
            <div className="col-sm-2 py-3">
              <button className="btn-menu-line menu-info-medio">
                <i className="fa-sharp fa-solid fa-plus mx-1"></i>Novo
              </button>
            </div>
            <div className="col-sm-2 py-3 ">
              <button className="btn-menu-line menu-info-medio">
                <i className="fa-solid fa-pencil mx-1" aria-hidden="true"></i>Histórico
              </button>
            </div>
          </div>
          <div className="row compWattInferior tes">
            <div className="col-6 first-column-build w-75 p-3 py-3 menu-info-medio barra-compatibilidade">
              <i className="fa-solid fa-check mx-1"></i>
              Compatibilidade: Nenhum problema foi encontrado
            </div>
            <div className="col-sm-2 py-3 barra-potencia w-25">
              <i className="fw-bold">Potência Estimada: 315W</i>
            </div>
          </div>
        </div>


        <form action="post">
          <Modal show={show} onHide={handleClose} data-theme={changeTheme.get()} modal-dialog-centered className="modal-lg" centered>
            <Modal.Header closeButton className="modal-exp-header">
              <Modal.Title>Salvar Build</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Nome</label>
                <textarea className="form-control nomeBuild" id="exampleFormControlTextarea1" rows={1} ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Descrição</label>
                <textarea className="form-control descBuild" id="exampleFormControlTextarea1" rows={3} ></textarea>
              </div>
            </Modal.Body>
            <Modal.Footer className="modal-exp-footer">
              <Button href="" variant="primary" className="btn-modal-primary" onClick={handleClose}>
                Salvar
              </Button>
            </Modal.Footer>
          </Modal>
          {/* Teste */}
          <div className="container col-md-10 mt-2 col">
            <table className="table table-borderless text-light ">
              <thead>
                <tr className="mt-2 cont">
                  <th className="col-md-8">Componente</th>
                  <th className="col-md-2">Preço</th>
                  <th className="col-md-2">Quantidade</th>
                  <th className="col-md-1">Origem</th>
                </tr>
              </thead>
              <tbody>
                {/* <TableBuilder
                  img="https://via.placeholder.com/50x50/"
                  nome="Teste"
                  preco="R$ 100,00"
                /> */}

                <tr className="mt-1">
                  <td>
                    <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i> Escolher Placa-Mãe</button>
                  </td>
                </tr>
                <tr className="mt-1">
                  <td>
                    <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Memória RAM</button>
                  </td>
                </tr>
                <tr className="mt-1">
                  <td>
                    <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Armazenamento</button>
                  </td>
                </tr>
                <tr className="mt-1">
                  <td>
                    <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Placa de Vídeo</button>
                  </td>
                </tr>
                {/* gabinete era para estar aqui */}

                <TrBuilder
                  categoryProduct="Gabinete"
                />

                <tr className="mt-1">
                  <td>
                    <button className="btn-builder mx-2 p-2 px-4 rounded"><i className="fa-sharp fa-solid fa-plus mx-1"></i>Escolher Fonte de Alimentação</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </form>
        <div className="container-fluid text-light text-right TextAfterTable" >
          <div className="row">
            <div className="col">
              {/* <h3>Potência Estimada: <small className="text-secondary">315W</small></h3> */}
              <h3 className="totalBuilder">Total: <small className="valorTotalBuilder tes">R$ 4137,21</small></h3>
            </div>
          </div>
        </div>

        <div className="container col-md-10 nvlComp">


          <div className="row ">
            <div className="bottonB">
              <div className="my-2">

                <div className="row">
                  <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-4">Observação I:</div>
                  <p className="obsComp col my-2">Um adaptador</p>
                </div>
              </div>
              <div className="my-2">

                <div className="row">
                  <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-4">Observação II:</div>
                  <p className="obsComp col my-2">Chipset</p>
                </div>

              </div>
            </div>
          </div>

        </div>

      </main >
      <Footer />
    </div >
  );
}

export default Builder;