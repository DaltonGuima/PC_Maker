import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link } from "@remix-run/react";

function DashboardInsercaoPlacaDeVideo() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();

    useEffect(() => {
        changeSelectValue('PlacaDeVideo')
    });

    async function handleCreateProdutoPlacaDeVideo(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
            nome: data.nome,
            fabricante: data.fabricante,
            modelo: data.modelo,
            categoria: "PlacaDeVideo",
            especificacoes: {
                "clock": data.clock, "memoria": data.memoria, "clmemoria": data.clmemoria,
                "barramento": data.barramento, "conector": data.conector
            }
        }).then((response) => {
            setResponse(response);
        }).catch(error => {
            setError(error)
        })

        setShow(true);
    }

    return (
        <div style={{ paddingTop: '7rem' }}>


            <Modal
                show={show}
                onHide={
                    () => {
                        setShow(false)
                        setError(undefined)
                        setResponse(undefined)
                    }}
                size="lg"
                aria-labelledby="message-modal"
                centered
                dialogClassName="border-dark"
            >
                <Modal.Header className="bg-dark border border-dark text-center" closeButton>
                    <Modal.Title id="message-modal" className="text-center">
                        Código: {error?.response?.status || response?.status}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark border border-dark">
                    <p>
                        {(error?.message || (response && "Operação concluída com sucesso"))
                            ||
                            <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>}
                    </p>
                </Modal.Body>
                <Modal.Footer className="bg-black border border-dark" >
                    <Button variant="secondary" onClick={handleClose}>
                        Voltar para inserção
                    </Button>
                    {!error &&
                        <>
                            <Link to={`/Dashboard/InsertLocalVenda/${response?.data.id}`}>
                                <Button variant="warning">
                                    Adicionar os locais de venda
                                </Button>
                            </Link>
                            <Link to="/Dashboard/DashboardComponents/ReadPlacaDeVideo">
                                <Button variant="success">
                                    Visualizar a tabela
                                </Button>
                            </Link>
                        </>
                    }
                </Modal.Footer>
            </Modal>


            <div className="col-lg-10 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Placa de Video</strong>
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={handleCreateProdutoPlacaDeVideo} className="form-horizontal">

                            
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" required/>
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante-processador" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante" id="fabricante" placeholder="Fabricante" className="form-control" required/>
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" required/>
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Clock</label>
                                    <input type="text" name="clock" id="clock" placeholder="Clock" className="form-control" required/>
                                    <small className="help-block form-text">Frequência da unidade de processamento da GPU</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Memória</label>
                                    <input type="text" name="memoria" id="memoria" placeholder="Memória" className="form-control" required/>
                                    <small className="help-block form-text">Capacidade de Memória da GPU</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Clock de Memória</label>
                                    <input type="text" name="clmemoria" id="clmemoria" placeholder="Clock de Memória" className="form-control" required/>
                                    <small className="help-block form-text">Frequência da Memória da GPU, ou a Largura de banda</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Conectores</label>
                                    <input type="text" name="conector" id="conector" placeholder="Conectores" className="form-control" required/>
                                    <small className="help-block form-text">Conectores de alimentação</small>
                                </div>
                            </div>

                            <div className="card-footer">
                        <button className="au-btn au-btn-icon au-btn--purple au-btn--small">
                            <i className="zmdi zmdi-plus"></i>Adicionar</button>
                        <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                        </div>
                    </div>
                        </form>
                    </div>
                    
                </div>
            </div>


        </div>
    )
}
export default DashboardInsercaoPlacaDeVideo;