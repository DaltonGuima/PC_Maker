
import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link } from "@remix-run/react";

function DashboardInsercaoPlacaMae() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();

    useEffect(() => {
        changeSelectValue('PlacaMae')
    });

    async function handleCreateProdutoPlacaMae(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
            nome: data.nome,
            fabricante: data.fabricante,
            modelo: data.modelo,
            categoria: "PlacaMae",
            especificacoes: {
                "chipset": data.chipset, "soquete": data.soquete, "fatordeforma": data.fatordeforma,
                "tecnologiaram": data.tecnologiaram, "tdp": data.tdp, "tipo": data.tipo, "slotsram": data.slotsram,
                "cmaxram": data.cmaxram, "graficoi": data.graficoi, "slotsm2": data.slotsm2,
                "slotspciex16": data.slotspciex16, "slotspci": data.slotspci
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
                            <Link to="/Dashboard/DashboardComponents/ReadPlacaMae">
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
                        <strong>Placa-mãe</strong>
                    </div>
                    <div className="card-body card-block">
                        <form onSubmit={handleCreateProdutoPlacaMae} className="form-horizontal">

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome-produto" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" required />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante-processador" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante" id="fabricante" placeholder="Fabricante" className="form-control" required />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="modelo-input" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" required />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Chipset</label>
                                    <input type="text" name="chipset" id="chipset" placeholder="Chipset" className="form-control" required />
                                    <small className="help-block form-text">Chipset</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Soquete</label>
                                    <input type="text" name="soquete" id="soquete" placeholder="Soquete" className="form-control" required />
                                    <small className="help-block form-text">Soquete</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="selectSm" className=" form-control-label">Fator de forma</label>
                                    <select name="fatordeforma" id="fatordeforma" className="form-control-sm form-control" defaultValue={''} required>
                                        <option value="" disabled className='text-secondary'>Selecione</option>
                                        <option value="mATX">mATX</option>
                                        <option value="ATX">ATX</option>
                                        <option value="EATX">EATX</option>
                                        <option value="Mini-ITX">Mini-ITX</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">TDP</label>
                                    <input type="text" name="tdp" id="tdp" placeholder="TDP" className="form-control" required />
                                    <small className="help-block form-text">TDP do soquete</small>
                                </div>
                                <div className="col">
                                    <label className=" form-control-label">Tecnologia RAM</label>
                                    <div className="form-check">
                                        <div className="radio">
                                            <label htmlFor="radio1" className="form-check-label ">
                                                <input type="radio" id="tecnologiaram" name="tecnologiaram" value="DDR3" className="form-check-input" />DDR3
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label htmlFor="radio2" className="form-check-label ">
                                                <input type="radio" id="radio2" name="radios" value="DDR4" className="form-check-input" />DDR4
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label htmlFor="radio2" className="form-check-label ">
                                                <input type="radio" id="radio3" name="radios" value="DDR5" className="form-check-input" />DDR5
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots RAM</label>
                                    <input type="email" name="email-input" placeholder="Slots RAM" className="form-control" />
                                    <small className="help-block form-text">Quantidadede Slots RAM</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Capacidade Máxima de RAM</label>
                                    <input type="email" name="email-input" placeholder="Capacidade Máxima de RAM" className="form-control" />
                                    <small className="help-block form-text">Capacidade Máxima de RAM</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Gráfico Integrado</label>
                                    <input type="email" name="email-input" placeholder="Gráfico Integrado" className="form-control" />
                                    <small className="help-block form-text">Modelo do gráfico integrado</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots M.2</label>
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots M.2" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots M.2</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots PCI Express x16</label>
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots PCI Express x16" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots PCI Express x16</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="email-input" className=" form-control-label">Slots PCI</label>
                                    <input type="email" name="email-input" placeholder="Quantidade de Slots PCI" className="form-control" />
                                    <small className="help-block form-text">Quantidade de Slots PCI</small>
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
export default DashboardInsercaoPlacaMae;