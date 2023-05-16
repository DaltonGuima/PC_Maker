import { useHookstate } from "@hookstate/core";
import { themePage } from "~/script/changeTheme";
import { Input } from '../components/Form/Input'
import { SubmitForm } from '../components/Form/SubmitForm'
import cadastro from '../styles/cadastro.css'
import login from '../styles/login.css'
import axios from 'axios';
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { FormEvent } from "react";
import { handleDate } from "~/script/handleDate";


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: cadastro },
    { rel: "stylesheet", href: login }
  ];
};

export const meta: MetaFunction = () => ({
  title: "Cadastro"
});

function Cadastro() {

  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  async function handleCreateUsuario(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data)
    try {
      await axios.post("http://127.0.0.1:8080/api/v1/usuarios", {
        nome: data.nome,
        dataNascimento: handleDate(data.dataNascimento.toString()),
        email: data.email,
        senha: data.senha,
      }).then(response => console.log(response))
    } catch (error) {
      console.log(error)
    }
  }


  return (

    <div className="login-page">
      <section className='vh-100'>
        <div className="container py-2 h-100">
          <div className="row align-items-center h-100">
            <div className=" d-flex justify-content-center">
              <div className="card bg-dark text-light col-md-6">{/* <!-- Aqui arrendoda --> */}
                <div className="row d-flex justify-content-center" >
                  <div className="justify-content-center">
                    <div className="card-body p-2 p-md-4 text-light d-flex justify-content-center">

                      <form onSubmit={handleCreateUsuario} className="form-horizontal" action="post">
                        <div className="d-flex justify-content-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0 minorText">Cadastro</span>
                        </div>

                        <div className="d-flex align-items-center mb-3 pt-3">
                          <span className="h5 fw-bold mb-0"><i className="fa fa-person minorText" aria-hidden="true"></i> Nome</span>
                        </div>
                        <Input
                          inputProperties={{
                            id: "nome",
                            type: "text",
                            name: "nome",
                            required: true,
                          }}
                        />

                        <div className="d-flex align-items-center mb-3 pt-3">
                          <span className="h5 fw-bold mb-0"><i className="fa fa-envelope minorText" aria-hidden="true"></i> E-mail</span>
                        </div>
                        <div className="row">
                          <div className="col">
                            <Input
                              inputProperties={{
                                type: "email",
                                name: "email",
                                id: "email",
                                required: true,
                              }}
                            />
                          </div>
                          <div className="col">
                            <Input
                              inputProperties={{
                                id: "confirmar-Email",
                                type: "email",
                                name: "confirmar-Email",
                                required: true,
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-3 pt-3">
                          <span className="h5 fw-bold mb-0"><i className="fa fa-lock minorText"></i> Senha</span>
                        </div>
                        <div className="row px-6">
                          <div className="col">
                            <Input
                              inputProperties={{
                                id: 'senha',
                                type: `${hide ? "password" : "text"}`,
                                name: 'senha',
                                required: true,
                              }}
                              setHide={setHide}
                              hide={hide}
                            />
                          </div>
                          <div className="col">
                            <Input
                              inputProperties={{
                                id: 'confirmar-Senha',
                                type: 'password',
                                name: 'confirmar-Senha',
                                required: true,
                              }}
                            />
                          </div>
                        </div>
                        <div className="d-flex align-items-center mb-3 pt-3 ">
                          <span className="h5 fw-bold mb-0 "><i className="fa fa-birthday-cake minorText" aria-hidden="true"></i> Data de nascimento</span>
                        </div>
                        <Input
                          inputProperties={{
                            id: 'dataNascimento',
                            type: 'date',
                            required: true,
                            name: 'dataNascimento'
                          }}
                        />
                        <div className="container-fluid pt-5">
                          <div className="row">
                            <div className="col col-lg-9 text-wrap pt-1">
                              <input className="form-check-input bg-dark border-white" type="checkbox" value="" id="defaultCheck1" required />
                              <label className="form-check-label px-1 minorText textTherme" htmlFor="defaultCheck1"> Termos de uso <small><a href="">leia aqui</a></small></label>
                            </div>
                            <div className="col col-lg-3 text-wrap">
                              {/* tirei o evento on click para testar um bglh */}
                              <Button className="btn bg-transparent border-0" variant="primary" onClick={handleShow}>
                                <SubmitForm
                                  text='Cadastrar'
                                  id='submit'
                                  name='submit'
                                />
                              </Button>
                            </div>

                          </div>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton className="modal-exp-header">
                            <Modal.Title>Parabéns, o seu Cadastro foi realizado!</Modal.Title>
                          </Modal.Header>
                          <Modal.Footer className="modal-exp-footer">
                            <Button href="../" variant="primary" className="btn-modal-primary" onClick={handleClose}>
                              Ok!
                            </Button>
                          </Modal.Footer>
                        </Modal>

                        <div className="container-fluid">
                          <div className="row">
                            <span className="h4 mb-0 minorText">Ou fazer login com:</span>
                            <div className=" col-xl-6 pt-2">
                              <ul className="social-icons">
                                <li><a className="google" href="#"><i className="fa fa-google"></i></a></li>
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="apple" href="#"><i className="fa fa-apple"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cadastro