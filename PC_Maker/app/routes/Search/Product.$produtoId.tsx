import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useParams } from "@remix-run/react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHydrated } from "remix-utils";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { themePage } from "~/script/changeTheme";
import search from "~/styles/search.css"
import { getUser } from "~/utils/session.server";
import type { Produto } from "../Dashboard/__localVenda/LocaisVendas.$produtoId";

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
    const [produto, setProduto] = useState<Produto>()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8080/api/v1/produtos/${params.produtoId}`)
            .catch(() => { return null })
            .then(response => setProduto(response?.data))

    }, [params.produtoId])

    const hydrated = useHydrated();
    function AlguemMeAjuda() {
        if (hydrated && produto != null) {
            localStorage.setItem(produto?.categoria, produto?.id.toString())
        }
    }

    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app" >
                {/* Vou fazer sem estilo pq, quero ir logo pro build */}

                <Link to="/Build/Builder">
                    <Button variant="primary" onClick={AlguemMeAjuda}>Primary</Button>
                </Link>


            </main >
            <Footer />
        </div >
    );
}


export default Product;
