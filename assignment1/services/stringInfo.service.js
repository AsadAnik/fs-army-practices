/**
 * ====== String & Symbol Counter =====
 * @param {string} str 
 */
const countCharacters = (str) => {
    let letters = 0;
    let symbols = 0;
    let numbers = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        if (/[a-zA-Z]/.test(char)) {
            letters++;

        } else if (/[0-9]/.test(char)) {
            numbers++;

        } else {
            symbols++;
        }
    }

    return { letters, numbers, symbols };
};

module.exports = countCharacters;