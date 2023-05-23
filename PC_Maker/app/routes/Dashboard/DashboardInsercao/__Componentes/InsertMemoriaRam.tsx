import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link } from "@remix-run/react";

function DashboardInsercaoMemoriaRam() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();

    useEffect(() => {
        changeSelectValue('MemoriaRam')
    });

    async function handleCreateProdutoMemoriaRam(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
            nome: data.nome,
            fabricante: data.fabricante,
            modelo: data.modelo,
            categoria: "MemoriaRam",
            especificacoes: {
                "capacidade": data.capacidade, "velocidade": data.velocidade,
                "tecnologia": data.tecnologia, "voltagem": data.voltagem,
                "latencia": data.latencia, "notebook": data.notebook
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
                            <Link to="/Dashboard/DashboardComponents/ReadMemoriaRam">
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
                        <strong>Memória RAM</strong>
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={handleCreateProdutoMemoriaRam} className="form-horizontal">
                            
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" required/>
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante" placeholder="Fabricante" className="form-control" required/>
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" required/>
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col ">
                                    <label htmlFor="velocidade" className=" form-control-label">Capacidade</label>
                                    <input type="text" name="capacidade" placeholder="Capacidade" className="form-control" required/>
                                    <small className="help-block form-text">Capacidade da memória</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="velocidade" className=" form-control-label">Velocidade</label>
                                    <input type="text" name="velocidade" id="velocidade" placeholder="Velocidade" className="form-control" required/>
                                    <small className="help-block form-text">Frequência padrão em que opera</small>
                                </div>
                                <div className="col">
                                    <label className=" form-control-label">Tecnologia RAM</label>
                                    <div className="form-check">
                                        <div className="radio">
                                            <label htmlFor="radio1" className="form-check-label ">
                                                <input type="radio" id="tecnologia" name="tecnologia" value="DDR3" className="form-check-input" required/>DDR3
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label htmlFor="radio2" className="form-check-label ">
                                                <input type="radio" id="tecnologia" name="tecnologia" value="DDR4" className="form-check-input" required/>DDR4
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label htmlFor="radio2" className="form-check-label ">
                                                <input type="radio" id="tecnologia" name="tecnologia" value="DDR5" className="form-check-input" required/>DDR5
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <label htmlFor="voltagem" className=" form-control-label">Voltagem</label>
                                    <input type="text" name="voltagem" id="voltagem" placeholder="Voltagem" className="form-control" required/>
                                    <small className="help-block form-text">Voltagem padrão em que opera</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="latencia" className=" form-control-label">Latência</label>
                                    <input type="text" name="latencia" id="latencia" placeholder="Latência" className="form-control" required/>
                                    <small className="help-block form-text">Latência padrão em que opera</small>
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col col-md-9">
                                    <div className="form-check">
                                        <div className="checkbox">
                                            <label htmlFor="checkbox1" className="form-check-label ">
                                                <input type="checkbox" id="notebook" name="notebook" value="notebook" className="form-check-input check" />É para notebooks?
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <button className="au-btn au-btn-icon au-btn--purple au-btn--small">
                            <i className="zmdi zmdi-plus"></i>Adicionar</button>
                        <div className="rs-select2--dark rs-select2--sm rs-select2--dark2 ">
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default DashboardInsercaoMemoriaRam