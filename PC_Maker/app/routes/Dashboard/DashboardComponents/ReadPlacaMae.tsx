import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { PlacaMaeProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { PlacaMae } from "~/components/TableRead/Datas/componentes/PlacaMae"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadPlacaMae() {
    const [placaMae, setPlacaMae] = useState<PlacaMaeProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setPlacaMae(await getComponents("PlacaMae"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('PlacaMae')
    }, [])

    console.log(placaMae)

    return (
        <TableRead
            key={'PlacaMae'}
            id='PlacaMae'
            title="PlacaMae"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Tipo', 'Chipset', 'Soquete', 'FatordeForma', 'Tdp', 'TecnologiaRam', 'SlotsRam', 'CMaxRam', 'GraficoI', 'SlotsM2', 'Slotspciex16', 'Slotspci', 'Locais Vendas']}
            body={placaMae.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <PlacaMae
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{
                                tipo: `${componente.especificacoes.tipo}`, chipset: `${componente.especificacoes.chipset}`,
                                soquete: `${componente.especificacoes.soquete}`, fatordeforma: `${componente.especificacoes.fatordeforma}`,
                                tdp: `${componente.especificacoes.tdp}`, tecnologiaram: `${componente.especificacoes.tecnologiaram}`,
                                slotsram: `${componente.especificacoes.slotsram}`, cmaxram: `${componente.especificacoes.cmaxram}`,
                                graficoi: `${componente.especificacoes.graficoi}`, slotsm2: `${componente.especificacoes.slotsm2}`,
                                slotspciex16: `${componente.especificacoes.slotspciex16}`, slotspci: `${componente.especificacoes.slotspci}`
                            }}
                        />
                    )
                })}
        />
    )
}

export default ReadPlacaMae