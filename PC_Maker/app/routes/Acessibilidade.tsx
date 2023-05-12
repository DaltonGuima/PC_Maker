import { useHookstate } from "@hookstate/core"
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react"
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header"
import { themePage } from "~/script/changeTheme"


import React, { useState } from 'react';


export const meta: MetaFunction = () => ({
    title: "Acessibilidade"
});


export default function Acessibilidade() {
    const changeTheme = useHookstate(themePage)
    /*   const teste = useLoaderData<typeof loader>(); */



    return (
        <div data-theme={changeTheme.get()}>

            <Header />
            <main id="conteudo" className="container-fluid texto">
                <div className="headline text app texto ">
                    <h2 className="text-center py-3">Acessibilidadess</h2>
                </div>

                <div>
                    <h5 className="text-justify py-2 px-3">
                        Este site foi desenvolvido para que pessoas com deficiência visual, baixa visão, daltonismo, deficiência
                        auditiva e mobilidade reduzida possam navegar por meio de recursos como alto contraste, aumento de fonte,
                        teclas de atalho, tradução para a Língua Brasileira de Sinais e navegação por teclado.
                    </h5>
                </div>

            </main>
            <Footer />
        </div>
    )
}

