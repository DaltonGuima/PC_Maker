export function changeSelectValue(value: string) {
    const localConst = document.getElementById('Navegador') as HTMLSelectElement
    localConst.value = value
}