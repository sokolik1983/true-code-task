export const fetchData = async () => {
    try {
        const response = await fetch('https://financialmodelingprep.com/api/v3/search?query=AA&apikey=FTpDDg9vsIYNf2Ben0i3M0gulIBzRFgS');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}
