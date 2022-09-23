import Button from 'bootstrap/js/dist/button'
import { Input } from '../components/Form/Input'
import { SubmitForm } from '../components/Form/SubmitForm'
import '../styles/login.css'
import '../styles/main.css'

function Login() {


  return (
    <section className="vh-100">
      <title>Login</title>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-12">
              <div className="card bg-dark text-light">{/* <!-- Aqui arrendoda --> */}
                <div className="row g-0">
                  <div className="col-md-8 col-lg-7 d-none d-md-block">
                    <img src="/Rectangle 6.png"
                      alt="Foto de um PC" />
                  </div>
                  <div className="col-md-4 col-lg-5 d-flex align-items-center">
                    <div className="card-body p-1 p-lg-4 text-black">
      
                      <form>
      
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">Login</span>
                        </div>
      
                        <Input
                          id="email"
                          type= 'email'
                        />
      
                        <Input
                          id="senha"
                          type= 'password'
                        /> 
      
                        <div className="container-fluid pt-5">
                            <div className="row">
                                <div className="col">
                                    <input className="form-check-input bg-dark border-white" type="checkbox" value="" id="defaultCheck1" />
                                    <label className="form-check-label px-2" htmlFor="defaultCheck1">Lembrar Senha</label> 
                                </div>
                                <div className="col col-lg-3">
                                  <SubmitForm
                                    name='login'
                                    id='login'
                                    text='Login ->'
                                  />
                                </div>
                                
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <span className="h4 mb-0">Ou fazer login com:</span>
                                <div className=" col-xl-6 pt-2">
                                    <ul className="social-icons">
                                        <li><a className="google" href="#"><i className="fa fa-google"></i></a></li>
                                        <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                        <li><a className="apple" href="#"><i className="fa fa-apple"></i></a></li>   
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid DontHAveAccount pt-lg-5">
                            <p> Não tem uma conta? <a href="../Views/cadastro.html"> Cadastre aqui.</a> </p>
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

export default Login
