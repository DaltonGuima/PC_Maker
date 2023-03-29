import { Input } from '../components/Form/Input'
import { SubmitForm } from '../components/Form/SubmitForm'
import cadastro from '../styles/cadastro.css'
import login from '../styles/login.css'

import type { LinksFunction, MetaFunction } from '@remix-run/node';

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
  return (
    <section className='login-page'>
      <title>Cadastro</title>
      <div className="container py-2 h-100">
        <div className="row align-items-center h-100">
          <div className="col col-xl-12 d-flex justify-content-center">
            <div className="card bg-dark text-light col-md-5">{/* <!-- Aqui arrendoda --> */}
              <div className="row g-0 d-flex justify-content-center" >
                <div className="align-items-center">
                  <div className="card-body p-1 p-md-5 text-black">

                    <form>

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Cadastro</span>
                      </div>

                      <div className="d-flex align-items-center mb-3 pt-3">
                        <span className="h5 fw-bold mb-0"><i className="fa fa-envelope" aria-hidden="true"></i> E-mail</span>
                      </div>

                      <Input
                        id='email'
                        type='email'
                      />
                      <Input
                        id='confirmar-Email'
                        type='email'
                      />

                      <div className="d-flex align-items-center mb-3 pt-3">
                        <span className="h5 fw-bold mb-0"><i className="fa fa-lock"></i> Senha</span>
                      </div>

                      <Input
                        id='senha'
                        type='password'
                      />
                      <Input
                        id='confirmar-Senha'
                        type='password'
                      />

                      <div className="d-flex align-items-center mb-3 pt-3">
                        <span className="h5 fw-bold mb-0"><i className="fa fa-birthday-cake" aria-hidden="true"></i> Data de nascimento</span>
                      </div>

                      <Input
                        id='data'
                        type='date'
                      />

                      <div className="container-fluid pt-5">
                        <div className="row">
                          <div className="col">
                            <input className="form-check-input bg-dark border-white" type="checkbox" value="" id="defaultCheck1" />
                            <label className="form-check-label px-1" htmlFor="defaultCheck1"> Termos de uso <small><a href="">leia aqui</a></small></label>
                          </div>
                          <div className="col col-lg-5">
                            <SubmitForm
                              text='Finalizar Cadastro'
                              id='cadastro'
                              name='cadastro'
                            />
                          </div>
                        </div>
                      </div>
                      <div className="container-fluid">
                        <div className="row">
                          <span className="h4 mb-0 pt-3">Continuar com:</span>
                          <div className="pt-2">
                            <ul className="social-icons align-items-center m-lg-3">
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
  )
}

export default Cadastro