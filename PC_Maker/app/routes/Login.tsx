import { Input } from '../components/Form/Input'
import { SubmitForm } from '../components/Form/SubmitForm'
import login from '../styles/login.css'
import type { LinksFunction, MetaFunction } from '@remix-run/node';
import type { FormEvent } from "react";
import { useState } from "react";
import axios from "axios";
import { createUserSession } from '~/utils/session';
/* import { badRequest } from "remix-utils"; */

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: login },
  ];
};

export const meta: MetaFunction = () => ({
  title: "Login"
});

type User = {
  id: string,
  email: string,
  senha: string,
}

function Login() {
  const [user, setUser] = useState<User>();

  async function HandleLogin(event: FormEvent) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    axios(`http://127.0.0.1:8080/api/v1/usuarios/${data.email}`)
      .then(response => { setUser(response.data) })
      .catch(() => { return null })

    if (user?.senha != data.senha)
      return null

    console.log(user)

    await createUserSession(user.id, "/")

    /* if (!user) {

      console.log("deu erro")
    }

    //validações ocorrem aqui

    const teste = axios(`http://127.0.0.1:8080/api/v1/usuarios/a@a`)
    console.log(teste)
    */
  }



  return (
    <div className='login-page'>
      <section className="vh-100">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-12">
              <div className="card-login bg-dark text-light">{/* <!-- Aqui arrendoda --> */}
                <div className="row g-0">
                  <div className="col-md-8 col-lg-7 d-none d-md-block">
                    <img className="img-login" src="/Rectangle 6.png"
                      alt="Foto de um PC" />
                  </div>
                  <div className="col-md-4 col-lg-5 d-flex align-items-center">
                    <div className="card-body p-1 p-lg-4 text-black">

                      <form action="post" method='post' onSubmit={HandleLogin}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0s">Login</span>
                        </div>

                        <Input
                          id="email"
                          type='email'
                          name="email"
                        />

                        <Input
                          id="senha"
                          type='password'
                          name="senha"
                        />

                        <div className="container-fluid pt-5">
                          <div className="row">
                            <div className="col">
                              <input className="form-check-input bg-dark border-white" type="checkbox" value="" id="defaultCheck1" />
                              <label className="form-check-label px-2 minorText" htmlFor="defaultCheck1">Lembrar Senha</label>
                            </div>
                            <div className="col col-lg-3">
                              <SubmitForm
                                name='login'
                                id='login'
                                text='Login'
                              />
                            </div>

                          </div>
                        </div>
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
                        <div className="container-fluid DontHAveAccount pt-lg-5 minorText">
                          <p> Não tem uma conta? <a href="../cadastro"> Cadastre aqui.</a> </p>
                        </div>
                      </form>

                    </div>
                  </div>
                </div>
              </div >
            </div >
          </div >
        </div >
      </section >
    </div >
  )
}

export default Login
