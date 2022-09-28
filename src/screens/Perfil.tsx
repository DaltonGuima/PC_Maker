import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import '../script/script.js'
import '../styles/profile.css'
import '../styles/main.css'

import {useState } from 'react'
import { Route } from 'react-router-dom'
import { FormControl } from '../components/FormControl'

function Perfil() {

    const [checked, setChecked] = useState(false);
    const [formControl,setFormControl] = useState(false);
    const [formButton,setFormButton] = useState(true);
    const [showElement, setShowElement] = useState(false);
    const showOrHide = () => setShowElement(true);


    function handleChange() {
        setChecked(!checked);
        setFormControl(true)
    };

    function openForm(id:string){
        setFormControl(true);
        setFormButton(false);
        
        const localConst = document.getElementById(id) as HTMLElement
        localConst.focus()
    }


    return (
        <div>
            <title>Home</title>
            <Header />
            <main id="conteudo">

                <div className="container-fluid">

                    <div className="row pt-5">
                        <div className="col-sm-1 profileImg">
                            <img src="/among_us.jpg" alt="Foto do Perfil" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-sm-5 text-light">
                            <h1>Usuario</h1>
                            <p>usuario@email.com</p>
                        </div>
                    </div>

                </div>
                <nav className="navbar-primary col-md-3">
                    <div className="col-md-11 col-sm-1">
                        <button className="dropdown-item text-light" type="button" id="MyAccountBtn" autoFocus>
                            <i className="fa fa-user-circle-o" aria-hidden="true"></i> Minha conta</button>
                        <button className="dropdown-item text-light" type="button" id="MyAccountBtn" autoFocus>
                            <i onClick={showOrHide} aria-hidden="true"></i> Build Perfil (Questionario) </button>
                        <button className="dropdown-item text-light" type="button" id="UserProfileBtn">
                            <i className="fa fa-pencil" aria-hidden="true"></i> Perfil Usuário</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa fa-lock" aria-hidden="true"></i> Login e Segurança</button>
                        <button className="dropdown-item text-light" id="LastInGroup" type="button">
                            <i className="fa fa-envelope" aria-hidden="true"></i> Preferências de Email</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa fa-microchip" aria-hidden="true"></i> Builds Salvas</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa fa-desktop" aria-hidden="true"></i> Minhas Builds</button>
                    </div>
                </nav>
                <div className="break"> </div>
                <form className="was-validated">
                    <div className="main-container" id="MyAccount">
                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Nome</h3>
                                <input 
                                    type="text" 
                                    name="nome" 
                                    id="nome" 
                                    className="form-control-plaintext text-light FormProfile" 
                                    placeholder="Usuario" 
                                    readOnly={formButton} 
                                    required
                                    defaultValue={'Usuario'}
                                />
                                
                                <label 
                                    htmlFor="nome" 
                                    className="btn text-light btn-block float-end" 
                                    onClick={() => openForm('nome')}
                                >
                                    <button
                                        type="button" 
                                        id="NomeBtn" 
                                    >
                                        Editar 
                                    </button>
                                </label>
                        </div>

                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Endereço de email</h3>
                            <input 
                                type='email' 
                                name="emailProfile" 
                                id="emailProfile" 
                                className="form-control-plaintext text-light FormProfile" 
                                placeholder="usuario@email.com" 
                                readOnly={formButton} 
                                required
                                defaultValue={'usuario@email.com'} 
                            />
                            
                            <label 
                                htmlFor="email" 
                                className="btn text-light btn-block float-end"
                                onClick={() => openForm('emailProfile')}>
                                    <button                                     
                                        type="button" 
                                        id="NomeBtn" >
                                        Editar 
                                    </button>
                                </label>
                        </div>

                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Contas das redes sociais conectadas</h3>
                            <div className="col-xl-6 pt-2">
                                <ul className="social-icons">
                                    <li><a className="google" href="#"><i className="fa fa-google"></i></a></li>
                                    <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a className="apple" href="#"><i className="fa fa-apple"></i></a></li>
                                </ul>
                            </div>
                            <button className="btn text-light btn-block float-end" type="button">Desconectar </button>
                        </div>
                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Acessibilidade</h3>
                            <p className="disabled" >Alto Contraste de Cores</p>
                            <label className="switch float-end">
                                <input type="checkbox" id="AltoContraste" 
                                checked={checked}
                                onChange={handleChange} />
                                <span className="slider round"></span>
                            </label>
                        </div>
                        { formControl ? <FormControl/> : null}
                    </div>
                </form>
                <br></br>
            </main>
            <Footer />
        </div>
    )
}

export default Perfil;