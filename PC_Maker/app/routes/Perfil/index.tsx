import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { FormEvent, useState } from "react";
import { Footer } from "~/components/Footer";
import { FormControl } from "~/components/FormControl";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import perfil from '../../styles/profile.css'
import { getUser } from "~/utils/session.server";
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import { handleDate } from "~/script/handleDate";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: perfil },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Perfil"
});

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};


function Perfil() {
    const data = useLoaderData<typeof loader>();

    const changeTheme = useHookstate(themePage)
    const [checked, setChecked] = useState(false);
    const [formControl, setFormControl] = useState(false);
    const [formButton, setFormButton] = useState(true);
    const [showElement, setShowElement] = useState(false);
    const showOrHide = () => setShowElement(true);


    function handleChange() {
        setChecked(!checked);
        setFormControl(true)
    };

    function openForm(id: string) {
        setFormControl(true);
        setFormButton(false);

        const localConst = document.getElementById(id) as HTMLElement
        localConst.focus()
    }


    async function AtualizaUsuario(event: FormEvent) {


        const formData = new FormData(event.target as HTMLFormElement)
        const dataForm = Object.fromEntries(formData)
        await axios.put(`http://127.0.0.1:8080/api/v1/usuarios/${data.user?.id}`, {
            nome: dataForm.nome,
            email: dataForm.email,
            senha: data.user?.senha,
            dataNascimento: data.user?.dataNascimento
        })
            .catch(error => console.log(error))
    }


    return (
        <div data-theme={changeTheme.get()}>
            <title>Home</title>
            <Header />
            <main id="conteudo">

                <div className="container-fluid">

                    <div className="row pt-5">
                        <div className="col-sm-1 profileImg">
                            <img src="/among_us.jpg" alt="Foto do Perfil" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col-sm-5 text-light">
                            <h1>{data.user?.nome}</h1>
                            <p>{data.user?.email}</p>
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
                            <i className="fa-solid fa-pencil" aria-hidden="true"></i> Perfil Usuário</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa-solid fa-lock" aria-hidden="true"></i> Login e Segurança</button>
                        <button className="dropdown-item text-light" id="LastInGroup" type="button">
                            <i className="fa-solid fa-envelope" aria-hidden="true"></i> Preferências de Email</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa-solid fa-microchip" aria-hidden="true"></i> Builds Salvas</button>
                        <button className="dropdown-item text-light" type="button">
                            <i className="fa-solid fa-desktop" aria-hidden="true"></i> Minhas Builds</button>
                    </div>
                </nav>
                <div className="break"> </div>
                <div className="main-container" id="MyAccount">
                    <form className="was-validated" onSubmit={AtualizaUsuario}>
                        <div className="col-md-11 pt-3 text-light box">
                            <h3 className="bold">Nome</h3>
                            <input
                                type="text"
                                name="nome"
                                id="nome"
                                className="form-control-plaintext text-light FormProfile"
                                placeholder={data.user?.nome}
                                readOnly={formButton}
                                required
                                defaultValue={data.user?.nome}
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
                                name="email"
                                id="emailProfile"
                                className="form-control-plaintext text-light FormProfile"
                                placeholder={data.user?.email}
                                readOnly={formButton}
                                required
                                defaultValue={data.user?.email}
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
                        {formControl && <FormControl />}
                    </form>
                </div>
                <br></br>
            </main>
            <Footer />
        </div>
    )
}

export default Perfil;