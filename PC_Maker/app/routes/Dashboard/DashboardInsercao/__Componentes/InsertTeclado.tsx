import type { FormEvent } from "react";
import { useState, useEffect } from "react";
/* import { useEffect } from "react"; */
import { changeSelectValue } from "~/script/changeSelectValue";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link } from "@remix-run/react";

function DashboardInsercaoTeclado() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();

    useEffect(() => {
        changeSelectValue('Teclado')
    });

    async function handleCreateProdutoTeclado(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)

        setShow(true);

        await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
            nome: data.nome,
            fabricante: data.fabricante,
            modelo: data.modelo,
            preco: Number(data.preco),
            vendedor: data.vendedor,
            linkProduto: data.linkProduto,
            categoria: "Teclado",
            especificacoes: { "tamanho": data.tamanho, "tipo": data.tipo, "fio": data.fio }
        }).then((response) => {
            setResponse(response);
        }).catch(error => {
            setError(error)
        })


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

                    <Link to="/Dashboard/DashboardComponents/ReadVentoinha">
                        <Button variant="success">
                            Visualizar a tabela
                        </Button>
                    </Link>
                </Modal.Footer>
            </Modal>

            <div className="col-lg-6 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Teclados</strong>
                    </div>
                    <form onSubmit={handleCreateProdutoTeclado} className="form-horizontal">
                        <div className="card-body card-block">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome da empresa que vende o produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante" className=" form-control-label">Fabricante</label>
                                    <input type="text" name="fabricante" id="fabricante" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome do fabricante</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="modelo" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="preco" className=" form-control-label">Preço</label>
                                    <input type="text" name="preco" id="preco" placeholder="Preço" className="form-control" />
                                    <small className="help-block form-text">Preço do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="vendedor" className=" form-control-label">Vendedor</label>
                                    <input type="text" name="vendedor" id="vendedor" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col ">
                                    <label htmlFor="linkProduto" className=" form-control-label">Link Produto</label>
                                    <input type="text" name="linkProduto" id="linkProduto" placeholder="Fabricante" className="form-control" />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="tamanho" className=" form-control-label">Tamanho</label>
                                    <select name="tamanho" id="tamanho" className="form-control-sm form-control" defaultValue={''}>
                                        <option value="" disabled>Selecione</option>
                                        <option value="battleship">Battle ship</option>
                                        <option value="fullsize">Full size</option>
                                        <option value="1800">1800</option>
                                        <option value="90">96% / 90%</option>
                                        <option value="80">Tenkeyless (TKL/80%)</option>
                                        <option value="75">75%</option>
                                        <option value="65">65%</option>
                                        <option value="60">60%</option>
                                        <option value="50">50%</option>
                                        <option value="40">40%</option>
                                    </select>
                                    <small className="help-block form-text">Tamanho e formato do teclado</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="tipo" className=" form-control-label">Tipo</label>
                                    <select name="tipo" id="tipo" className="form-control-sm form-control" defaultValue={''}>
                                        <option value="" disabled className='text-secondary'>Selecione</option>
                                        <option value="membrana">Membrana</option>
                                        <option value="mecanico">Mecânico</option>
                                        <option value="hibrido">Híbrido</option>
                                    </select>
                                    <small className="help-block form-text">Tipo de mecanismo de ação</small>
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col">
                                    <div className="form-check">
                                        <div className="checkbox">
                                            <label htmlFor="fio" className="form-check-label ">
                                                <input type="fio" id="fio" name="checkbox1" value="semfio" className="form-check-input check" />Sem fio
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="au-btn au-btn-icon au-btn--purple au-btn--small">
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
export default DashboardInsercaoTeclado