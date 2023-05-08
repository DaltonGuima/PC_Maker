import type { LinksFunction } from "@remix-run/node";
import questoes from '../../styles/questoes.css';
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { useState } from "react";
import { DivQuestoes } from "~/components/DIvQuestoes";
import { useHookstate } from "@hookstate/core";
import { themePage } from "~/script/changeTheme";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: questoes },
    ];
};

export default function Questoes() {
    const [questionNumber, setQuestionNumber] = useState(0);
    const changeTheme = useHookstate(themePage)

    return (

        <>
            <Header />

            <div className="container" data-theme={changeTheme.get()}>
                <div className="row">
                    <div className="two-thirds column">
                        <h1></h1><br></br>
                        <br></br>
                        <h2>Conhecendo Você</h2>
                        <div className="questions_box">
                            <DivQuestoes
                                questionNumber={questionNumber}
                                setQuestionNumber={setQuestionNumber}
                            />



                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

