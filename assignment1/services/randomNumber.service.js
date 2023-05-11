/**
 * ======= Random Number Generator ======
 * @param {number} start 
 * @param {number} end 
 * @returns 
 */
const getRandomValue = (start, end) => {
    start = parseInt(start);
    end = parseInt(end);

    if (start > end) {
        [start, end] = [end, start];
    }

    const randomValue = Math.floor(Math.random() * (end - start + 1)) + start;
    return randomValue;
}

module.exports = getRandomValue;