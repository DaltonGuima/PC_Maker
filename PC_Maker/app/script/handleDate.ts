export function handleDate(data: string) {
    return data.split('-').reverse().join('/')
}