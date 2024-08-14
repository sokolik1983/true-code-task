/**
 * Коды цветов, которые рандомно выбирает функция getRandomColor
 */
const colorCodes = [
    '#FFC0CB',
    '#ADD8E6',
    '#C6F4D6',
    '#D2B48C',
    '#D3D3D3',
    '#FFFACD',
    '#B5AFEE',
];
/**
 * Выполняет запрос к API FinancialModelingPrep для поиска компаний по заданному
 * запросу и возвращает список найденных компаний.
 *
 * @returns {Promise<any>} - Возвращает промис, который разрешается с
 *  объектом JSON, содержащим список найденных компаний, или отклоняется
 *  с ошибкой, если запрос не удался.
 */
export const fetchData = async () => {
    try {
        const response = await fetch('https://financialmodelingprep.com/api/v3/search?query=AA&apikey=FTpDDg9vsIYNf2Ben0i3M0gulIBzRFgS&limit=5');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

/**
 * Функция генерирует уникальный id
 *
 * @returns {string} Отдаёт уникальный id.
 */
export const generateUniqueId = () => {
    const randomHex = Math.random().toString(16).slice(2, 18);
    const uniqueId = `id-${randomHex}`;

    return uniqueId;
};
/**
 * Функция забирает 2 первых буквы для exchange, у которого нет своего логотипа
 *
 * @returns {string} Отдаёт рандомный цвет из colorCodes.
 */
export const getTwoFirstLetters = (word: string) => {
    return word.slice(0, 2).toUpperCase();
}
/**
 * Функция генерирует рандомный цвет лого для exchange, у которого нет своего логотипа
 *
 * @returns {string} Отдаёт рандомный цвет из colorCodes.
 */
export const getRandomColor = () => {
    const index = Math.floor(Math.random() * colorCodes.length);
    return colorCodes[index];
}