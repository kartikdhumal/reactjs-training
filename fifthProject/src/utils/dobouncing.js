/**
 * 
 * @param {func} - callback function 
 * @param {delay} - settimeout delay 
 * @returns 
 */

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export { debounce };