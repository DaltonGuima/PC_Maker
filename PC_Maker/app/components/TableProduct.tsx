import type { Componente, GabineteProps, VentoinhaProps, TecladoProps, ArmazenamentoProps, CoolerBoxProps, GpuProps, MonitorProps, MouseProps } from "~/Interface/ComponenteInterface";

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
        case 'Cooler Box':
            map.set("Potência", (props.produto as CoolerBoxProps).especificacoes.potencia)
            break;
        case 'Placa de Vídeo':
            map.set("Clock", (props.produto as GpuProps).especificacoes.clock)
            map.set("Memoria", (props.produto as GpuProps).especificacoes.memoria)
            map.set("Clock de Memória", (props.produto as GpuProps).especificacoes.clmemoria)
            map.set("Barramento", (props.produto as GpuProps).especificacoes.barramento)
            map.set("Conector", (props.produto as GpuProps).especificacoes.conector)
            break;
        case 'Monitor':
            map.set("Resolução", (props.produto as MonitorProps).especificacoes.resolucaover)
            map.set("Tamanho", (props.produto as MonitorProps).especificacoes.tamanho)
            map.set("Taxa de Atualização", (props.produto as MonitorProps).especificacoes.taxadeatualiz)
            break;
        case 'Mouse':
            map.set("Nº de Botões", (props.produto as MouseProps).especificacoes.ndebotões)
            map.set("DPI", (props.produto as MouseProps).especificacoes.dpi)
            break;
        // case "Placa-Mãe" depois termina

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





