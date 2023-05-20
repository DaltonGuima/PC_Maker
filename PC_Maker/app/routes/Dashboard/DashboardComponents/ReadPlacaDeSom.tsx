import { useHookstate } from "@hookstate/core";
import { useEffect, useState } from "react";
import type { PlacaDeSomProps } from "~/Interface/ComponenteInterface";
import { TableRead } from "~/components/TableRead"

import { PlacaDeSom } from "~/components/TableRead/Datas/componentes/PlacaDeSom"
import { SearchTable } from "~/components/TableRead/TableElements";


import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadPlacaDeSom() {
    const [placaDeSom, setPlacaDeSom] = useState<PlacaDeSomProps[]>([]);
    const SearchByNomeInput = useHookstate(SearchTable)

    async function handleAxios() {
        setPlacaDeSom(await getComponents("PlacaDeSom"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('PlacaDeSom')
    }, [])

    console.log(placaDeSom)

    return (
        <TableRead
            key={'PlacaDeSom'}
            id='PlacaDeSom'
            title="PlacaDeSom"
            tipoCRUD={'componentes'}
            insereDados
            tipoPesquisa="Nome"
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Locais Vendas']}
            body={placaDeSom.filter(teste => teste.nome.includes(SearchByNomeInput.get()))
                .map(componente => {
                    return (
                        <PlacaDeSom
                            key={componente.id}
                            id={componente.id}
                            nome={componente.nome}
                            fabricante={componente.fabricante}
                            modelo={componente.modelo}
                        />
                    )
                })}
        />
    )
}

export default ReadPlacaDeSom