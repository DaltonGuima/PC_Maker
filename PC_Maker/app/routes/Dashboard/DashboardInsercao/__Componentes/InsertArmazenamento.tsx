import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link } from "@remix-run/react";

function DashboardInsercaoArmazenamento() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();

    useEffect(() => {
        changeSelectValue('armazenamento')
    });

    async function handleCreateProdutoArmazenamento(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
            nome: data.nome,
            fabricante: data.fabricante,
            modelo: data.modelo,
            categoria: "Armazenamento",
            especificacoes: {
                "tipo": data.tipo, "capacidade": data.capacidade,
                "velEscritura": data.velEscrita, "velLeitura": data.velLeitura
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
                            <Link to="/Dashboard/DashboardComponents/ReadArmazenamento">
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
                        <strong>Armazenamento</strong>
                    </div>
                    <form onSubmit={handleCreateProdutoArmazenamento} className="form-horizontal">
                        <div className="card-body card-block">

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" required />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante" id="fabricante" placeholder="Fabricante" className="form-control" required />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" required />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="selectSm" className=" form-control-label">Tipo</label>
                                    <select name="tipo" id="tipo" className="form-control-sm form-control" required>
                                        <option selected value="" disabled>Selecione</option>
                                        <option value="HDD-SATA">HDD SATA</option>
                                        <option value="SSD-SATA">SSD SATA</option>
                                        <option value="SSD-M.2">SSD M.2</option>
                                        <option value="USB">USB</option>
                                    </select>
                                    <small className="help-block form-text">Tipo de dispositivo e conexão</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="capacidade" className=" form-control-label">Capacidade</label>
                                    <input type="text" name="capacidade" id="capacidade" placeholder="Capacidade" className="form-control" required />
                                    <small className="help-block form-text">Capacidade de armazenamento</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="velLeitura" className=" form-control-label">Velocidade de Leitura</label>
                                    <input type="text" name="velLeitura" id="velLeitura" placeholder="Velocidade de Leitura" className="form-control" required />
                                    <small className="help-block form-text">Velocidade de Leitura ou RPM</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="velEscrita" className=" form-control-label">Velocidade de Escrita</label>
                                    <input type="text" name="velEscrita" id="velEscrita" placeholder="Velocidade de Escrita" className="form-control" required />
                                    <small className="help-block form-text">Velocidade de Escrita</small>
                                </div>
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


    )
}
export default DashboardInsercaoArmazenamento