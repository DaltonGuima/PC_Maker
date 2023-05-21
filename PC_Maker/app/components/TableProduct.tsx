import type { Componente, GabineteProps, VentoinhaProps } from "~/Interface/ComponenteInterface";

export default function TableProduct(props: { produto: Componente | undefined }) {
    switch (props.produto?.categoria) {
        case 'Ventoinha':
            return (
                <>
                    <th className="specsBarraLatTh">Tamanho</th>
                    <td className="specsBarraLatTd">{(props.produto as VentoinhaProps).especificacoes.tamanho}</td>
                </>
            )
        case 'Gabinete':
            return (
                <>
                    <th className="specsBarraLatTh">Tamanho</th>
                    <td className="specsBarraLatTd">{(props.produto as GabineteProps).especificacoes.tipo}</td>
                </>
            )
        default:
            return null
    }
}