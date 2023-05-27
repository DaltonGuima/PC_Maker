import { useHookstate } from "@hookstate/core";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import type { FormEvent } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import build from '../../styles/build.css';
import builder_PC from '../../styles/builder_PC.css';
import { getUser } from "~/utils/session.server";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useHydrated } from "remix-utils";
import { Link, useLoaderData, useNavigate, useParams } from "@remix-run/react";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import type { ItemBuild } from "~/components/TrBuilder";
import TrBuilder from "~/components/TrBuilder";
import type { LocaisVendas } from "~/Interface/ComponenteInterface";
import { categoriaProduto } from "../Search/$searchType.$searchContent";

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

export interface ItemBuildI {
  quantidade: number,
  build: {
    id: number
  },
  localVenda: LocaisVendas
}

export interface Build {
  id: number,
  nome: string,
  descricao: string,
  usuario: {
    id: number
  },
  itens: ItemBuildI[]

}


function Builder() {
  const data = useLoaderData<typeof loader>();

  const [response, setResponse] = useState<AxiosResponse<any, any>>();
  const [error, setError] = useState<AxiosError<any, any>>();
  const changeTheme = useHookstate(themePage);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Gabinete
  const [subTotalGabinete, setsubTotalGabinete] = useState(0)
  const [qtdItensGabinete, setqtdItensGabinete] = useState(0)
  // FonteDeAlimentacao
  const [subTotalFonteDeAlimentacao, setsubTotalFonteDeAlimentacao] = useState(0)
  const [qtdItensFonteDeAlimentacao, setqtdItensFonteDeAlimentacao] = useState(0)
  // PlacaDeVideo
  const [subTotalPlacaDeVideo, setsubTotalPlacaDeVideo] = useState(0)
  const [qtdItensPlacaDeVideo, setqtdItensPlacaDeVideo] = useState(0)
  // Armazenamento
  const [subTotalArmazenamento, setsubTotalArmazenamento] = useState(0)
  const [qtdItensArmazenamento, setqtdItensArmazenamento] = useState(0)
  // Processador
  const [subTotalProcessador, setsubTotalProcessador] = useState(0)
  const [qtdItensProcessador, setqtdItensProcessador] = useState(0)
  // PlacaMae
  const [subTotalMemoriaRam, setsubTotalMemoriaRam] = useState(0)
  const [qtdItensMemoriaRam, setqtdItensMemoriaRam] = useState(0)
  // PlacaMae
  const [subTotalPlacaMae, setsubTotalPlacaMae] = useState(0)
  const [qtdItensPlacaMae, setqtdItensPlacaMae] = useState(0)


  function getIdLocalVenda(categoria: string) {
    if (localStorage.getItem(`edit${categoria}`) && params.typeRequest != "new")
      return Number(localStorage.getItem(`edit${categoria}`))
    else if (localStorage.getItem(categoria) && params.typeRequest == "new")
      return Number(localStorage.getItem(categoria))
    else
      return 0
  }

  const hydrated = useHydrated();
  let itensBuilds: ItemBuild[] = []
  if (hydrated)
    itensBuilds = [
      {
        idLocalVenda: getIdLocalVenda("Gabinete"),
        preco: subTotalGabinete,
        qtdItem: qtdItensGabinete
      },
      {
        idLocalVenda: getIdLocalVenda("Fonte de Alimentação"),
        preco: subTotalFonteDeAlimentacao,
        qtdItem: qtdItensFonteDeAlimentacao
      },
      {
        idLocalVenda: getIdLocalVenda("Placa de Vídeo"),
        preco: subTotalPlacaDeVideo,
        qtdItem: qtdItensPlacaDeVideo
      },
      {
        idLocalVenda: getIdLocalVenda("Armazenamento"),
        preco: subTotalArmazenamento,
        qtdItem: qtdItensArmazenamento
      },
      {
        idLocalVenda: getIdLocalVenda("Processador"),
        preco: subTotalProcessador,
        qtdItem: qtdItensProcessador
      },
      {
        idLocalVenda: getIdLocalVenda("Memória RAM"),
        preco: subTotalMemoriaRam,
        qtdItem: qtdItensMemoriaRam
      },
      {
        idLocalVenda: getIdLocalVenda("Placa-Mãe"),
        preco: subTotalPlacaMae,
        qtdItem: qtdItensPlacaMae
      }

    ]

  const [build, setBuild] = useState<Build>()

  useEffect(() => {
    if (params.typeRequest != "new") {
      axios(`http://127.0.0.1:8080/api/v1/builds/${params.typeRequest}`)
        .catch(error => console.log(error))
        .then((response) => {
          if (response?.data.usuario.id != data.user?.id) {
            throw new Error("Acesso proibido")
          } else {
            setBuild(response?.data)
          }
        })
    }
  }, [data.user?.id, params.typeRequest])



  async function postItens(
    qtd: number | undefined,
    buildId: number | undefined,
    localVendaId: number | undefined
  ) {
    await axios.post("http://127.0.0.1:8080/api/v1/itensbuilds", {
      quantidade: qtd,
      build: {
        id: buildId
      },
      localVenda: {
        id: localVendaId
      }
    }).catch(error => console.log(error))
  }


  async function handleBuild(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)
    const dataForm = Object.fromEntries(formData)

    if (params.typeRequest == "new") {
      await axios.post("http://127.0.0.1:8080/api/v1/builds", {
        nome: dataForm.nome,
        descricao: dataForm.desc,
        usuario: {
          id: data.user?.id
        }
      }).then((response) => {
        setResponse(response);
        handlItens(response.data.id)
      }).catch(error => {
        setError(error)
        console.log(error)
      })
    }


  }
  function handlItens(id: number) {
    itensBuilds.forEach((item) => {

      if (item.idLocalVenda != 0 && item.idLocalVenda != null) {
        console.log(item.idLocalVenda)
        postItens(item.qtdItem, id, item.idLocalVenda)
      }
    }

    )
    handleClose()
    return navigate(`/Build/Builder/${id}`)
  }


  function teste(categoria: string) {
    const localVendaId = (build?.itens.find((item) => item.localVenda.produto.categoria == categoria)?.localVenda.id)

    if (hydrated && localVendaId && !localStorage.getItem(`edit${categoria}`)) {
      localStorage.setItem(`edit${categoria}`, localVendaId.toString())
    }

    return localVendaId
  }

  function restart() {
    if (hydrated) {
      if (params.typeRequest != "new") {
        build?.itens.forEach(item => {
          if (item.localVenda.produto.categoria) {
            localStorage.removeItem(`edit${item.localVenda.produto.categoria}`)
          }
        })
      }
      else {
        categoriaProduto.forEach(categoria => localStorage.removeItem(categoria))
      }
      location.reload()
    }
  }


  return (
    <div data-theme={changeTheme.get()}>
      <Header />
      <main id="conteudo texto">
        <div className="headline text text-white">
          <h2 className="text-center py-3">{params.typeRequest == "new" ? "Escolha suas peças" : `Build : ${build?.nome}`}</h2>
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
              <Link to="/Build/Builder/new" onClick={restart}>
                <button className="btn-menu-line menu-info-medio">
                  <i className="fa-sharp fa-solid fa-plus mx-1"></i>Novo
                </button>
              </Link>
            </div>
            <div className="col-sm-2 py-3 ">
              <button className="btn-menu-line menu-info-medio" onClick={restart}>
                <i className="fa-solid fa-arrow-rotate-left"></i> Reiniciar
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


        <Modal
          show={show}
          onHide={handleClose}
          data-theme={changeTheme.get()}
          className="modal-lg"
          centered
        >
          <Modal.Header closeButton className="modal-exp-header">
            <Modal.Title>Salvar Build</Modal.Title>
          </Modal.Header>
          <form action="post" onSubmit={handleBuild}>
            <Modal.Body>
              {data.user ?
                <>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Nome</label>
                    <textarea className="form-control nomeBuild" id="exampleFormControlTextarea1" name="nome" rows={1} required></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Descrição</label>
                    <textarea className="form-control descBuild" id="exampleFormControlTextarea1" name="desc" rows={3} required></textarea>
                  </div>
                </>
                :
                <h4>Precisa estar logado para salvar a Build</h4>
              }
            </Modal.Body>
            <Modal.Footer className="modal-exp-footer">
              {data.user ?
                <Button type="submit" variant="primary" className="btn-modal-primary">
                  Salvar
                </Button>
                :
                <Link to="/login">
                  <Button variant="secondary" className="btn-modal-primary" onClick={handleClose}>
                    Fazer Login
                  </Button>
                </Link>
              }
            </Modal.Footer>
          </form>
        </Modal>
        {/* Teste */}
        <div className="container col-md-10 mt-2 col">
          <table className="table table-borderless text-light ">
            <thead>
              <tr className="mt-2 cont">
                <th className="col-md-6">Componente</th>
                <th className="col-md-2">Preço</th>
                <th className="col-md-2">Quantidade</th>
                <th className="col-md-1">Origem</th>
                <th className="col-md-1"></th>
              </tr>
            </thead>
            <tbody>

              <TrBuilder
                idLocalVenda={teste("Placa-Mãe")}
                categoryProduct="Placa-Mãe"
                SetSubtotal={setsubTotalPlacaMae}
                SetqtdItem={setqtdItensPlacaMae}
              />

              <TrBuilder
                idLocalVenda={teste("Memória RAM")}
                categoryProduct="Memória RAM"
                SetSubtotal={setsubTotalMemoriaRam}
                SetqtdItem={setqtdItensMemoriaRam}
              />

              <TrBuilder
                idLocalVenda={teste("Processador")}
                categoryProduct="Processador"
                SetSubtotal={setsubTotalProcessador}
                SetqtdItem={setqtdItensProcessador}
              />

              <TrBuilder
                idLocalVenda={teste("Armazenamento")}

                categoryProduct="Armazenamento"
                SetSubtotal={setsubTotalArmazenamento}
                SetqtdItem={setqtdItensArmazenamento}
              />

              <TrBuilder
                idLocalVenda={teste("Placa de Vídeo")}
                categoryProduct="Placa de Vídeo"
                SetSubtotal={setsubTotalPlacaDeVideo}
                SetqtdItem={setqtdItensPlacaDeVideo}
              />

              <TrBuilder
                idLocalVenda={
                  teste("Gabinete")
                }
                categoryProduct="Gabinete"
                SetSubtotal={setsubTotalGabinete}
                SetqtdItem={setqtdItensGabinete}
              />

              <TrBuilder
                idLocalVenda={teste("Fonte de Alimentação")}
                categoryProduct="Fonte de Alimentação"
                SetSubtotal={setsubTotalFonteDeAlimentacao}
                SetqtdItem={setqtdItensFonteDeAlimentacao}
              />


            </tbody>
          </table>
        </div>

        <div className="container-fluid text-light text-right TextAfterTable" >
          <div className="row">
            <div className="col">
              {/* <h3>Potência Estimada: <small className="text-secondary">315W</small></h3> */}
              <h3 className="totalBuilder">Total: <small className="valorTotalBuilder tes">R$
                {
                  itensBuilds.reduce((accumulator, object) => {
                    return accumulator + object.preco;
                  }, 0)
                }
              </small></h3>
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