import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { CoolerBoxProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { CoolerBox } from "~/components/TableRead/Datas/componentes/CoolerBox"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadCoolerBox() {
    const [coolerBox, setCoolerBox] = useState<CoolerBoxProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setCoolerBox(await getComponents("CoolerBox"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('CoolerBox')
    }, [])

    console.log(coolerBox)

    return (
        <TableRead
            key={'CoolerBox'}
            id='CoolerBox'
            title="CoolerBox"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Potencia', 'Locais Vendas']}
            body={coolerBox.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <CoolerBox
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                            especificacoes={{ potencia: `${componente.especificacoes.potencia}` }}
                        />
                    )
                })}
        />
    )
}

export default ReadCoolerBox