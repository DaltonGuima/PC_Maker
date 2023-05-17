import { useParams, Link } from "@remix-run/react";
import type { AxiosResponse, AxiosError } from "axios";
import axios from "axios";
import type { FormEvent } from "react";
import React, { useState, useEffect } from "react";
import { Modal, Spinner, Button } from "react-bootstrap";
import type { Produto } from "./LocaisVendas.$produtoId";


function DashboardInsercaoLocalVenda() {
    const params = useParams();
    const [produto, setProduto] = useState<Produto>()


    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/produtos/${params.produtoId}`)
            .catch(() => { return null })
            .then(response => setProduto(response?.data))

    }, [params.produtoId])

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)

        location.reload()
    };
    const [response, setResponse] = useState<AxiosResponse<any, any>>();
    const [error, setError] = useState<AxiosError<any, any>>();


    async function handleCreateLocalVenda(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        await axios.post("http://127.0.0.1:8080/api/v1/localvendas", {
            preco: Number(data.preco),
            vendedor: data.vendedor,
            linkProduto: data.linkProduto,
            produto: {
                id: Number(params.produtoId)
            }
        }).then((response) => {
            setResponse(response);
        }).catch(error => {
            setError(error)
            console.log(error)
        })

        setShow(true);
    }
    return (
        <div className="main-content">
            <div className="section__content section__content--p30">
                <div className="container-fluid">
                    <div className="row">
                        <h3 className="title-5 m-b-35 text-light table-h3">Insert do componente: {produto?.categoria}: {produto?.nome}</h3>
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

                                    <Link to={`/Dashboard/LocaisVendas/${params.produtoId}`}>
                                        <Button variant="success">
                                            Visualizar a tabela
                                        </Button>
                                    </Link>
                                </Modal.Footer>
                            </Modal>


                            <div className="col-lg-6 tabela-insercao">
                                <h1 className="text-danger">teste</h1>
                                <div className="card card-dash">
                                    <div className="card-header">
                                        <strong>Local Venda</strong>
                                    </div>
                                    <form onSubmit={handleCreateLocalVenda} action="post" className="form-horizontal">
                                        <div className="card-body card-block">

                                            <div className="row">
                                                <div className="col">
                                                    <label htmlFor="preco" className=" form-control-label">Preço</label>
                                                    <input type="number" step="0.01" name="preco" id="preco" placeholder="Preço" className="form-control" required />
                                                    <small className="help-block form-text">Preço do produto</small>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="vendedor" className=" form-control-label">Vendedor</label>
                                                    <input type="text" name="vendedor" id="vendedor" placeholder="Nome" className="form-control" required />
                                                    <small className="help-block form-text text-muted">Nome do Site</small>
                                                </div>
                                                <div className="col">
                                                    <label htmlFor="linkProduto" className=" form-control-label">Link Produto</label>
                                                    <input type="url" name="linkProduto" id="linkProduto" placeholder="Link Produto" className="form-control" required />
                                                    <small className="help-block form-text">Link do Site</small>
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
                    </div>
                </div>
            </div>
        </div>
    )
}
export default DashboardInsercaoLocalVenda