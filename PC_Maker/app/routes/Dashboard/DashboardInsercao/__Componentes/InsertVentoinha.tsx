import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { changeSelectValue } from "~/script/changeSelectValue";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import { Button, Modal, Spinner } from "react-bootstrap";
import { Link } from "@remix-run/react";

function DashboardInsercaoVentoinha() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();

    useEffect(() => {
        changeSelectValue('Ventoinha')
    });


    //Falta mensagem de que salvou  
    async function handleCreateProdutoVentoinha(event: FormEvent) {
        event.preventDefault();

        //se quiser bota um loader aqui

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
            nome: data.nome,
            fabricante: data.fabricante,
            modelo: data.modelo,
            categoria: "Ventoinha",
            especificacoes: { "tamanho": data.tamanho }
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
                            <Link to="/Dashboard/DashboardComponents/ReadVentoinha">
                                <Button variant="success">
                                    Visualizar a tabela
                                </Button>
                            </Link>
                        </>
                    }
                </Modal.Footer>
            </Modal>

            <div className="col-lg-6 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Ventoinha</strong>
                    </div>
                    <form onSubmit={handleCreateProdutoVentoinha} action="post" className="form-horizontal">
                        <div className="card-body card-block">

                            <div className="row">
                                <div className="col">
                                    <label htmlFor="nome" className=" form-control-label">Nome</label>
                                    <input type="text" name="nome" id="nome" placeholder="Nome" className="form-control" required />
                                    <small className="help-block form-text">Nome da empresa que vende o produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="fabricante" className="form-control-label">Fabricante</label>
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
                                    <label htmlFor="tamanho" className=" form-control-label">Tamanho</label>
                                    <select name="tamanho" id="tamanho" className="form-control-sm form-control" defaultValue={""} required>
                                        <option selected value="" disabled>Selecione</option>
                                        <option value="80mm">80mm</option>
                                        <option value="92mm">92mm</option>
                                        <option value="120mm">120mm</option>
                                        <option value="140mm">140mm</option>
                                        <option value="180mm">180mm</option>
                                        <option value="200mm">200mm</option>
                                    </select>
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
        </div >
    )
}
export default DashboardInsercaoVentoinha