// The endpoint from the 'countryapi' website
const urlApiCountries = `https://countryapi.io/api/all?apikey=`;
// The countries to display
export let countries;

async function getCountries(apiKey) {
    try {
        const response = await fetch(`${urlApiCountries}${apiKey}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

export async function getDataWithAPIKey(apiKey) {
    try {
        countries = await getCountries(apiKey);
    } catch (error) {
        console.error('Error fetching data:', error);
        countries = null;
    }
}
