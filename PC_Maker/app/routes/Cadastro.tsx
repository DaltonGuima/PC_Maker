import { Input } from '../components/Form/Input'
import { SubmitForm } from '../components/Form/SubmitForm'
import cadastro from '../styles/cadastro.css'
import login from '../styles/login.css'
import axios, { AxiosError, AxiosResponse } from 'axios';
import { LinksFunction, MetaFunction, redirect } from '@remix-run/node';
import type { ChangeEvent, FormEvent } from "react";
import { handleDate } from "~/script/handleDate";
import { Link } from "@remix-run/react"


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Spinner } from 'react-bootstrap';


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
  const [response, setResponse] = useState<AxiosResponse<any, any>>();
  const [error, setError] = useState<AxiosError<any, any>>();

  const [show, setShow] = useState(false);
  const [hide, setHide] = useState(true)
  const [errorValidate, setErrorValidate] = useState(false);

  // email
  const [email, setEmail] = useState("")
  const [confirmaEmail, setConfirmaEmail] = useState("")
  const [carregandoEmailMenssagem, setCarregandoEmailMessagem] = useState(false);
  const [carregandoConfirmaEmailMenssagem, setCarregandoConfirmaEmailMessagem] = useState(false);

  // senha
  const [senha, setSenha] = useState("")
  const [confirmaSenha, setConfirmaSenha] = useState("")
  const [carregandoConfirmaSenhaMenssagem, setCarregandoConfirmaSenhaMessagem] = useState(false);

  const handleClose = () => setShow(false);

  async function handleCreateUsuario(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)
    console.log(data)

    if (data.senha != data.confirmarSenha || data.email != data.confirmarEmail) {
      setErrorValidate(true)
    } else {
      await axios.post("http://127.0.0.1:8080/api/v1/usuarios", {
        nome: data.nome,
        dataNascimento: handleDate(data.dataNascimento.toString()),
        email: data.email,
        senha: data.senha,
      })
        .then(response => setResponse(response))
        .catch(error => setError(error))

      setShow(true)
    }

  }


  async function consultaEmail() {

    await axios.get(`http://127.0.0.1:8080/api/v1/usuarios/${email}`)
      .catch(() => { return null })
      .then((response) => {
        if (response?.data == null) {
          return setCarregandoEmailMessagem(false)

        }

        return setCarregandoEmailMessagem(true)

      })

  }


  function validaEmail() {
    setCarregandoConfirmaEmailMessagem(false)

    if (email != confirmaEmail) {
      setCarregandoConfirmaEmailMessagem(true)
      return false
    }

    return true
  }

  function validaSenha() {
    setCarregandoConfirmaSenhaMessagem(false)

    if (senha != confirmaSenha) {
      setCarregandoConfirmaSenhaMessagem(true)
      return false
    }

    return true
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


                      <form
                        onSubmit={
                          handleCreateUsuario
                        }
                        className="form-horizontal"
                        method='post'>

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
                                onChange: (evento) => setEmail(evento.target.value),
                                onBlur: consultaEmail
                              }}
                            />
                            {carregandoEmailMenssagem && (
                              <p className='text-danger'>E-mail em uso</p>
                            )}
                          </div>
                          <div className="col">
                            <Input
                              inputProperties={{
                                id: "confirmar-Email",
                                type: "email",
                                name: "confirmarEmail",
                                required: true,
                                onChange: (event) => setConfirmaEmail(event.target.value),
                                onBlur: validaEmail
                              }}
                            />
                            {carregandoConfirmaEmailMenssagem && (
                              <p className='text-danger'>Os e-mails precisam ser iguais</p>
                            )}

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
                                onChange: (event) => setSenha(event.target.value),
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
                                name: 'confirmarSenha',
                                required: true,
                                onChange: (event) => setConfirmaSenha(event.target.value),
                                onBlur: validaSenha
                              }}
                            />
                            {carregandoConfirmaSenhaMenssagem && (
                              <p className='text-danger'>As senhas precisam ser iguais</p>
                            )}
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
                              <label className="form-check-label px-1 minorText textTherme" htmlFor="defaultCheck1"> Termos de uso <small><a href="" className="linkCor">leia aqui</a></small></label>
                            </div>
                            <div className="col col-lg-3 ">
                              {/* Depois eu faço o disabled pro botão */}
                              <SubmitForm
                                text='Cadastrar'
                                id='submit'
                                name='submit'
                              />

                            </div>
                            {errorValidate && (
                              <p className='text-danger text-end'>Email ou Senha não conferem</p>
                            )
                            }
                          </div>
                        </div>


                        <Modal show={show} onHide={handleClose} centered size="sm" dialogClassName="text-light">
                          <Modal.Header closeButton className="bg-dark border border-dark text-center text-light">
                            <Modal.Title>Código: {error?.response?.status || response?.status}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body className="bg-dark border border-dark text-light">
                            <p>
                              {
                                (error?.message || (response && "Cadastro relizado com sucesso"))
                                ||
                                <Spinner animation="border" role="status">
                                  <span className="visually-hidden">Loading...</span>
                                </Spinner>
                              }
                            </p>
                          </Modal.Body>
                          <Modal.Footer className="modal-exp-footer">
                            {error ?
                              <Button variant="secondary" onClick={handleClose}>
                                Refazer o cadastro
                              </Button>
                              :
                              <Link to="/login">
                                <Button variant="success">
                                  Ir para a página de Login
                                </Button>
                              </Link>
                            }
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
    </div >
  )
}

export default Cadastro