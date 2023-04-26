import { GabineteProps } from "~/components/TableRead/Datas/componentes/Gabinete";

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
}