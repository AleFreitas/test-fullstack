export const isStringNonNumeric = (str: string): boolean => {
    return /\D/.test(str);
}

export const isStringValidEmail = (str: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
}

export const isStringValidCPF = (str: string): boolean => {
    return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(str)
}