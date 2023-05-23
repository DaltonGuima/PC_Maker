import type { Componente, GabineteProps, VentoinhaProps, TecladoProps } from "~/Interface/ComponenteInterface";

export default function TableProduct(props: { produto: Componente | undefined }) {

    const map = new Map()
    switch (props.produto?.categoria) {
        case 'Ventoinha':
            map.set("Tamanho", (props.produto as VentoinhaProps).especificacoes.tamanho)
        case 'Teclado':
            map.set("Tamanho", (props.produto as TecladoProps).especificacoes.tamanho)
            map.set("Tipo", (props.produto as TecladoProps).especificacoes.tipo)
        case "Armazenamento":
            map.set("Tipo", (props.produto as TecladoProps).especificacoes.tipo)
            map.set("Tamanho", (props.produto as TecladoProps).especificacoes.tamanho)
            map.set("Tamanho", (props.produto as TecladoProps).especificacoes.tamanho)
            map.set("Tamanho", (props.produto as TecladoProps).especificacoes.tamanho)
        case 'Gabinete':
            map.set("Tipo", (props.produto as GabineteProps).especificacoes.tipo)
    }


    return (
        <>
            {map.forEach(function (value, key) {
                return (
                    <>
                        <th className="specsBarraLatTh">{key}</th>
                        <td className="specsBarraLatTd">{value}</td>
                    </>
                )
            })}
        </>
    )


}