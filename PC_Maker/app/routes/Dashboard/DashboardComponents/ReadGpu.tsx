import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { GpuProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { Gpu } from "~/components/TableRead/Datas/componentes/Gpu"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadGpu() {
    const [gpu, setGpu] = useState<GpuProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setGpu(await getComponents("Gpu"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Gpu')
    }, [])

    console.log(gpu)

    return (
        <TableRead
            key={'Gpu'}
            id='Gpu'
            title="Gpu"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Clock', 'Memoria', 'ClMemoria', 'Barramento', 'Conector', 'Locais Vendas']}
            body={gpu.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <Gpu
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{
                                clock: `${componente.especificacoes.clock}`, memoria: `${componente.especificacoes.memoria}`,
                                clmemoria: `${componente.especificacoes.clmemoria}`, barramento: `${componente.especificacoes.barramento}`,
                                conector: `${componente.especificacoes.conector}`,
                            }}
                        />
                    )
                })}
        />
    )
}

export default ReadGpu