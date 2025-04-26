export const isDate = (str) => {
    const dateRegex = /^(?:(?:19|20)\d{2}[-.](?:0[1-9]|1[0-2])[-.](?:0[1-9]|[12]\d|3[01])|(?:0[1-9]|[12]\d|3[01])[.](?:0[1-9]|1[0-2])[.](?:19|20)\d{2})$/;
    return dateRegex.test(str);
}

export const isEmail = (str) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(str);
}

export const isPhoneNumber = (str) => {
    const phoneRegex = /^(\+7|8)?\s*\(?\d{3}\)?\s*\d{3}[-\s]?\d{2}[-\s]?\d{2}$/;
    return phoneRegex.test(str);
}