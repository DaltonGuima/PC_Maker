import type { FormEvent } from "react";
import { useState } from "react";
import { ProgressBar } from "react-bootstrap";

interface DivQuestoesProps {
    questionNumber: number
    setQuestionNumber: React.Dispatch<number>
}

export function DivQuestoes(props: DivQuestoesProps) {
    const [score, setScore] = useState<number>(0)
    const [perProgressBar, setPerProgressBar] = useState<number>(0)

    class QuestionScore {
        score: number;
        content: string;

        constructor(score: number, content: string) {
            this.score = score;
            this.content = content;
        }
    }


    class Question {
        questionTitle: string;
        questions: QuestionScore[];

        constructor(questionTitle: string, questions: QuestionScore[]) {
            this.questionTitle = questionTitle;
            this.questions = questions;
        }
    }

    const question: Question[] = [
        //questao1
        new Question(
            "Você utiliza o computador para...", [
            new QuestionScore(2, "Trabalhar"),
            new QuestionScore(2, "Estudar"),
            new QuestionScore(2, "Jogar"),
            new QuestionScore(3, "Trabalhar e Estudar"),
            new QuestionScore(3, "Trabalhar e Jogar"),
            new QuestionScore(3, "Estudar e Jogar"),
            new QuestionScore(4, "Trabalhar/Estudar/Jogar"),
            new QuestionScore(1, "Somente Pagar Contas, Imprimir documentos e assistir vídeos")
        ]
        ),
        new Question(
            "Você costuma baixar muitos arquivos (PDF's, imagens, vídeos, entre outro)?", [
            new QuestionScore(2, "Sim"),
            new QuestionScore(1, "Não"),
        ]
        ),

        new Question(
            "Você utiliza aplicativos/sistemas iguais ou parecidos com os seguintes: (Aplicativos pesados)", [
            new QuestionScore(3, "Home Broker, Autocad, BIMx, VMs Oracle..."),
            new QuestionScore(3, "Programa Aplicativos em 3D ou Desenvolve Projetos Grandes"),
            new QuestionScore(3, "Outros (Semelhantes aos citados acima)"),
            new QuestionScore(0, "Nenhum"),
        ]
        ),

        new Question(
            "Você utiliza os aplicativos do Pacote Office (Word, Excel, PowerPoint, Outlook...)", [
            new QuestionScore(1, "Sim"),
            new QuestionScore(0, "Não"),
        ]
        ),

        new Question(
            "Você utiliza o computador para editar vídeos?", [
            new QuestionScore(3, "Sim"),
            new QuestionScore(0, "Não"),
        ]
        ),

        new Question(
            "Qual(is) jogo(s) você joga com frequência?", [
            new QuestionScore(2, "Jogos Leves (Among Us, CupHead, Doom 3, Portal 2,  Battlefield: Bad Company 2...)"),
            new QuestionScore(3, "Jogos Médios (Assassin’s Creed: Rogue, Counter-Strike: Global Offensive, Far Cry 4, Metal Gear Solid V: The Phantom Pain, Paladins, Valorant, League of Legends, Minecraft, Overwatch 2...)"),
            new QuestionScore(4, "Jogos Pesados (Emuladores, Far Cry 6, Forza Horizon 5, Escape from Tarkov, Cyberpunk 2077,God of War Ragnarök, Call od Duty Warzone, hogwarts legacy, Fortnite, Marvel's Spider-Man: Miles Morales...)"),
        ]
        ),

        new Question(
            "Você joga um desses jogos em alto nível (profissional, ou altas ligas)?", [
            new QuestionScore(2, "Sim"),
            new QuestionScore(0, "Não"),
        ]
        ),

    ]

    function handleQuestionario(event: FormEvent) {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement)
        const data = Object.fromEntries(formData)
        setScore(score + Number(data.favelang))
        const per = (1 / question.length) * 100

        if (props.questionNumber < question.length) {
            props.setQuestionNumber(props.questionNumber + 1)
        }
        console.log(score)

        setPerProgressBar(per * (props.questionNumber + 1))
        //

    }


    if (props.questionNumber < question.length) {
        return (
            <form id={`question${props.questionNumber}`} action="post" onSubmit={handleQuestionario}>
                <h2>Barra de progresso</h2>
                <ProgressBar animated now={perProgressBar} variant="info" />
                <h2>Questão {props.questionNumber + 1}</h2>
                <h3>{question[props.questionNumber].questionTitle}</h3>
                {
                    question[props.questionNumber].questions.map(question => {
                        return (
                            <><input key={`radio${question}`} type="radio" id="question-1-questions-a" name="favelang" value={question.score} required /> {question.content}<br></br></>
                        )
                    })
                }

                <br></br>
                <input type="submit" value="Enviar Resposta" />
                <div className="clearfix"></div>
            </form >
        )
    }
    else {
        return (
            <div>
                <h2>Sua Pontuação é:</h2>
                <h2 id="printtotalscore">{score}</h2>


                {/* <Pontuacao/>  */}

            </div>
        )
    }

    //    function Pontuacao() 
    //    {
    //     if(score < 10 ){
    //         return(
    //             <a href="https://www.kabum.com.br/produto/448296/pc-gamer-facil-computadores-amd-ryzen-5-5600g-16gb-ssd-480gb-linux-preto-21045?gclid=EAIaIQobChMIsvWN_6rh_gIVpyZMCh0ocw9nEAQYAyABEgIPi_D_BwE">
    //                 <button>Básico</button>
    //             </a>  
    //         )
    //     }
    //    else if(score >=10 && score < 14){
    //         return(
    //             <a href="https://www.pichau.com.br/computador-mancer-gamer-amd-ryzen-5-3600-geforce-rtx-3050-8gb-8gb-ddr4-ssd-240gb-32950?gclid=EAIaIQobChMIqLfsoazh_gIVGxXUAR2XMgquEAQYDCABEgK8wPD_BwE">
    //                 <button>Médio</button>
    //             </a>  

    //          )      
    //     } 
    //     else{
    //         return(
    //             <a href="-https://www.magazineluiza.com.br/notebook-gamer-dell-g15-a0506-m30p-15-6-fhd-amd-ryzen-5-6600h-16gb-512gb-ssd-nvidia-rtx-3050-windows-11/p/aa69a6bb1e/in/dg15/">
    //             <button>Alta</button>
    //         </a> 

    //         )
    //     }
    //    }




}