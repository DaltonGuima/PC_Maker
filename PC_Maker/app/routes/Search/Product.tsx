import { useHookstate } from "@hookstate/core";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useParams } from "@remix-run/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { SideComponent } from "~/components/SideComponent";
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

function Product() {

    const changeTheme = useHookstate(themePage);

    /*
        https://www.bootdey.com/snippets/view/Filter-search-result-page
    */
    return (
        <div data-theme={changeTheme.get()}>
            <Header />

            <main id="conteudo" className="app" >




            </main >
            <Footer />
        </div >
    );
}


export default Product;
