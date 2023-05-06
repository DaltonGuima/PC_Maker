import type { LinksFunction } from "@remix-run/node";
import questoes from '../../styles/questoes.css';
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { useState } from "react";
import { DivQuestoes } from "~/components/DIvQuestoes";


export const links: LinksFunction = () => {
    return [
        { rel: "stylesheet", href: questoes },
    ];
};

export default function Questoes() {
    const [questionNumber, setQuestionNumber] = useState(0);
    return (

        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="two-thirds column">
                        <h1></h1><br></br>
                        <br></br>
                        <h2>Conhecendo Você</h2>
                        <div id="progress_bar"></div>
                        <div className="questions_box">
                            <DivQuestoes
                                questionNumber={questionNumber}
                                setQuestionNumber={setQuestionNumber}
                            />



                            


                            {/* <div id="question-1">
                                <h2>Questão 1</h2>
                                <h3>Você se preocupa em se tornar uma vítima de fraude?</h3>
                                <input type="radio" id="question-1-answer-a" name="favelang" value={1} /> O que é Fraude?<br></br>
                                <input type="radio" id="question-1-answer-b" name="favelang" value={2} /> Nunca me preocupo<br></br>
                                <input type="radio" id="question-1-answer-c" name="favelang" value={3} /> Sim, eu me preocupo muito com isso!<br></br>
                                <div id="submit1" className="button">Enviar Resposta</div>
                                <div className="clearfix"></div>
                            </div>

                            <div id="question-2">
                                <h2>Questão 2</h2>
                                <h3>Você utiliza a mesma senha para tudo?</h3>
                                <input type="radio" id="question-2-answer-a" name="favelang" value={1} /> Sim!<br></br>
                                <input type="radio" id="question-2-answer-b" name="favelang" value={2} /> Só para as senhas de cartão de crédito<br></br>
                                <input type="radio" id="question-2-answer-c" name="favelang" value={3} /> Não, todas são diferentes!<br></br>
                                <div id="submit2" className="button">Enviar Resposta</div>
                                <div className="clearfix"></div>
                            </div>

                            <div id="question-3">
                                <h2>Questão 3</h2>
                                <h3>Você confia em um e-mail enviado pelas suas costas pedindo sua senha?</h3>
                                <input type="radio" id="question-3-answer-a" name="favelang" value={1} /> Sim, é o banco afinal<br></br>
                                <input type="radio" id="question-3-answer-b" name="favelang" value={2} /> Se parece oficial, sim<br></br>
                                <input type="radio" id="question-3-answer-c" name="favelang" value={3} /> De jeito nenhum, um banco nunca pedirá a senha de sua conta<br></br>
                                <div id="submit3" className="button">Enviar Resposta</div>
                                <div className="clearfix"></div>
                            </div>


                            <div id="question-4">
                                <h2>Questão 4</h2>
                                <h3>Você costuma usar cartão de crédito virtual em compras online?</h3>
                                <input type="radio" id="question-4-answer-a" name="favelang" value={1} /> Não<br></br>
                                <input type="radio" id="question-4-answer-b" name="favelang" value={2} /> Raramente uso<br></br>
                                <input type="radio" id="question-4-answer-c" name="favelang" value={3} /> Sim, com certeza!<br></br>
                                <div id="submit4" className="button">Enviar Resposta</div>
                                <div className="clearfix"></div>
                            </div>

                            <div id="question-5">
                                <h2>Questão 5</h2>
                                <h3>Você compartilha seu PIN com alguém?</h3>
                                <input type="radio" id="question-5-answer-a" name="favelang" value={1} /> Sim, qualquer um que pedir por isso<br></br>
                                <input type="radio" id="question-5-answer-b" name="favelang" value={2} /> Na verdade não, mas às vezes eu deixo meu(minha) parceiro(a) sacar dinheiro para mim<br></br>
                                <input type="radio" id="question-5-answer-c" name="favelang" value={3} /> Nunca!<br></br>
                                <div id="submit5" className="button">Enviar Resposta</div>
                                <div className="clearfix"></div>
                            </div>

                            <div id="question-6">
                                <h2>Obrigado por responder a pesquisa!</h2>
                                <h3>Seu score de segurança é: </h3>
                                <h1 id="printtotalscore"></h1>
                                <p id="printscoreinfo"></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

