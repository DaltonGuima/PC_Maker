import type { Componente, GabineteProps, VentoinhaProps, TecladoProps, ArmazenamentoProps } from "~/Interface/ComponenteInterface";

export default function TableProduct(props: { produto: Componente | undefined }) {

    const map = new Map()
    let forEach: React.ReactNode[] = []

    switch (props.produto?.categoria) {
        case 'Ventoinha':
            map.set("Tamanho", (props.produto as VentoinhaProps).especificacoes.tamanho)
            break;
        case 'Teclado':
            map.set("Tamanho", (props.produto as TecladoProps).especificacoes.tamanho)
            map.set("Tipo", (props.produto as TecladoProps).especificacoes.tipo)
            break;
        case "Armazenamento":
            map.set("Tipo", (props.produto as ArmazenamentoProps).especificacoes.tipo)
            map.set("Capacidade", (props.produto as ArmazenamentoProps).especificacoes.capacidade)
            map.set("Velocidade Escrita", (props.produto as ArmazenamentoProps).especificacoes.velEscrita)
            map.set("Velocidade Leitura", (props.produto as ArmazenamentoProps).especificacoes.velLeitura)
            break;
        case 'Gabinete':
            map.set("Tipo", (props.produto as GabineteProps).especificacoes.tipo)
            break;
    }


    const teste = () => {
        map.forEach((value, key) => {
            forEach.push(
                <>
                    <td className="specsBarraLatTh">{key}</td>
                    <td className="specsBarraLatTd">{value}</td>
                </>
            )
        })
        return forEach
    }
    return (
        <tr className="specsBarraLatLinha">

            {teste()}
        </tr>
    )




}





