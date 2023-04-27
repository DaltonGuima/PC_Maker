import type { GabineteProps } from "~/components/TableRead/Datas/componentes/Gabinete";
import type { VentoinhaProps } from "~/components/TableRead/Datas/componentes/Ventoinha";

export interface Componente {
    id: string,
    nome: string,
    fabricante: string,
    modelo: string,
    preco: number,
    vendedor: string,
    linkProduto: string,
    categoria?: string,
    especificacoes?: GabineteProps
    & VentoinhaProps
}