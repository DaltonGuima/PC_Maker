import { useHookstate } from "@hookstate/core"
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header"
import { themePage } from "~/script/changeTheme"
import acessibilidade from '~/styles/acessibilidade.css'


import React, { useState } from 'react';


export const meta: MetaFunction = () => ({
    title: "Acessibilidade"
});

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: acessibilidade },
    ];
};


export default function Acessibilidade() {
    const changeTheme = useHookstate(themePage)
    /*   const teste = useLoaderData<typeof loader>(); */



    return (
        <div data-theme={changeTheme.get()}>

            <Header />
            <main id="conteudo" className="container-fluid texto">
                <div className="headline text">
                    <h1 className="text-center py-3">Acessibilidade</h1>
                </div>

                <div>
                    <h5 className="text-justify py-2 px-3">
                        Este site foi desenvolvido para que pessoas com deficiência visual, baixa visão, daltonismo, deficiência
                        auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte,
                        teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.
                    </h5>

                    <h5 className="text-justify py-2 px-3">
                        Para aumentar a fonte, é só clicar no símbolo de A+ em nossa barra de acessibilidade.
                        Caso queira voltar ao tamanho de fonte original, é só clicar em A-.
                    </h5>

                    <h5 className="text-justify py-2 px-3">
                        Se for necessário, você também pode usar o zoom nativo do seu navegador, pressionando
                        as teclas <mark>“Ctrl” e “+”</mark> para aumentar todo o site e <mark>“Ctrl” e “-“</mark> para diminuir. Para voltar
                        ao padrão, pressione <mark>“Ctrl” e “0”</mark>.
                    </h5>
                </div>


                <div className="headline text">
                    <h2 className="text-center pt-5 pb-3">Teclas de atalho por navegadores</h2>
                </div>

                <div>
                    <h3 className="text-justify py-1 px-3">Internet Explorer e Google Chrome:</h3>

                    <h6 className="text-justify py-2 px-3">
                        “Alt” + “1” - ir para o conteúdo
                    </h6>

                    <h6 className="text-justify py-2 px-3">
                        “Alt” + “2” - ir para o menu
                    </h6>

                    <h6 className="text-justify py-2 px-3">
                        “Alt” + “3” - ir para o rodapé
                    </h6>
                </div>

                <div>
                    <h3 className="text-justify pt-4 pb-1 px-3">Firefox:</h3>

                    <h6 className="text-justify py-1 px-3">
                        “Alt” + “Shift” + “número”
                    </h6>
                </div>

                <div>
                    <h3 className="text-justify pt-4 pb-1 px-3">Opera:</h3>
                    <h6 className="text-justify py-1 px-3">
                        “Shift” + “Escape” + “número”
                    </h6>
                </div>

                <div>
                    <h3 className="text-justify pt-4 pb-1 px-3">Safari e OmniWeb:</h3>
                    <h6 className="text-justify py-1 px-3">
                        “Ctrl” + “número”
                    </h6>
                </div>


                <div className="headline text">
                    <h2 className="text-center pt-5 pb-3">Navegação por tabulação</h2>
                </div>

                <div>
                    <h5 className="text-justify py-2 px-3">
                        Use a tecla Tab para navegar por elementos que recebem ação do usuário no site,
                        tais como links, botões, campos de formulário e outros na ordem em que eles são
                        apresentados na página, e <mark>Shift + Tab</mark> para retornar. Use as setas direcionais
                        para acessar as informações textuais.
                    </h5>
                </div>


                <div className="headline text">
                    <h2 className="text-center pt-5 pb-3">Sugestões de programas disponíveis para pessoas com deficiência</h2>
                </div>

                <div className="headline text">
                    <ul>
                        <li>Nitrous Voice Flux: controla o computador por voz;</li>
                        <li>NVDA: software livre para ler tela – vários idiomas (Windows);</li>
                        <li>YeoSoft Text: leitor de tela em inglês e português;</li>
                        <li>Jaws for Windows: leitor de tela – vários idiomas;</li>
                        <li>Virtual Vision: leitor de telas em português do Brasil;</li>
                        <li>DOSVOX: sistema para deficientes visuais (Windows ou Linux);</li>
                        <li>Talckback: leitor de tela disponível em smartphones Android;</li>
                        <li>VLibras: ferramentas gratuitas que traduz conteúdos digitais (texto, áudio e vídeo) em Português para Libras.</li>
                    </ul>
                </div>


                <div className="row">
                    <div>
                        <div className="my-2">

                            <div className="row">
                                <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-2"></div>
                                <p className="obsComp col my-2"></p>
                            </div>
                        </div>
                        <div className="my-2">

                            <div className="row">
                                <div className="btn-builder mx-2 p-2 px-4 rounded col-md-2 col-2"></div>
                                <p className="obsComp col my-2"></p>
                            </div>

                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

