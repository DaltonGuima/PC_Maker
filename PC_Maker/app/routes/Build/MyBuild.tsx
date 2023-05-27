
//import './App.css'

import { useHookstate } from "@hookstate/core";
import { useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import builder_PC from '../../styles/builder_PC.css';
import build from '../../styles/build.css';
import type { LinksFunction, LoaderArgs, MetaFunction } from '@remix-run/node';
import { json } from '@remix-run/node';
import { getUser } from "~/utils/session.server";
import { MyCardBuild } from "~/components/MyCardBuild";
import { useEffect } from 'react';
import { useLoaderData } from "@remix-run/react";
import axios from "axios";
import type { Build } from "./Builder.$typeRequest";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: build },
        { rel: "stylesheet", href: builder_PC },
    ];
};

export const meta: MetaFunction = () => ({
    title: "Minhas Builds"
});

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};

function MyBuild() {
    const data = useLoaderData<typeof loader>();

    const [imgBody, setImgBody] = useState<string>();
    const [titleModal, setTitleModal] = useState<string>();


    function Modaltext(img: string, title: string) {
        setImgBody(img);
        setTitleModal(title);
    }

    const [builds, setBuilds] = useState<Build[]>([])

    useEffect(() => {
        axios(`http://127.0.0.1:8080/api/v1/builds`)
            .catch(error => console.log(error))
            .then((response) => {
                setBuilds(
                    response?.data.filter((buildData: Build) =>
                        buildData.usuario.id == data.user?.id
                    )
                )
            })
    }, [data.user?.id])

    console.log(builds)


    const changeTheme = useHookstate(themePage)

    return (
        <div data-theme={changeTheme.get()}>
            <Header />
            <main id="conteudo">
                <div className="headline text text-white">
                    <h2 className="text-center py-3">Suas builds</h2>
                </div>

                {/* Teste do Krl */}

                <div className="container cards ">

                    <div className="row pt-2 m-auto">

                        {
                            builds.map(
                                build => {
                                    return (
                                        <MyCardBuild
                                            id={build.id}
                                            key={build.id}
                                            title={build.nome}
                                            Itens={build.itens.slice(0, 3).map(itens => { return itens.localVenda.produto.nome })}
                                            buildImg='/Build_1.png'
                                        />
                                    )
                                }
                            )}

                    </div>
                    <div className="boxBuilds">

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    )
}

export default MyBuild;
