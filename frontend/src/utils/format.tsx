export const formatToCPF = (str: string): string => {
    return str.replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{2})$/, '$1-$2')
}

export const formatToCellphone = (str: string): string => {
    return str.replace(/\D/g, '')
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{4})(\d)/, '$1-$2')
        .replace(/(\d{4})(\d{4})$/, '$1-$2')
}