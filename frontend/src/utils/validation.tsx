export const isStringNonNumeric = (str: string): boolean => {
    return /\D/.test(str);
}

export const isStringValidEmail = (str: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)
}