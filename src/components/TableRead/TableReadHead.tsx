/* Lembrar de botar id depois */
export interface TableReadHeadProps{
    cols: string[],
}

export function TableReadHead({cols}:TableReadHeadProps){
return(
    <thead>
        <tr>
            {
            cols.map(colunas => <th>{colunas}</th>)
            }
        </tr>
    </thead>

)
}   