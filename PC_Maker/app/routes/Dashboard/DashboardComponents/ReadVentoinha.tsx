import { useEffect, useState } from "react";
import { TableRead } from "~/components/TableRead"
import type { VentoinhaProps } from "~/components/TableRead/Datas/componentes/Ventoinha";
import { Ventoinha } from "~/components/TableRead/Datas/componentes/Ventoinha"
import { changeSelectValue } from "~/script/changeSelectValue";
import { getComponents } from "~/script/getComponents";

function ReadVentoinha() {
    const [ventoinha, setVentoinha] = useState<VentoinhaProps[]>([]);

    async function handleAxios() {
        setVentoinha(await getComponents("Ventoinha"))
    }

    useEffect(() => {
        handleAxios();
        changeSelectValue('Ventoinha')
    }, [])

    return (
        <TableRead
            key={'Ventoinha'}
            id='Ventoinha'
            tipoCRUD={'componentes'}
            insereDados
            cols={['ID', 'Nome', 'Fabricante', 'Modelo', 'Preço', 'Vendedor', 'Link Produto', 'Tamanho']}
            body={ventoinha.map(componente => {
                return (
                    <Ventoinha
                        key={componente.id}
                        id={componente.id}
                        nome={componente.nome}
                        fabricante={componente.fabricante}
                        modelo={componente.modelo}
                        preco={componente.preco}
                        vendedor={componente.vendedor}
                        especificacoes = {{tamanho:`${componente.especificacoes.tamanho}`}}
                        linkProduto={componente.linkProduto}
                    />
                )
            })}
        />
    )
}

export default ReadVentoinha