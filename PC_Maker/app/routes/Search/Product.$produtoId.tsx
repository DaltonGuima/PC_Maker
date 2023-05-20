import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import axios from "axios";
import { useState, useEffect } from "react";
import type { Componente } from "~/Interface/ComponenteInterface";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import search from "~/styles/search.css"
import { getUser } from "~/utils/session.server";

export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: search },
    ];
};

export const loader = async ({ request }: LoaderArgs) => {

    const user = await getUser(request);

    return json({ user })
};

export const meta: MetaFunction = () => {
    return ({
        title: "Componente"
    })
}

function Product() {
    const params = useParams();
    const changeTheme = useHookstate(themePage);
    const [produto, setProduto] = useState<Componente>()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/produtos/${params.produtoId}`)
            .catch(() => { return null })
            .then(response => setProduto(response?.data))

    }, [params.produtoId])

    console.log(produto)
    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app" >
                {/* Vou fazer sem estilo pq, quero ir logo pro build */}




            </main >
            <Footer />
        </div >
    );
}


export default Product;
