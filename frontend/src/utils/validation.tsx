export const isStringNonNumeric = (str: string): boolean => {
    return /\D/.test(str);
}

export const isStringValidEmail = (str: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
}

export const isStringValidCPF = (str: string): boolean => {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(str)
}

export const isStringValidCellphone = (str: string): boolean => {
    return /^\(\d{2}\) \d{4}-\d{4}$/.test(str)
}