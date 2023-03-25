import { useHookstate } from "@hookstate/core"
import { CardBuild } from "~/components/CardBuild"
import { Footer } from "~/components/Footer"
import { Header } from "~/components/Header"
import { themePage } from "~/script/changeTheme"

export default function Home() {
  const changeTheme = useHookstate(themePage)

  return (
    <div data-theme={changeTheme.get()}>
      <Header />

      <main id="conteudo" className="app">
        <div className="banner banner1">
          <div className="row-fluid rounded">
            <div className="cardbanner">
              <div className="card-body-h">
                <h2 className="card-title text-light text-bold">Monte seu Computador</h2>
                <p className="card-text text-light">Utilize nossas mais recentes ferramentas para
                  montar o seu PC do seu jeito.</p>
                <a href="#" className="btn text-light montarButton">Montar</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container cards">
          <h1 className="text-center text-light title">Builds mais votadas</h1>
          <div className="row pt-2 m-auto">

            <CardBuild
              title='Build 1'
              Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
              perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
              buildImg='/Build_1.png'
              criador='Zezão extreme'
            />
            <CardBuild
              title='Build 2'
              Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
              perfilImg='/among_us2.png'
              buildImg='./Build_2.png'
              criador='xxx_EnzoG4mer_xxx'
            />
            <CardBuild
              title='Build 3'
              Itens={['Ryzen 7 5800X', 'Radeon RX 6800XT', '32GB DDR4 3200MHz']}
              perfilImg='http://res.cloudinary.com/d3/image/upload/c_pad,g_center,h_200,q_auto:eco,w_200/bootstrap-logo_u3c8dx.jpg'
              buildImg='/Build_3.png'
              criador='Zezão extreme'
            />

          </div>
        </div>

        <div className="banner banner2">

          <h1 className="text-center text-light" id="GuiaBlocoCentral">Guias</h1>

        </div>

      </main>
      <Footer />
    </div>
  )
}

