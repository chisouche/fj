// src/utils/validation.js

export const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
};

export const validatePassword = (password, options) => {
    if (!password) return [];
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigit = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*()]/.test(password);
    const isAtLeastEightCharacters = password.length >= 8;
    const isMoreThanTenCharacters = password.length > 10;

    let criteriaFailed = [];

    for (const option of options) {
        if (option === 'uppercase' && !hasUpperCase) {
            criteriaFailed.push('uppercase');
        }
        if (option === 'lowercase' && !hasLowerCase) {
            criteriaFailed.push('lowercase');
        }
        if (option === 'digit' && !hasDigit) {
            criteriaFailed.push('digit');
        }
        if (option === 'specialCharacter' && !hasSpecialCharacter) {
            criteriaFailed.push('specialCharacter');
        }
        if (option === 'length' && !isAtLeastEightCharacters) {
            criteriaFailed.push('length');
        }
        if (option === 'length_more_than_10' && !isMoreThanTenCharacters) {
            criteriaFailed.push('length_more_than_10');
        }
    }

    return criteriaFailed;
};
