import type { FormEvent } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { changeSelectValue } from "../../../script/changeSelectValue";
import axios from "axios";
import { Button, Modal } from "react-bootstrap";

function DashboardInsercaoVentoinha() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        changeSelectValue('Ventoinha')
    });


    //Falta mensagem de que salvou  
    async function handleCreateProdutoVentoinha(event: FormEvent) {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)


        try {
            await axios.post("http://127.0.0.1:8080/api/v1/produtos", {
                nome: data.nome,
                fabricante: data.fabricante,
                modelo: data.modelo,
                preco: Number(data.preco),
                vendedor: data.vendedor,
                linkProduto: data.linkProduto,
                categoria: "Ventoinha",
                especificacoes: { "tamanho": data.tamanho }
            }).then(() => setShow(true));
        } catch (error) {
            setShow(true)
        }

    }
    return (
        <div style={{ paddingTop: '7rem' }}>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="lg"
                aria-labelledby="message-modal"
                centered
                dialogClassName="border-dark"
            >
                <Modal.Header className="bg-dark border border-dark text-center" closeButton>
                    <Modal.Title id="message-modal" className="text-center">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="bg-dark border border-dark">
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
                    </p>
                </Modal.Body>
                <Modal.Footer className="bg-black border border-dark" >
                    <Button variant="secondary" onClick={handleClose}>
                        Adicionar +
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Visualizar na tabela
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className="col-lg-6 tabela-insercao">
                <div className="card card-dash">
                    <div className="card-header">
                        <strong>Ventoinha</strong>
                    </div>
                    <form onSubmit={handleCreateProdutoVentoinha} className="form-horizontal">
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
                                <div className="col ">
                                    <label htmlFor="modelo" className=" form-control-label">Modelo</label>
                                    <input type="text" name="modelo" id="modelo" placeholder="Modelo" className="form-control" />
                                    <small className="help-block form-text">Nome técnico do produto</small>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="preco" className=" form-control-label">Preço</label>
                                    <input type="number" name="preco" id="preco" placeholder="Preço" className="form-control" />
                                    <small className="help-block form-text">Preço do produto</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="vendedor" className=" form-control-label">Vendedor</label>
                                    <input type="text" name="vendedor" id="vendedor" placeholder="Nome" className="form-control" />
                                    <small className="help-block form-text text-muted">Nome utilizado para vendas</small>
                                </div>
                                <div className="col">
                                    <label htmlFor="linkProduto" className=" form-control-label">Link Produto</label>
                                    <input type="url" name="linkProduto" id="linkProduto" placeholder="Link Produto" className="form-control" />
                                    <small className="help-block form-text">Nome do fabricante</small>
                                </div>

                                <div className="col">
                                    <label htmlFor="tamanho" className=" form-control-label">Tamanho</label>
                                    <select name="tamanho" id="tamanho" className="form-control-sm form-control" defaultValue={""}>
                                        <option selected disabled>Selecione</option>
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