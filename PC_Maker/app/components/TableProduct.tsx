import type { Componente, GabineteProps, VentoinhaProps, TecladoProps, ArmazenamentoProps, CoolerBoxProps, GpuProps, MonitorProps, MouseProps, PlacaMaeProps, PlacaDeCapturaProps, ProcessadorProps, PsuProps, RamProps } from "~/Interface/ComponenteInterface";

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
        case 'Placa-Mãe':
            map.set("Chipset", (props.produto as PlacaMaeProps).especificacoes.chipset)
            map.set("Tipo", (props.produto as PlacaMaeProps).especificacoes.tipo)
            map.set("Soquete", (props.produto as PlacaMaeProps).especificacoes.soquete)
            map.set("Fator de Forma", (props.produto as PlacaMaeProps).especificacoes.fatordeforma)
            map.set("TDP", (props.produto as PlacaMaeProps).especificacoes.tdp)
            map.set("Tecnologia RAM", (props.produto as PlacaMaeProps).especificacoes.tecnologiaram)
            map.set("Nº de Slots RAM", (props.produto as PlacaMaeProps).especificacoes.slotsram)
            map.set("Capacidade Máxima de RAM", (props.produto as PlacaMaeProps).especificacoes.cmaxram)
            map.set("Grafico Integrado", (props.produto as PlacaMaeProps).especificacoes.graficoi)
            map.set("Slots M.2", (props.produto as PlacaMaeProps).especificacoes.slotsm2)
            map.set("Slots PCI Express x16", (props.produto as PlacaMaeProps).especificacoes.slotspciex16)
            map.set("Slots PCI", (props.produto as PlacaMaeProps).especificacoes.slotspci)
            break;
        case 'Placa de Captura':
            map.set("Interface", (props.produto as PlacaDeCapturaProps).especificacoes.interface)
            map.set("Saída", (props.produto as PlacaDeCapturaProps).especificacoes.saida)
            map.set("Taxa de Bits", (props.produto as PlacaDeCapturaProps).especificacoes.taxadbit)
            map.set("Maior Resolução Suportada", (props.produto as PlacaDeCapturaProps).especificacoes.maioresupor)
            break;
        case 'Processador':
            map.set("Soquete", (props.produto as ProcessadorProps).especificacoes.soquete)
            map.set("Nº de Núcleos", (props.produto as ProcessadorProps).especificacoes.nNucleos)
            map.set("Nº de Threads", (props.produto as ProcessadorProps).especificacoes.nThreads)
            map.set("Frequência", (props.produto as ProcessadorProps).especificacoes.frequencia)
            map.set("Frequência Máxima com Boost", (props.produto as ProcessadorProps).especificacoes.freBoost)
            map.set("TDP", (props.produto as ProcessadorProps).especificacoes.tdp)
            map.set("OverClock", (props.produto as ProcessadorProps).especificacoes.overClock)
            map.set("Grafico Integrado", (props.produto as ProcessadorProps).especificacoes.graficoIntregado)
            map.set("Tipo de Memória", (props.produto as ProcessadorProps).especificacoes.tipoMemoria)
            break;
        case 'Fonte de Alimentação':
            map.set("Potência", (props.produto as PsuProps).especificacoes.potencia)
            map.set("Certificação", (props.produto as PsuProps).especificacoes.certificacao)
            map.set("PFC", (props.produto as PsuProps).especificacoes.pfc)
            map.set("Ventoinha", (props.produto as PsuProps).especificacoes.ventoinha)
            map.set("Conector Principal", (props.produto as PsuProps).especificacoes.conPrincipal)
            map.set("Conecor da CPU", (props.produto as PsuProps).especificacoes.conCPU)
            map.set("Conector PCIe", (props.produto as PsuProps).especificacoes.conPCIe)
            map.set("Conector SATA", (props.produto as PsuProps).especificacoes.conSATA)
            break;
        case 'Memória RAM':
            map.set("Capacidade", (props.produto as RamProps).especificacoes.capacidade)
            map.set("Velocidade", (props.produto as RamProps).especificacoes.velocidade)
            map.set("Tecnologia RAM", (props.produto as RamProps).especificacoes.tecnologia)
            map.set("Voltagem", (props.produto as RamProps).especificacoes.voltagem)
            map.set("Latência", (props.produto as RamProps).especificacoes.latencia)
            map.set("Notebooks", (props.produto as RamProps).especificacoes.notebook)
            break;
        // case "Placa-Mãe" depois termina

    }


    const teste = () => {
        map.forEach((value, key) => {
            forEach.push(
                <tr key={key} className="specsBarraLatLinha">
                    <td className="specsBarraLatTh">{key}</td>
                    <td className="specsBarraLatTd">{value}</td>
                </tr>
            )
        })
        return forEach
    }
    return (
        <>
            {teste()}
        </>
    )




}





