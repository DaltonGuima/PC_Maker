import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link } from "@remix-run/react";

function DashboardInsercaoProcessador() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();

    useEffect(() => {
        changeSelectValue('Processador')
    });

    async function handleCreateProdutoProcessador(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
            nome: data.nome,
            fabricante: data.fabricante,
            modelo: data.modelo,
            categoria: "Processador",
            especificacoes: {
                "soquete": data.soquete, "tdp": data.tdp, "nNucleos": data.nNucleos,
                "nThreads": data.nThreads, "frequencia": data.frequencia, "freBoost": data.freBoost,
                "overClock": data.overClock, "graficoIntegrado": data.graficoIntegrado, "tipoMemoria": data.tipoMemoria
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
                            <Link to="/Dashboard/DashboardComponents/ReadProcessador">
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
                        <strong>Processador</strong>
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={handleCreateProdutoProcessador} className="form-horizontal">

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" required />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label className=" form-control-label">Fabricante</label>
                                    <div className="form-check">
                                        <div className="radio">
                                            <label htmlFor="radio1" className="form-check-label">
                                                <input type="radio" id="fabricante" name="fabricante" value="intel" className="form-check-input" required />Intel
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label htmlFor="radio2" className="form-check-label">
                                                <input type="radio" id="fabricante" name="fabricante" value="amd" className="form-check-input" required />AMD
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Tipo de Memória</label>
                                    <div className="col col">
                                        <div className="form-check">
                                            <div className="radio">
                                                <label htmlFor="radio1" className="form-check-label ">
                                                    <input type="radio" id="tipoMemoria" name="tipoMemoria" value="DDR3" className="form-check-input" required />DDR3
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label htmlFor="radio2" className="form-check-label ">
                                                    <input type="radio" id="tipoMemoria" name="tipoMemoria" value="DDR4" className="form-check-input" required />DDR4
                                                </label>
                                            </div>
                                            <div className="radio">
                                                <label htmlFor="radio2" className="form-check-label ">
                                                    <input type="radio" id="tipoMemoria" name="tipoMemoria" value="DDR5" className="form-check-input" required />DDR5
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" required />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Soquete</label>
                                    <input type="text" name="soquete" id="soquete" placeholder="Soquete" className="form-control" required />
                                    <small className="help-block form-text text-muted">Padrão de conexão de soquete</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">TDP</label>
                                    <input type="text" name="tdp" id="tdp" placeholder="TDP" className="form-control" required />
                                    <small className="help-block form-text text-muted">Quantidade máxima de energia dissipada em calor, em Watts (W)</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Nº de Núcleos</label>
                                    <input type="text" name="nNucleos" id="nNucleos" placeholder=" Nº de Núcleos" className="form-control" required />
                                    <small className="help-block form-text text-muted">Quantidade de núcleos físicos</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Nº de Threads</label>
                                    <input type="text" name="nThreads" id="nThreads" placeholder="Nº de Threads" className="form-control" required />
                                    <small className="help-block form-text text-muted">Quantidade de núcleos lógicos</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Frequência</label>
                                    <input type="text" name="frequencia" id="frequencia" placeholder="Frequência" className="form-control" required />
                                    <small className="help-block form-text text-muted">Frequência base em megahertz (MHz)</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="text-input" className=" form-control-label">Frequência Máxima com Boost</label>
                                    <input type="text" name="freBoost" id="freBoost" placeholder="Frequência Máxima com Boost" className="form-control" required />
                                    <small className="help-block form-text text-muted">Frequência máxima com boost em megahertz (MHz)</small>
                                </div>
                            </div>
                            <div className="col">
                                <br />
                                <label htmlFor="checkbox1" className="form-check-label">
                                    <input type="checkbox" name="overClock" id="overClock" value="overclock" className="form-check-input check" /> Desbloqueado para overclock
                                </label>
                            </div>

                            <div className="card-footer">
                                <button className="au-btn au-btn-icon au-btn--purple au-btn--small" type="submit">
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
export default DashboardInsercaoProcessador