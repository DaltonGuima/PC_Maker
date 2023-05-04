export interface Componente {
    id: string,
    nome: string,
    fabricante: string,
    modelo: string,
    preco: number,
    vendedor: string,
    linkProduto: string,
}

export interface VentoinhaProps extends Componente {
    especificacoes: {
        tamanho: string | undefined,
    }
}

export interface TecladoProps extends Componente {
    especificacoes: {
        tamanho: string | undefined,
        tipo: string | undefined,
    }
}

export interface ArmazenamentoProps extends Componente {
    especificacoes: {
        tipo: string | undefined,
        capacidade: string | undefined,
        velEscrita: string | undefined,
        velLeitura?: string | undefined,
    }
}

export interface CoolerBoxProps extends Componente {
    especificacoes: {
        potencia: string | undefined
    }
}

export interface GabineteProps extends Componente {
    especificacoes: {
        tipo: string | undefined
    }
}

export interface GpuProps extends Componente {
    especificacoes: {
        clock: string | undefined,
        memoria: string | undefined,
        clmemoria: string | undefined,
        barramento: string | undefined,
        conector: string | undefined
    }
}

export interface MonitorProps extends Componente {
    especificacoes: {
        resolucaover: string | undefined,
        taxadeatualiz: string | undefined,
        tamanho: string | undefined,
    }
}

export interface MouseProps extends Componente {
    especificacoes: {
        ndebotões: string | undefined,
        dpi: string | undefined,
    }
}

export interface PlacaDeCapturaProps extends Componente {
    especificacoes: {
        interface: string | undefined,
        saida: string | undefined,
        taxadbit: string | undefined,
        maioresupor: string | undefined,
    }
}

//Só para anotação
export interface PlacaDeSomProps extends Componente {

}

export interface PlacaMaeProps extends Componente {
    especificacoes: {
        tipo: string | undefined,
        chipset: string | undefined,
        soquete: string | undefined,
        fatordeforma: string | undefined,
        tdp: string | undefined,
        tecnologiaram: string | undefined,
        slotsram: string | undefined,
        cmaxram: string | undefined,
        graficoi: string | undefined,
        slotsm2: string | undefined,
        slotspciex16: string | undefined,
        slotspci: string | undefined,
    }
}

export interface ProcessadorProps extends Componente {
    especificacoes: {
        soquete: string | undefined,
        nNucleos: string | undefined,
        nThreads: string | undefined,
        frequencia: string | undefined,
        freBoost: string | undefined,
        tdp: string | undefined,
        overClock: string | undefined,
        graficoIntregado: string | undefined,
        tipoMemoria: string | undefined
    }
}

export interface PsuProps extends Componente {
    especificacoes: {
        potencia: string | undefined,
        certificacao: string | undefined,
        pfc: string | undefined,
        ventoinha: string | undefined,
        conPrincipal: string | undefined,
        conCPU: string | undefined,
        conPCIe: string | undefined,
        conSATA: string | undefined,
    }
}

export interface RamProps extends Componente {
    especificacoes: {
        capacidade: string | undefined,
        velocidade: string | undefined,
        tecnologia: string | undefined,
        voltagem: string | undefined,
        latencia: string | undefined,
        notebook: string | undefined
    }
}